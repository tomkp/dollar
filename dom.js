var dom = function(elements) {

    elements = [].concat(elements) || [];

    var each = function(array, fn) {
        for (var i = 0, len = array.length; i < len; ++i) {
            fn.call(this, array[i]);
        }
        return this;
    };

    var listen = function(element, type, fn) {
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

    var hide = function() {
        each(elements, function(element) {
            element.style.display = 'none';
        });
        return this;
    };

    var show = function() {
        each(elements, function(element) {
            element.style.display = '';
        });
        return this;
    };

    var toggle = function() {
        each(elements, function(element) {
            if (element.style.display != 'none') element.style.display = 'none';
            else element.style.display = '';
        });
        return this;
    };

    var css = function(data) {
        each(elements, function(element) {
            for (var prop in data) {
                element.style[prop] = data[prop];
            }
        });
        return this;
    };

    var opacity = function(opacity) {
            opacity = (opacity >= 1) ? 0.999 : opacity;
            each(elements, function(element) {
                element.style.opacity = opacity; // Safari 1.2, newer Firefox and Mozilla, CSS3
                element.style.filter = "alpha(opacity:" + opacity * 100 + ")"; // IE/Win
            });
        return this;
    };

    var html = function(html) {
        each(elements, function(element) {
            element.innerHTML = html;
        });
        return this;
    };

    var on = function(type, fn) {
        each(elements, function(element) {
            listen(element, type, fn);
        });
        return this;
    };


    return {
        hide: hide,
        show: show,
        toggle: toggle,
        css: css,
        opacity: opacity,
        html: html,
        on: on
    }

};