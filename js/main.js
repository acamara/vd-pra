var ctrl = new ScrollMagic.Controller({ globalSceneOptions: {
    triggerHook: 'onLeave'
}
});

var ctrl2 = new ScrollMagic.Controller({ globalSceneOptions: {
    triggerHook: 0.5 
}
});


$("section").each(function(){
    
    var name = $(this).attr('id');

    // Make a scrollMagic Scene
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setPin(this)
    .addIndicators({
        colorStart: "rgba(255,255,255,0.5)",
        colorEnd: "rgba(255,255,255,0.5)", 
        colorTrigger : "rgba(255,255,255,1)",
        name:name
        })
    .addTo(ctrl);
     
});

$("section").each(function(){
    
    var name = $(this).attr('id');

    var picOverlay = $(this).find(".overlay");
    var slideInfo = $(this).find(".slide-info");
    var slideLink = $(this).find(".slide-link");
    var title = $(this).find("h4");
  
    var animateIn = new TimelineMax();
        
    animateIn
    .fromTo(picOverlay, 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut},"-=1")
    .from(slideInfo, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")
    .from(slideLink, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")
    .from(title, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")

    // Make a scrollMagic Scene
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setTween(animateIn)
    .addIndicators()
    .addTo(ctrl2);
     
});

// Get window height
var wh = window.innerHeight;
 
new ScrollMagic.Scene({
  offset: wh*3
})
.setClassToggle("section#four", "is-active")
.addTo(ctrl);