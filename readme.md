


    -	hide
    -	show
    -	toggle
    -	css
    -	opacity
    -	html
    -	on
    -	ready
    -	click
    -	dblclick
    -	contextmenu
    -	blur
    -	hover
    -	mouseover
    -	mouseout
    -	mousedown
    -	mouseup
    -	mousemove
    -	mousewheel
    -	keydown
    -	keyup
    -	keypress
    -	cut
    -	copy
    -	paste
    -	change
    -	focus
    -	scroll
    -	reset
    -	select
    -	submit
    -	resize




## Example


```
    dom(document).ready(function() {

        var element = document.getElementById("header");

        dom(element)
                .css({
                    color:"red"
                })
                .html("Q")
                .click(function() {
                    dom(this).css({
                        backgroundColor: "green"
                    });
                });
    });

```

