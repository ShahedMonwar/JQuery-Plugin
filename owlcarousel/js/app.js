
$('#first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


/*  

//default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

  */

var owl = $('#secound');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('#play').on('click',function(){
    owl.trigger('play.owl.autoplay',[10])
})
$('#stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
