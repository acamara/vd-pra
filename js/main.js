// Get window height
var wh = window.innerHeight;

var ctrl = new ScrollMagic.Controller();

$("section").each(function(){
    var name = $(this).attr('id');

    var picOverlay = $(this).find(".overlay");
    var slideInfo = $(this).find(".slide-info");
    var slideInfoBottom = $(this).find(".slide-info-bottom");
    var slideInfoCenter = $(this).find(".slide-info-center");
    var slideLink = $(this).find(".slide-link");
    var title = $(this).find("h4");

    var animateIn = new TimelineMax();
        
    animateIn
    .fromTo(picOverlay, 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut},"-=1")
    .from(slideInfo, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")
    .from(slideInfoBottom, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")
    .from(slideInfoCenter, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")
    .from(slideLink, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")
    .from(title, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")

    // Make a scrollMagic Scene
    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 'onLeave',
    })
    .setPin(this)
    //.addIndicators({
    //    colorStart: "rgba(255,255,255,0.5)",
    //    colorEnd: "rgba(255,255,255,0.5)", 
    //    colorTrigger : "rgba(255,255,255,1)",
    //    name:name
    //    })
    .addTo(ctrl);

    // Make a scrollMagic Scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.2, //'onCenter',
    })
    .setTween(animateIn)
    //.addIndicators()
    .addTo(ctrl);
     
});

new ScrollMagic.Scene({
  offset: wh*12
})
.setClassToggle("section#thirteen", "is-active")
.addTo(ctrl);