import { getCurrentTime } from "./getCurrentTime"
import { clock } from "./main";

export const updateClock = () => {
    const currentTime = getCurrentTime();
    
    clock.textContent = currentTime;
}