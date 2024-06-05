export function createBlurredCoverElement(elementToCover) {
    const coverElement = document.createElement('div');
    coverElement.classList.add('cover');
    const rect = elementToCover.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    coverElement.style.position = 'absolute';
    coverElement.style.top = rect.top + scrollTop + 'px';
    coverElement.style.left = rect.left + scrollLeft + 'px';
    coverElement.style.width = rect.width + 'px';
    coverElement.style.height = rect.height + 'px';

    return coverElement;
}
