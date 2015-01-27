function initDiagrams() {

    var elements = document.querySelectorAll('.diagram');

    Array.prototype.forEach.call(elements, function (element) {
        var content = element.innerHTML.trim();
        var diagram = Diagram.parse(content);
        element.innerHTML = "";
        diagram.drawSVG(element, {theme: 'hand'});
    });

}

setTimeout(initDiagrams, 1000);
