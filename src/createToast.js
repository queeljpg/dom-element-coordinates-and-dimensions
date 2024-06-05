export function createToast(element) {
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast');
    toastDiv.style.position = 'fixed';
    toastDiv.style.top = '20px';
    toastDiv.style.right = '20px';

    toastDiv.appendChild(element);
    return toastDiv;
}
