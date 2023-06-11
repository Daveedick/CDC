// export const useCustomScroll = () => {

//   const createCustomScrollbar = () => {
//     const customScrollbar = document.createElement('div');
//     customScrollbar.id = 'customScrollbar';
//     const scrollbar = document.createElement('div');
//     customScrollbar.append(scrollbar);
//     document.getElementById('__nuxt')?.prepend(customScrollbar)
//     if (scrollbar) {
//       scrollbar.className = 'cdc-gradient purple';
//       scrollbar.style.height = '0';
//       window.addEventListener("scroll", () => {
//         let scrollTop = window.scrollY;
//         let docHeight = document.body.offsetHeight;
//         let winHeight = window.innerHeight;
//         let scrollPercent = scrollTop / (docHeight - winHeight);
//         let scrollPercentRounded = Math.round(scrollPercent * 100);
//         scrollbar.style.height = `${scrollPercentRounded}%`
//       });
//     }
//   }

//   return {
//     createCustomScrollbar
//   }
// }
