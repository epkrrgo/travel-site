
## At line 9883 
## FROM
jQuery.fn.load = function( url, params, callback ) {
    CODE
}

## TO
jQuery.fn.on('load', function( url, params, callback ) {
    CODE
}


## At line 11310
## FROM
this.lazyImages.load( function () {
    CODE
})

## TO
this.lazyImages.on('load', function () {
    CODE
});
