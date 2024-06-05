export function getPageData() {
    const body = document.body;
    const documentElement = document.documentElement;

    return {
        windowHeight: window.innerHeight || documentElement.clientHeight || body.clientHeight,
        windowWidth: window.innerWidth || documentElement.clientWidth || body.clientWidth,
        documentHeight: Math.max(body.scrollHeight, body.offsetHeight, documentElement.clientHeight, documentElement.scrollHeight, documentElement.offsetHeight),
        documentWidth: Math.max(body.scrollWidth, body.offsetWidth, documentElement.clientWidth, documentElement.scrollWidth, documentElement.offsetWidth),
        currentScrollFromTop: window.pageYOffset || documentElement.scrollTop || body.scrollTop,
        currentScrollFromLeft: window.pageXOffset || documentElement.scrollLeft || body.scrollLeft,
    };
}