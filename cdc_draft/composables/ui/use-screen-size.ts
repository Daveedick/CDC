import {computed, ref} from "vue";
import {useEventListener} from "@/composables";

export const useScreenSize = () => {
    if (!window) {
        return
    }
    let currentSize = ref(window.innerWidth)

    useEventListener(window, 'resize', (e) => {
        currentSize.value = window.innerWidth
    })

    return {
        isMobile: computed(() => {
            return currentSize.value < 767
        }),

        isTablet: computed(() => {
            return currentSize.value >= 767 && currentSize.value <= 1024
        }),

        isDesktop: computed(() => {
            return currentSize.value > 1024
        })
    }
}