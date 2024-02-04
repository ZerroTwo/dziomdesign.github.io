gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
   ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.2,
      effects: true,
   });

   gsap.fromTo('.header', { opacity: 1 },
      {
         opacity: 0,
         scrollTrigger: {
            trigger: '.header',
            start: 'center',
            end: '820',
            scrub: true,
         }

      });
   let itemsTitle = gsap.utils.toArray('.main__title')

   itemsTitle.forEach(item => {
      gsap.fromTo(item, { opacity: 0, y: 150 }, {
         opacity: 1,
         y: 0,
         scrollTrigger: {
            trigger: item,
            end: 'start',
            scrub: true,
         }
      });
   });



   let itemsBlock = gsap.utils.toArray('.main__content-block')

   itemsBlock.forEach(item => {
      gsap.fromTo(item, { opacity: 0, y: 150 }, {
         opacity: 1,
         y: 0,
         scrollTrigger: {
            trigger: item,
            end: 'center',
            scrub: true,
         }
      });
   });



   let itemsGallery = gsap.utils.toArray('.gallery__item')

   itemsGallery.forEach(item => {
      gsap.fromTo(item, { opacity: 0, y: 200 }, {
         opacity: 1,
         y: 0,
         scrollTrigger: {
            trigger: item,
            end: 'start',
            scrub: true,
         }
      });
   });

   gsap.fromTo('table', { opacity: 0, y: 150 },
      {
         opacity: 1,
         y: 0,
         scrollTrigger: {
            trigger: 'table',
            end: 'start',
            scrub: true,
         }

      });
}



