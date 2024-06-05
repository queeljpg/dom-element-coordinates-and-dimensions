export function isElementVisible(element) {
    if (!element) {
        return false;
    }
    const isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    return isVisible;
}