function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
let is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function upper_bound(low, high, key, value) {
  while (low < high) {
    const mid = low + (high - low >> 1);
    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
function init_hydrate(target) {
  if (target.hydrate_init)
    return;
  target.hydrate_init = true;
  const children2 = target.childNodes;
  const m = new Int32Array(children2.length + 1);
  const p = new Int32Array(children2.length);
  m[0] = -1;
  let longest = 0;
  for (let i = 0; i < children2.length; i++) {
    const current = children2[i].claim_order;
    const seqLen = upper_bound(1, longest + 1, (idx) => children2[m[idx]].claim_order, current) - 1;
    p[i] = m[seqLen] + 1;
    const newLen = seqLen + 1;
    m[newLen] = i;
    longest = Math.max(newLen, longest);
  }
  const lis = [];
  const toMove = [];
  let last = children2.length - 1;
  for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children2[cur - 1]);
    for (; last >= cur; last--) {
      toMove.push(children2[last]);
    }
    last--;
  }
  for (; last >= 0; last--) {
    toMove.push(children2[last]);
  }
  lis.reverse();
  toMove.sort((a, b) => a.claim_order - b.claim_order);
  for (let i = 0, j = 0; i < toMove.length; i++) {
    while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
      j++;
    }
    const anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[i], anchor);
  }
}
function append(target, node) {
  if (is_hydrating) {
    init_hydrate(target);
    if (target.actual_end_child === void 0 || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
      target.actual_end_child = target.firstChild;
    }
    if (node !== target.actual_end_child) {
      target.insertBefore(node, target.actual_end_child);
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target) {
    target.appendChild(node);
  }
}
function insert(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append(target, node);
  } else if (node.parentNode !== target || anchor && node.nextSibling !== anchor) {
    target.insertBefore(node, anchor || null);
  }
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? "important" : "");
}
function custom_event(type, detail) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, false, false, detail);
  return e;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = {$$scope: 1};
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const {fragment, on_mount, on_destroy: on_destroy2, after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy2) {
        on_destroy2.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance, create_fragment, not_equal2, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal: not_equal2,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}

export { create_component as A, mount_component as B, destroy_component as C, group_outros as D, check_outros as E, compute_rest_props as F, onDestroy as G, assign as H, exclude_internal_props as I, get_spread_update as J, get_spread_object as K, set_attributes as L, listen as M, createEventDispatcher as N, SvelteComponent as S, subscribe as a, init as b, create_slot as c, text as d, element as e, attr as f, get_store_value as g, insert as h, is_function as i, append as j, set_data as k, detach as l, space as m, noop as n, empty as o, set_style as p, transition_in as q, run_all as r, safe_not_equal as s, tick as t, update_slot as u, transition_out as v, getContext as w, component_subscribe as x, onMount as y, setContext as z };
