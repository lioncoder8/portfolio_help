/**
* Template Name: iPortfolio - v3.10.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  var image = [
  ['filter-app','Adobe Express: Graphic Design','app_1.png','https://play.google.com/store/apps/details?id=com.adobe.spark.post'],
  ['filter-app',"King's Choice",'app_2.png','https://play.google.com/store/apps/details?id=com.onemt.and.kc'],
  ['filter-app','MeChat','app_3.png','https://play.google.com/store/apps/details?id=world.playme.mechat'],
  ['filter-app','Mariner Boat GPS and Logbook','app_4.png','https://play.google.com/store/apps/details?id=com.watchandnavy.rams.mariner'],
  ['filter-web','Website','web01.jfif','https://www.etsy.com/'],
  ['filter-web','Website','web02.jfif','https://www.etsy.com/'],
  ['filter-web','Website','web03.jfif','https://www.dynamicyield.com/'],
  ['filter-web','Website','web04.jpg','https://www.freshcells.de/'],
  ['filter-web','Website','web05.jfif','https://www.web.com/'],
  ['filter-web','Website','web06.jfif','https://www.ap-websolution.de/'],
  ['filter-web','Website','web07.jfif','https://www.web.com/'],
  // ['filter-web','Website','web08.jfif','https://mobirise.com/'],
  ['filter-web','Website','web09.jfif','https://www.freepik.com/'],
  ['filter-web','Website','web10.jfif','https://surfacecondos.com/'],
  ['filter-web','Website','web11.jfif','https://www.pinterest.com/ideas/'],
  ['filter-web','Website','web12.jfif','https://themewagon.com/themes/free-bootstrap-4-html5-fitness-website-template-sportfit/'],
  ['filter-blockchain','BITCOIN CRYPTO','blockchain01.jpg','https://www.gobankingrates.com/'],
  ['filter-blockchain','BITCOIN CRYPTO','blockchain03.webp','https://www.entrepreneur.com/en-gb/','blockchain03.webp'],
  ['filter-blockchain','BITCOIN CRYPTO','blockchain02.jfif','https://www.simplilearn.com/ways-blockchain-technology-matters-article','blockchain.avif']];
  var txt = "";
  for (var i = image.length - 1; i >= 0; i--) {txt += '<div class="col-lg-2 col-md-4 portfolio-item '+image[i][0]+'"><div class="portfolio-wrap"><img src="assets/img/portfolio/'+image[i][2]+'" class="img-fluid" alt=""><div class="portfolio-links"><a href="assets/img/portfolio/'+image[i][2]+'" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="'+image[i][1]+'"><i class="bx bx-plus"></i></a><a href="'+image[i][3]+'" title="More Details" target="_blank"><i class="bx bx-link"></i></a></div></div></div>';}

  document.getElementById("portfolio-container").innerHTML  = txt;

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()