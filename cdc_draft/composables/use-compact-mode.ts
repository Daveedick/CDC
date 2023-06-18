import { config } from "@/config";
import { ref } from "vue";

const screenBreakpoint = ref('full');
const setHeightBreakpoint = () => {
    if (window.innerHeight > config.compactMode.height) {
        screenBreakpoint.value = 'full';
    } else {
        screenBreakpoint.value = 'compact';
    }
};
setHeightBreakpoint();
window.addEventListener('resize', setHeightBreakpoint);

export const isCompactMode = (): boolean => {
    return screenBreakpoint.value === 'compact';
};

export const useCompactMode = () => isCompactMode;
