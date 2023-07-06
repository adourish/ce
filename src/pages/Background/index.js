console.log('This is the background page.');
console.log('Put the background scripts here.');
window.ResizeObserver = undefined;
window.onerror = function (message, source, line, column, error) {
    console.error('CE: An error occurred:', error);
};