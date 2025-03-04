function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
    
    /* Contact Form Interactions */
    $('#btnOpenForm').on('click', function(event) {
      event.preventDefault();
  
      $('.form-popup-bg').addClass('is-visible');
    });
    
      //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
      if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    });
  






      (function(){
        var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window);
      
      skipClickDelay = function(e){
        e.preventDefault();
        e.target.click();
      }
    
            setAriaAttr = function(el, ariaType, newProperty){
            el.setAttribute(ariaType, newProperty);
        };
        setAccordionAria = function(el1, el2, expanded){
            switch(expanded) {
          case "true":
              setAriaAttr(el1, 'aria-expanded', 'true');
              setAriaAttr(el2, 'aria-hidden', 'false');
              break;
          case "false":
              setAriaAttr(el1, 'aria-expanded', 'false');
              setAriaAttr(el2, 'aria-hidden', 'true');
              break;
          default:
                    break;
            }
        };
    //function
    switchAccordion = function(e) {
      console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if(thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
          thisQuestion.classList.toggle('is-collapsed');
          thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');
         
          thisAnswer.classList.toggle('animateIn');
        };
        for (var i=0,len=accordionToggles.length; i<len; i++) {
            if(touchSupported) {
          accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if(pointerSupported){
          accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
      }
    })();



    const sliderUI = {
  slider: document.getElementById("slider"),
  slides: document.querySelectorAll(".slide"),
  controls: {
    prevBtn: document.getElementById("btn-prev"),
    nextBtn: document.getElementById("btn-next")
  }
};

let sliderController = {
  isMouseDown: false,
  startPosX: 0,
  // scrollLeft: sliderUI.slider.offsetLeft,
  goNext() {
    let _scrollBy = Math.round((sliderUI.slider.offsetWidth + 20) - (sliderUI.slider.scrollLeft % (sliderUI.slides[0].offsetWidth + 20)));
    
    easyScroll({
      scrollableDomEle: sliderUI.slider,
      direction: "right",
      duration: 200,
      easingPreset: "easeInQuad",
      scrollAmount: _scrollBy
    });
  },
  goPrev() {
    let _scrollBy = Math.round(sliderUI.slider.offsetWidth + 20) - (Math.round((sliderUI.slides[0].offsetWidth + 20)) - (sliderUI.slider.scrollLeft % (Math.round(sliderUI.slides[0].offsetWidth + 20))));
    
    easyScroll({
      scrollableDomEle: sliderUI.slider,
      direction: "left",
      duration: 200,
      easingPreset: "easeInQuad",
      scrollAmount: _scrollBy
    });
  }
};

// sliderUI.controls.nextBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   sliderController.goNext();
// });

// sliderUI.controls.prevBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   sliderController.goPrev();
// });

// sliderUI.slider.addEventListener("wheel", (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   sliderUI.slider.scrollLeft -= event.wheelDeltaX;
// });

// sliderUI.slider.addEventListener("scroll", (event) => {
//   if (
//     sliderUI.slider.offsetWidth + sliderUI.slider.scrollLeft + 1 >
//     sliderUI.slider.scrollWidth
//   ) {
//     sliderUI.controls.nextBtn.classList.add("hide");
//     if (document.activeElement.id === sliderUI.controls.nextBtn.id) {
//       sliderUI.controls.prevBtn.focus();
//     }
//   } else {
//     sliderUI.controls.nextBtn.classList.remove("hide");
//   }

//   if (sliderUI.slider.scrollLeft - 1 < 0) {
//     sliderUI.controls.prevBtn.classList.add("hide");
//     if (document.activeElement.id === sliderUI.controls.prevBtn.id) {
//       sliderUI.controls.nextBtn.focus();
//     }
//   } else {
//     sliderUI.controls.prevBtn.classList.remove("hide");
//   }
// });

// sliderUI.slider.addEventListener("mousedown", (event) => {
//   sliderController.isMouseDown = true;
//   sliderUI.slider.classList.add('dragging');
//   sliderController.scrollLeft = sliderUI.slider.scrollLeft;
//   sliderController.startPosX = event.pageX - sliderUI.slider.offsetLeft;
// });

// sliderUI.slider.addEventListener("mousemove", (event) => {
//   if (!sliderController.isMouseDown) return;
//   let _x = event.pageX - sliderUI.slider.offsetLeft;
//   let _xChange = _x - sliderController.startPosX;
//   sliderUI.slider.scrollLeft = sliderController.scrollLeft - _xChange;
// });

// sliderUI.slider.addEventListener("mouseup", (event) => {
//   sliderController.isMouseDown = false;
//   sliderUI.slider.classList.remove('dragging');
// });

// sliderUI.slider.addEventListener("mouseleave", (event) => {
//   sliderController.isMouseDown = false;
// });

// sliderUI.slider.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowLeft") {
//     sliderController.goPrev();
//   }
//   if (event.key === "ArrowRight") {
//     sliderController.goNext();
//   }
// });

// sliderUI.slider.addEventListener("touchstart", (event) => {
//   sliderController.isMouseDown = true;
//   sliderController.scrollLeft = sliderUI.slider.scrollLeft;
//   sliderController.startPosX = event.pageX - sliderUI.slider.offsetLeft;
// });

// let images = [
//   'https://images.unsplash.com/photo-1653376813085-9ce473ec934e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
//   'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
//   'https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
//   'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
//   'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
//   'https://images.unsplash.com/photo-1653376813085-21121b1401ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1653376813100-18f874451db1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1652195598569-f523c6973b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1653383726851-46c29be94b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
// ];

// sliderUI.slides.forEach((slide, index) => {
//   let img = new Image();
//   img.onload = (a) => {
//     slide.style.backgroundImage = `url(${images[index]})`;
//     slide.classList.add('has-image');
//   }
//   img.src = images[index];
// });

// Modal
// const openBtn = document.getElementById('fab');
// const closeBtn = document.getElementById('btn-close');
// const modal = document.getElementById('modal-controls');

// if (modal) {
//   if (openBtn) {
//     openBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       modal.classList.add('show');
//     });
//   }
  
//   if (closeBtn) {
//     closeBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       modal.classList.remove('show');
//     });
//   }
  
//   modal.addEventListener('click', (event) => {
//     if (event.target.id === 'modal-controls') {
//         modal.classList.remove('show');
//     }
//   });
// }

//Mouse drag
// document.querySelectorAll('.carousel').forEach(carousel => {   
//     let isDown = false;
//     let startX;
//     let scrollLeft;
  
//     carousel.addEventListener('mousedown', (e) =>{
//       isDown = true;
//       startX = e.pageX - carousel.offsetLeft;
//       scrollLeft = carousel.scrollLeft;
//       carousel.classList.add('is-dragging');
//       cancelMomentumTracking();
//     });
    
//     carousel.addEventListener('mouseleave', () => {
//       isDown = false;
//       carousel.classList.remove('is-dragging');
//     });
    
//     carousel.addEventListener('mouseup', (e) => {
//       isDown = false;
//       carousel.classList.remove('is-dragging');
//       beginMomentumTracking();
//     });
    
//     carousel.addEventListener('mousemove', (e) => {
//       if(!isDown) return;
      
//       e.preventDefault();
//       const x = e.pageX - carousel.offsetLeft;
//       const walk = (x - startX) * 1;
//       var prevScrollLeft = carousel.scrollLeft;
//       carousel.scrollLeft = scrollLeft - walk;
//       velX = carousel.scrollLeft - prevScrollLeft;
//     });
    
//     // Momentum 
//     let velX = 0;
//     let momentumID;
    
//     carousel.addEventListener('wheel', (e) => {
//       cancelMomentumTracking();
//     });  
    
//     function beginMomentumTracking(){
//       cancelMomentumTracking();
//       momentumID = requestAnimationFrame(momentumLoop);
//     }
  
//     function cancelMomentumTracking(){
//       cancelAnimationFrame(momentumID);
//     }
  
//     function momentumLoop(){
//       carousel.scrollLeft += velX;
//       velX *= 0.94; 
//       if (Math.abs(velX) > .5){
//         momentumID = requestAnimationFrame(momentumLoop);
//       }
//     }
//   });
  
  
  
//   //observe width
//   const items = document.querySelectorAll('.carousel-item');
  
//   const myObserver = new ResizeObserver(entries => {
//     for (let entry of entries) {
//       const it = document.querySelectorAll('.carousel-item');
//       const iw = Math.floor(entry.contentRect.width);
//       for (let i = 0; i < it.length;  i++) {
//         it[i].setAttribute('data-width', iw);
//       }
//     }
//   });
  
//   items.forEach(item => {
//     myObserver.observe(item);
//   });


$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});