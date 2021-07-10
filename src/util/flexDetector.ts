export const detectWrap = (el1: HTMLElement, el2: HTMLElement): boolean => {
    const top1 = el1.getBoundingClientRect().top;
    const top2 = el2.getBoundingClientRect().top;

    if (top1 !== top2) {
        return true;
    }

    return false;
};

const detectWrapOnResize = (el1: HTMLElement, el2: HTMLElement) => {
    window.addEventListener("resize", (_) => detectWrap(el1, el2));
};

export default detectWrapOnResize;
