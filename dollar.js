


var $ = function(elements) {

    elements = [].concat(elements) || [];


    var i,
        len,
        prop,
        each,
        listen,
        hide,
        show,
        toggle,
        css,
        opacity,
        html,
        on,
        ready,
        functions,
        events
        ;

    if (Array.prototype.forEach) {
        each = function(array, fn) {
            array.forEach(fn, array);
            return this;
        }
    } else {
        each = function(array, fn) {
            for (i = 0,len = array.length; i < len; ++i) {
                fn.call(this, array[i]);
            }
            return this;
        };
    }

    listen = function(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function() {
                fn.call(element, window.event);
            });
        } else {
            element['on' + type] = fn;
        }
        return this;
    };

    hide = function() {
        each(elements, function(element) {
            element.style.display = 'none';
        });
        return this;
    };

    show = function() {
        each(elements, function(element) {
            element.style.display = '';
        });
        return this;
    };

    toggle = function() {
        each(elements, function(element) {
            if (element.style.display != 'none') element.style.display = 'none';
            else element.style.display = '';
        });
        return this;
    };

    css = function(data) {
        each(elements, function(element) {
            for (prop in data) {
                if (data.hasOwnProperty(prop)) {
                    element.style[prop] = data[prop];
                }
            }
        });
        return this;
    };

    opacity = function(opacity) {
        opacity = (opacity >= 1) ? 0.999 : opacity;
        each(elements, function(element) {
            element.style.opacity = opacity; // Safari 1.2, newer Firefox and Mozilla, CSS3
            element.style.filter = "alpha(opacity:" + opacity * 100 + ")"; // IE/Win
        });
        return this;
    };

    html = function(html) {
        each(elements, function(element) {
            element.innerHTML = html;
        });
        return this;
    };

    on = function(type, fn) {
        each(elements, function(element) {
            listen(element, type, fn);
        });
        return this;
    };

    ready = function(fn) {
        each(elements, function(element) {
            if (element.readyState == 'complete' || element.readyState == 'loaded') fn();
            element.addEventListener('DOMContentLoaded', fn, false);
        });
        return this;
    };


    functions = {
        hide: hide,
        show: show,
        toggle: toggle,
        css: css,
        opacity: opacity,
        html: html,
        on: on,
        ready: ready
    };

    events = [
        "click", "dblclick", "contextmenu", "blur", "hover", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove", "mousewheel", "keydown", "keyup", "keypress", "cut", "copy", "paste", "change", "focus", "scroll", "reset", "select", "submit", "resize"
    ];

    each(events, function(event) {
        functions[event] = function(fn) {
            on(event, fn);
            return this;
        }
    });

    return functions;
};