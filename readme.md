
## Dom methods

### Manipulation

- hide
- show
- toggle
- css
- opacity
- html
    
### Events
    
- on
- ready
- click
- dblclick
- contextmenu
- blur
- hover
- mouseover
- mouseout
- mousedown
- mouseup
- mousemove
- mousewheel
- keydown
- keyup
- keypress
- cut
- copy
- paste
- change
- focus
- scroll
- reset
- select
- submit
- resize




## Example


```
    $(document).ready(function () {


        $(document.getElementById('a')).hide();


        $(document.getElementById('b')).css({
            color: 'red'
        });


        $(document.getElementById('c')).html("d")
           .mouseover(function () {
               $(this).opacity(.5);
           })
           .mouseout(function () {
               $(this).opacity(1);
           });


        $(document.getElementById('d')).click(function () {
           $(this).css({
               backgroundColor: 'yellow'
           });
        })

    });

```

