import {
  toggle_navigation_on_scroll
} from './dom_utils'

toggle_navigation_on_scroll();

// add_class_on_focus({
//   'move_back': ['.moved_right', '.moved_left', '.moved_down'],
//   'fade_in': ['.faded_out'],
// });

// window.onload = () => {
//   const preloader = doms('#preloader')[0]
//   preloader.style.opacity = '0'
//   setTimeout(() => {
//     preloader.remove()
//   }, 1500);
// }

// try {
//   doms(`nav a[href="${location.pathname.split("/")[1]}"]`)[0].classList.add('active_link')
// } catch {
//   doms('nav .menu a:first-of-type')[0].classList.add('active_link')
// }
