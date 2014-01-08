(function () {
    function toArray(a) {
        var tmp = [];
        for (var i = 0, l = a.length ; i < l ; i++) {
            tmp.push(a.item(i));
        }
        return tmp;
    }

    function initDomSamples() {
        toArray(document.querySelectorAll('.dom-match')).forEach(function (elt) {

            // create a bunch of elements
            var DOM = document.createElement('div');
            var interactive = document.createElement('div');
            var submit = document.createElement('button');
            var input = document.createElement('input');
            var frag = document.createDocumentFragment();

            // move content to a dedicated div
            DOM.className = 'example';
            DOM.innerHTML = elt.innerHTML;
            elt.innerHTML = '';

            // prepare interactive
            interactive.className = "command";

            // append command and rendering elements
            // to a working fragment
            frag.appendChild(DOM);
            frag.appendChild(interactive);

            // create command behavior
            interactive.appendChild(input);
            interactive.appendChild(submit);
            submit.innerText = "TRY";
            submit.addEventListener('click', function (e) {
                toArray(DOM.querySelectorAll('.highlight')).forEach(removeClassName);
                toArray(DOM.querySelectorAll('.example ' + input.value)).forEach(addClassName);
                submit.blur();
                e.preventDefault();
            });
            input.addEventListener('keyup', function (e) {
                toArray(DOM.querySelectorAll('.highlight')).forEach(removeClassName);
                toArray(DOM.querySelectorAll('.example ' + input.value)).forEach(addClassName);
            });

            toArray(DOM.querySelectorAll('*')).forEach(function(element) {
                if (element.nodeType === 3) { return ; }
                var attrs = extractAttributes(element);
                var opening = document.createTextNode('<'+element.nodeName+attrs+'>');
                var closing = document.createTextNode('</'+element.nodeName+'>');
                element.insertBefore(opening, element.firstChild);
                element.appendChild(closing);
            });

            elt.appendChild(frag);
        });
    }

    function extractAttributes(elt) {
        var tmp = toArray(elt.attributes).map(function (attr) {
            return [attr.name, '"' + attr.textContent + '"'].join('=');
        });

        return (tmp.length ? ' ' : '') + tmp.join(' ');
    }

    function addClassName(toHighlight) {
        var className = toHighlight.className.split(' ');
        var index = className.indexOf('highlight');
        if (-1 === index) {
            className.push('highlight');
            toHighlight.className = className.join(' ');
        }
    }
    function removeClassName(highlighted) {
        var className = highlighted.className.split(' ');
        var index = className.indexOf('highlight');
        if (-1 !== index) {
            className.splice(index, 1);
            highlighted.className = className.join(' ');
        }
    }

    setTimeout(initDomSamples, 1000);
})();
