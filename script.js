function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()

//mouseenter on menu
const navicon = document.querySelector(".navpart2 img");
navicon.addEventListener("mouseenter", function () {
  gsap.to(".span", {
    scale: 3,
    mixblendmode: "normal"
  })
})
navicon.addEventListener("mouseleave", function () {
  gsap.to(".span", {
    scale: 1,
    mixblendmode: "difference"
  })
})

//mouseenter on navimage
const navimg = document.querySelector(".navpart1 img");
navimg.addEventListener("mouseenter", function () {
  gsap.to(".span", {
    scale: 3,
    zIndex: 99,
    mixblendmode: "normal"
  })
})
navimg.addEventListener("mouseleave", function () {
  gsap.to(".span", {
    scale: 1,
    mixblendmode: "difference"
  })
})
const sidebar = document.querySelector("#sider");
sidebar.addEventListener("mouseenter", function () {
  gsap.to(".span", {
    scale: 3,
    mixblendmode: "normal"
  })
})
sidebar.addEventListener("mouseleave", function () {
  gsap.to(".span", {
    scale: 1,
    mixblendmode: "difference"
  })
})

const page2btn = document.querySelector(".page2right a");
page2btn.addEventListener("mouseenter", function () {
  gsap.to(".span", {
    scale: 3,
    zIndex: 99,
    mixblendmode: "normal"
  })
})
page2btn.addEventListener("mouseleave", function () {
  gsap.to(".span", {
    scale: 1,
    mixblendmode: "difference"
  })
})

const dot = document.querySelector(".span");
const body = document.querySelector("body");
body.addEventListener("mousemove", function (e) {
  gsap.to(".span", {
    top: e.y,
    left: e.x,
    // scrub: true, 

  })
})

var tlpage1 = gsap.timeline()

function page1animation() {
  tlpage1.to(".page1 #pag1vdo", {
    Transform: "scaleX(0.9)",
    filter: "blur(12px)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top -10%",
      scrub: true

    }
  })
}
page1animation()

function navAnimation() {
  gsap.to(".navpart2 h4", {
    y: "-100",
    scrollTrigger: {
      trigger: ".nav",
      scroller: ".main",
      start: "top -25%",
      end: "top -10%",
      scrub: true
    }
  })
  gsap.to(".navpart2 img", {
    display: "initial",
    scrollTrigger: {
      trigger: ".nav",
      scroller: ".main",
      start: "top -25%",
      end: "top -10%",
      scrub: true
    }
  })
}
navAnimation()

function page2Animation() {
  gsap.to(".page2left #circleShape", {
    transform: "translateY(-50%) translateX(41%)",
    duration: 3,
    repeat: -1,
    stagger: 1,
    // scrub:1
  })

  var tlpage2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      // markers:true,
      start: "top 70%",
      end: "-10%",
      scrub: 1
    }
  })
  tlpage2.from(".page2left", {
    y: "50%",
    opacity: 0,
    duration: .5,

  })
  tlpage2.from(".page2right h3,.page2right p,.page2right a,.page2 h2", {
    y: "50%",
    opacity: 0,
    duration: .5,
    stagger: .5
  })
}
page2Animation()

function page3Animation() {
  var tlpage3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      // markers:true,
      start: "top 60%",
      end: "top -10%",
      scrub: 2
    }
  })

  tlpage3.from(".page3left h3,.page3left p,.page3left a ", {
    y: "50%",
    opacity: 0,
    duration: .5,
    stagger: .2
  })
  tlpage3.from(".page3vdo", {
    opacity: .5,
    y: "10%"
  })
}
page3Animation()

function page5Animation() {
  var page5tl = gsap.timeline()
  page5tl.from(".page5 h3,.page5 p,.page5 a", {
    opacity: 0,
    y: "50%",
    stagger: .5,
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      start: "top 60%",
      end: "top -10%",
      scrub: 2
    }
  })
  page5tl.from(".page5 video", {
    opacity: .5,
    y: "10%"
  })
}
page5Animation()

function page6Animation() {
  var page6tl = gsap.timeline()
  page6tl.from(".page6 p,.page6 a", {
    opacity: 0,
    y: "50%",
    stagger: .5,
    scrollTrigger: {
      trigger: ".page6",
      scroller: ".main",
      start: "top 60%",
      end: "top -10%",
      scrub: 2
    }
  })
  page6tl.from(".page6Left video,pag6right2 video", {
    opacity: .5,
    y: "10%"
  })
}
page6Animation()

function page7Animation() {
  gsap.from(".page7 p,.page7 a", {
    opacity: 0,
    y: "50%",
    stagger: .5,
    scrollTrigger: {
      trigger: ".page7",
      scroller: ".main",
      start: "top 70%",
      end: "top -10%",
      scrub: 2
    }
  })
}
page7Animation()

