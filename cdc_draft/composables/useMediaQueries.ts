import { useMediaQuery, debouncedRef } from '@vueuse/core';

export default function useMediaQueries() {
  const m = ref(false);
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  const debouncedIsDesktop = debouncedRef(isDesktop, 200);

  watchEffect(() => {
    m.value = debouncedIsDesktop.value ? false : true;
  });

  return {
    m,
  };
}

// import { useMediaQuery } from '@vueuse/core';

// export default function useMediaQueries() {
//   const m = ref(false);
//   const isDesktop = useMediaQuery('(min-width: 1440px)');


//   watchEffect(() => {
//     m.value = isDesktop.value ? false : true;
//   });

//   return {
//     m,
//   };
// }


