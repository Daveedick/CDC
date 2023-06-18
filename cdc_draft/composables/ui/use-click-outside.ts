import { onMounted, onBeforeUnmount, Ref } from 'vue';
import { useEventListener } from './use-event-listener'
export const useClickOutside = (
    rootEl: Ref<HTMLElement | null>,
    callback: () => void
) => {
    useEventListener(window, 'mouseup', (e: Event) => {
        const clickedEl = e.target as HTMLElement;

        // skip if the root element contains the clicked element
        if (rootEl.value?.contains(clickedEl)) {
            return;
        }

        // otherwise execute the action
        callback();
    });
}