function page8Animation() {
  var page8tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page8",
      scroller: ".main",
      start: "top 0",
      end: "top -70%",
      pin: true,
      scrub: 2
    }
  })
  page8tl.to(".page8Content", {
    transform: "translateX(-60%)",

  }, "start")
  page8tl.to(".scrollerIn", {
    x: 720,

  }, "start")

  page8tl.from(".page8textContent h2,.page8textContent p,.page8textContent a,.page8image1 img,.page8image1 h3,.page8image1 p,.page8image2 img,.page8image2 h3,.page8image2 p,.page8image3 img,.page8image3 h3,.page8image3 p", {
    opacity: 0,
    y: "50%",
    stagger: .5,
    scrollTrigger: {
      trigger: ".page8",
      scroller: ".main",
      start: "top 50%",
      end: "top -10%",
      scrub: 2
    }
  })

}
page8Animation()

function page9Animation() {
  const page9tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page9",
      scroller: ".main",

      start: "top 50%",
      end: "top -10%",
      scrub: 2
    }
  })
  page9tl.from(".page9Content h2,.page9Content p,.page9Right ol li", {
    opacity: 0,
    y: "50%",
    stagger: .5,
  })
}
page9Animation()

function page10Animation() {
  const page10tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page10",
      scroller: ".main",

      start: "top 100%",
      end: "top -10%",
      scrub: 2
    }
  })
  page10tl.from(".page10Content h1,.page10Content p", {
    opacity: 0,
    y: "50%",
    stagger: .5,
  })
  page10tl.from(".page10Content01 ,.page10Content02,.page10Content03", {
    opacity: 0.5,
    scale: 1.3,
  })
}
page10Animation()

function page11Animation() {
  const page11tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page11",
      scroller: ".main",
      start: "top 80%",
      end: "top -10%",
      scrub: 2
    }
  })
  page11tl.from(".page11 a", {
    opacity: 0,
    y: "50%",

  })

}
page11Animation()

function page12Animation() {
  const page12tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page12",
      scroller: ".main",
      start: "top 0%",
      end: "top -50%",
      scrub: 2
    }
  })
  page12tl.from(".page12Content1Left h3,.page12Content1Left p,.page12Content1Right img,.page12IconsTopBox1,.page12IconsTopBox2,.page12IconsTopBox3,.page12IconsbottomBox1,.page12IconsbottomBox2,.page12IconsbottomBox3,.page12IconsbottomBox4,.page12Lastbtn a", {
    opacity: 0,
    y: "50%",
  })

}
page12Animation()

function page13Animation() {
  const page13tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page13",
      scroller: ".main",
      start: "top 70%",
      end: "top 0%",
      scrub: 2
    }
  })
  page13tl.from(".page13TextContentleft h1,.page13TextContentRight h1,.page13TextContentRight p", {
    opacity: 0,
    y: "50%",
  })

}
page13Animation()


function page14Animation() {
  const page14tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page14content1 ",
      scroller: ".main",
      start: "top 70%",
      end: "top 0%",
      scrub: 2
    }
  })
  page14tl.from(".page14content1Left,.page14content1Right", {
    opacity: 0,
    y: "50%",
  })

}
page14Animation()

function page13LastAnimation() {
  const page14tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page13lastContent",
      scroller: ".main",
      start: "top 70%",
      end: "top 0%",
      scrub: 2
    }
  })
  page14tl.from(".page13lastContentLeft h3,.page13lastContentLeft p,.page13lastContentRight img", {
    opacity: 0,
    y: "50%",
  })

}
page13LastAnimation()


function page15Animation(){
const page15tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page15",
    scroller:".main",
    start:"top 50%",
    end:"top -10",
    scrub:2
  }
  
})
page15tl.from(".innertextpage15Left h1,.innertextpage15Left p,.innertextpage15Left a",{
  y:"50%",
  opacity:0,
  stagger:.5
})
}

page15Animation()

function page16Animation(){
const page16tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page16",
    scroller:".main",
    start:"top 50%",
    end:"top -10",
    scrub:2
  }
  
})
page16tl.from(".page16CenterDivtop,.page16CenterDivBottom,.page16 p,.page16 a",{
  y:"50%",
  opacity:0,
  stagger:.5
})
}
page16Animation()

function page17Animation(){
const page17tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page17",
    scroller:".main",
    start:"top 50%",
    end:"top -10",
    scrub:2
  }
  
})
page17tl.from(".page17Left h2,.page17Left p",{
  y:"50%",
  opacity:0,
  stagger:.5
})
}
page17Animation()

function cursorwithbgcolor() {
  var page9 = document.querySelector(".page9")
  page9.addEventListener("mousemove", function (dets) {
    page9.style.background = `conic-gradient(at ${dets.x}px ${dets.y}px ,rgba(173, 216, 230, 0.468),rgba(144, 238, 144, 0.425),rgba(255, 255, 224, 0.37),rgba(240, 248, 255, 0.419),rgba(255, 182, 193, 0.389),rgba(173, 216, 230, 0.395))`

  })
}
cursorwithbgcolor()

var text = "We are brain.space  The brain data company"
var emptyString = ""
var splittedString = text.split("")
splittedString.forEach(function (e) {
  emptyString += `<span>${e}</span>`
})
var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = emptyString

gsap.to(".page1 h1 span", {
  display: "initial",
  stagger: .2
})
gsap.to(".page1 h1 span", {
  display: "none",
  stagger: .5,
  delay: .5
})



