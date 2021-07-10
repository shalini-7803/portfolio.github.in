
let index = 0;
const totalWorkItem = $(".work-item").length;

$(document).ready(function () {

    //nav toggle
    $(".nav-toggle").click(function () {
        $(".header .nav").slideToggle();
    })



    $(window).sroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    //set lightbox img max height
    //const wHeight = $(window).height();
    //$(".lightbox-img").css("max-height",wHeight+"px");

    //lighbox 

   // $(".work-item-inner").click(function(){
     //   index = $(this).parent(".work-item").index();
       // $(".lighbox").addClass("open");
        //lightboxSlideShow();
    //})

})

//function lightboxSlideShow(){
  //  const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    //$(".lightbox-img").attr("src",imgSrc);

//}