var setTriangleSize = function setTriangleSize(element) {
    var elementWidth = element.getBoundingClientRect().width;
    var elementHeight = element.getBoundingClientRect().height;

    if (elementWidth > elementHeight) {
        element.style.setProperty('--triangle-size', Math.floor(elementHeight / 3) + 'px');
    } else {
        element.style.setProperty('--triangle-size', Math.floor(elementWidth / 3) + 'px');
    }
};

var resizeElements = function resizeElements(elements) {
    elements.forEach(function (element) {
        setTriangleSize(element);
    });
};

var truncatedElements = document.querySelectorAll('.js-is-truncated');

if (truncatedElements) {
    resizeElements(truncatedElements);

    window.onresize = function () {
        return resizeElements(truncatedElements);
    };
}
