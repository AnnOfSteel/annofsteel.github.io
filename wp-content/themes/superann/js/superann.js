jQuery(document).ready(function($) {




// variables for ScrollMagic
var bgTween1 = new TweenMax.to('body', 0.5, {
    backgroundColor: '#3b57ff'
    });

var bgTween2 = new TweenMax.to('body', 0.5, {
    backgroundColor: '#1e1e1e'
    });

// Logo images
var imagesLogo = ["https://annofsteel.github.io/wp-content/uploads/logo.svg", "https://annofsteel.github.io/wp-content/uploads/logo-2.svg", "https://annofsteel.github.io/wp-content/uploads/logo-3.svg"];

// Cycle through the array
var objLogo = {curImg: 0};

// create logo tween
var tweenLogo = TweenMax.to(objLogo, 0.5, {
curImg: imagesLogo.length - 1,  // animate propery curImg to number of images
roundProps: "curImg",       // only integers so it can be used as an array index
repeat: 9,                  // repeat 9 times
immediateRender: true,      // load first image automatically
ease: Linear.easeNone,      // show every image the same ammount of time
onUpdate: function () {
$("#logo img").attr("src", imagesLogo[objLogo.curImg]); // set the image source

}
}
);

// Hand images
var imagesHand = ["https://annofsteel.github.io/wp-content/uploads/hand-laser.svg", "https://annofsteel.github.io/wp-content/uploads/hand-laser-2.svg"];

// Cycle through the array
var objHand = {curImg: 0};

// create logo tween
var tweenHand = TweenMax.to(objHand, 0.5, {
curImg: imagesHand.length - 1,  // animate propery curImg to number of images
roundProps: "curImg",       // only integers so it can be used as an array index
repeat: 9,                  // repeat 9 times
immediateRender: true,      // load first image automatically
ease: Linear.easeNone,      // show every image the same ammount of time
onUpdate: function () {
$("#hand img").attr("src", imagesHand[objHand.curImg]); // set the image source

}
}
);


// Phung images
var imagesPhung = ["https://annofsteel.github.io/wp-content/uploads/phung-hero-2.svg", "https://annofsteel.github.io/wp-content/uploads/phung-hero.svg"];

// Cycle through the array
var objPhung = {curImg: 0};

// create Phung tween
var tweenPhung = TweenMax.to(objPhung, 0.5, {
curImg: imagesPhung.length - 1,  // animate propery curImg to number of images
roundProps: "curImg",       // only integers so it can be used as an array indexphu
repeat: 20,                  // repeat 9 times
immediateRender: true,      // load first image automatically
ease: Linear.easeNone,      // show every image the same ammount of time
onUpdate: function () {
$("#phung img").attr("src", imagesPhung[objPhung.curImg]); // set the image source

}
}
);

// Phung Bezier
var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -190},
						{x: 400,	y: -300}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 610,	y: -600},
						{x: 200,	y: -410},
						{x: 750,	y: -380},
						{x: 910,	y: -630},
						{x: 540,	y: -440},
						{x: 1100,	y: -600}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 1250,	y: -690},
						{x: 1450,	y: -820},
						{x: $(window).width() + 800,	y: -1400},
					]
			}
		};

// init controller
var controller = new ScrollMagic.Controller();


//change background colour
var containerScene1 = new ScrollMagic.Scene({
    triggerElement: '.intro'
})
.setTween(bgTween1)
.addTo(controller);

var containerScene2 = new ScrollMagic.Scene({
    triggerElement: '#work1'
})
.setTween(bgTween2)
.addTo(controller);


//pin Logo image
var pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '.intro',
  triggerHook: 0,
  duration: '30%'
})
.setPin('.content', {pushFollowers:false})
.addTo(controller);


// build Logo image scene
var LogoScene = new ScrollMagic.Scene({triggerElement: ".intro", duration: '100%'})
.setTween(tweenLogo)
.addTo(controller);

// build Hand image scene
var HandScene = new ScrollMagic.Scene({triggerElement: ".handTrigger", duration: '100%'})
.setTween(tweenHand)
.addTo(controller);

// build Phung image scene
var PhungScene = new ScrollMagic.Scene({triggerElement: ".phungTrigger", duration: '100%'})
.setTween(tweenPhung)
.addTo(controller);

// Hide Phung on page load and force him to the front
TweenMax.set($("#phung"), { opacity: 0, zIndex: 9999 });

// create Phung Bezier tween
var tweenPhungBezier = new TimelineMax()
			.add(TweenMax.to($("#phung"), 1.2, {css:{bezier:flightpath.entry, opacity: 1}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#phung"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#phung"), 1, {css:{bezier:flightpath.leave, opacity: 0}, ease:Power1.easeInOut}));

var PhungBezierScene = new ScrollMagic.Scene({triggerElement: ".phungTrigger", duration: 1000, offset: 100})
						.setPin("#phung", {pushFollowers: false})
						.setTween(tweenPhungBezier)
						.addTo(controller);


// define movement of panels
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to("#slideContainer", 0.5, {z: -150})    // move back in 3D space
      .to("#slideContainer", 1,   {x: "-25%"})  // move in to first panel
      .to("#slideContainer", 0.5, {z: 0})       // move back to origin in 3D space
      // animate to third panel
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-50%"})
      .to("#slideContainer", 0.5, {z: 0})
      // animate to forth panel
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-75%"})
      .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addTo(controller);


// Lazy load recliner.js
$(function() {
    $(".lazy").recliner({
        attrib: "data-src", // selector for attribute containing the media src
        throttle: 300,      // millisecond interval at which to process events
        threshold: 100,     // scroll distance from element before its loaded
        live: true          // auto bind lazy loading to ajax loaded elements
    });
});




});

