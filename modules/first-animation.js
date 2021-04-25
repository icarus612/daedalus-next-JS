import anime from '../anime/lib/anime.es.js';


      export let firstAnimation = () =>{
          let second = document.querySelector(".second-throbber").getBoundingClientRect(),
              start = document.querySelector(".first-throbber").getBoundingClientRect(),
              spring = document.querySelector(".spring").getBoundingClientRect(),
              catapult = document.querySelector(".catapult-throbber").getBoundingClientRect(),
              top = document.querySelector("#top-container").getBoundingClientRect(),
              step = document.querySelector(".step2").getBoundingClientRect(),
              endY = (s, e, p=0) =>  (e.top + e.bottom)/2 - (s.top + s.bottom)/2 +p,
              endX = (s, e, p=0) =>  (e.left + e.right)/2 - (s.left + s.right)/2 +p;

            let animation =	anime.timeline({
    					easing: "linear",
              complete: function(anim) {
                  firstAnimation()
              },
    				}).add({
    					targets: ".mv-6",
    					translateX: [0, endX(start, second)],
              translateY: [0, 0],
    					duration: 1100,
              delay: 3830,
    				}).add({
    					targets: ".pulse6",
    					opacity: [1, 0],
    					scale: [
    						{value: [1, 2]},
    					],
    					easing: "easeOutCubic",
    					duration: 1000,
    				}).add({
              targets: ".mv-6",
              translateX: [ endX(start, second), endX(start, spring)],
    					translateY: [0, endY(start, spring, 6)],
    					duration: 1300,
    				}).add({
    					targets: ".spring",
    					borderRadius: [
    						{value: [0, "50%"]},
    						{value: ["50%", 0]},
    					],
    					duration: 200,
    					direction: "alternate"
    				}).add({
    					targets: ".mv-6",
    					translateX:
    						{
    							value: [endX(start, spring), endX(start, spring)/2],
    							duration: 910,
    							easing: "linear"
    						},
    					translateY: [
    						{
    							value: [endY(start, spring), endY(top, spring)],
    							duration: 450,
    							easing: "easeOutCirc"
    						},
    						{
    							value: [endY(top, spring), endY(start, step, -5) -step.height/2],
    							duration: 450,
    							easing: "easeInCirc"
    						},

    					],

    				}).add({
              targets: ".mv-6",
              height: [
                {
                    value: ["10px", "1px"],
                    duration: 30
                },
                {
                    value: ["1px", "10px"],
                    duration: 30
                },
              ],
              backgroundColor: {
                  value: [" rgba(175, 70, 211, 1)", " rgba(0, 0, 0, 0)"],
                  duration: 30
              },
              border: {
                value: [0, "2px solid  rgba(175, 70, 211, 1)"],
                duration: 30

              },
              borderRadius: {
                  value: ["50%", "0px"],
                  duration: 30
              },
              translateX:
                {
                  value: [ endX(start, spring)/2, endX(start, catapult)],
                  duration: 910,
                  easing: "linear",
                  delay: 50,
                },
              translateY: [

                {
                  value: [endY(start, step, -5) -step.height/2, endY(top, spring)],
                  duration: 450,
                  easing: "easeOutCirc",
                  delay: 50,

                },
                {
                  value: [endY(top, spring), endY(start, catapult)],
                  duration: 450,
                  easing: "easeInCirc"
                },
              ],
              rotateZ: {
                  value: [0, -720],
                  delay: 50,
                  duration: 800,
                  easing: "easeInOutCirc"
              },
            })
            return animation
        }
      
