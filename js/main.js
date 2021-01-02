let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.navbar .navbar-nav li');
let btn = document.querySelectorAll('button');
window.addEventListener('mousemove',cursor);

function cursor(e){
   mouseCursor.style.top = e.pageY + "px";
   mouseCursor.style.left = e.pageX  + "px";
}

$(window).click(function(e){
    mouseCursor.classList.add("click-link-grow");
});
$(window).mousemove(function(e){
    mouseCursor.classList.remove("click-link-grow");
})
navLinks.forEach(link =>{
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("link-grow");
    });
});
btn.forEach(link =>{
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("btn-link-grow");
    });
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("btn-link-grow");
    });
});
// $(document)
//   .mousemove(function(e) {
//     $('.cursor')
//       .eq(0)
//       .css({
//         left: e.clientX,
//         top: e.clientY
//       });
//     setTimeout(function() {
//       $('.cursor')
//         .eq(1)
//         .css({
//           left: e.clientX,
//           top: e.clientY
//         });
//     }, 100);
// })

$(window).on('load', function () {
    $('.loader').fadeOut(1000, function () {
        // $(this).remove();
    });      
});

$(document).ready(function () {
    'use strict';

    
     var winH = $(window).height(),
        navH = $('.navbar').innerHeight();
    
      $('.slider , .carousel-item').height(winH + navH);
      $('.slider , .carousel-item').css("marginTop", -navH)
      $('.slider').css("marginBottom", -navH)
    



       var s =$('.navbar .nav-link');
       s.click(function(){
          $('html , body').animate({
              scrollTop:$(this.hash).offset().top
          },1000);
       });


    // button scroll top
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
           $('.topbtn').fadeIn(); 
        }else{
            $('.topbtn').fadeOut(); 
        } 
        
    });
    
    $('.topbtn').click(function(){
        $('html , body').animate({scrollTop:0},800);
    });
    
      new WOW().init();

     
    




    // OWL 
    $('.main-owl').owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        dots:true,
        autoplaySpeed: 3000,
        smartSpeed: 3000,
        dragEndSpeed: 3000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.tabcontent-owl').owlCarousel({
           loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        slidSpeed: 300,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
   
    });


});


























