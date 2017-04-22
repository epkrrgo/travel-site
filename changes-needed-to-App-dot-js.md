
## At line 9883 
## FROM
jQuery.fn.load = function( url, params, callback ) {
    
}

## TO
jQuery.fn.on('load', function( url, params, callback ) {

}


## At line 11310
## FROM
this.lazyImages.load( function () {
    
})

## TO
this.lazyImages.on('load', function () {
    Waypoint.refreshAll();
});

