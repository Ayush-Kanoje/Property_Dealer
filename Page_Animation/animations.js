// Animation manager for PropDeal website

// Debug flag - set to true to see console logs
const DEBUG = true;

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (DEBUG) console.log("Animation system initializing...");
  
  // Apply animation classes to elements
  prepareElements();
  
  // Setup scroll animations
  setupScrollAnimations();
  
  // Setup page transitions
  setupPageTransitions();
  
  if (DEBUG) console.log("Animation system initialized");
});

// Mark elements for animation
function prepareElements() {
  // Section headers
  document.querySelectorAll('.section_header, .section_title, h2, h3').forEach(el => {
    el.classList.add('animate-scroll');
    el.dataset.effect = 'fade-down';
    if (DEBUG) console.log("Added animation to section header:", el);
  });
  
  // Cards, grid items
  document.querySelectorAll('.property_card, .feature_card, .testimonial_card, .carousel_item').forEach((el, index) => {
    el.classList.add('animate-scroll');
    el.dataset.effect = 'fade-up';
    el.style.transitionDelay = `${index * 0.1}s`;
    if (DEBUG) console.log("Added animation to card:", el);
  });
  
  // Image elements
  document.querySelectorAll('img:not(.avatar)').forEach(el => {
    el.classList.add('animate-scroll');
    el.dataset.effect = 'zoom-in';
    if (DEBUG) console.log("Added animation to image:", el);
  });
  
  // Text blocks
  document.querySelectorAll('p:not(.small)').forEach(el => {
    el.classList.add('animate-scroll');
    el.dataset.effect = 'fade-in';
    if (DEBUG) console.log("Added animation to paragraph:", el);
  });
  
  // If no elements were found, animate some default elements
  const animatedElements = document.querySelectorAll('.animate-scroll');
  if (animatedElements.length === 0) {
    document.querySelectorAll('section, .section_header, .hero_content, .properties_section > div, .features_section > div').forEach(el => {
      el.classList.add('animate-scroll');
      el.dataset.effect = 'fade-up';
      if (DEBUG) console.log("Added default animation to:", el);
    });
  }
}

// Setup scroll animations with IntersectionObserver
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-scroll');
  if (DEBUG) console.log(`Found ${animatedElements.length} elements to animate on scroll`);
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const effect = entry.target.dataset.effect || 'fade-in';
        entry.target.classList.add('visible', effect);
        if (DEBUG) console.log("Element is visible, adding animation:", entry.target);
      } else {
        const effect = entry.target.dataset.effect || 'fade-in';
        entry.target.classList.remove('visible', effect);
        if (DEBUG) console.log("Element is hidden, removing animation:", entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    observer.observe(el);
    if (DEBUG) console.log("Now observing:", el);
  });
}

// Setup page transitions
function setupPageTransitions() {
  // Expose the transition function to the global scope
  window.animatePageTransition = function(fromPageId, toPageId) {
    if (DEBUG) console.log(`Transitioning from ${fromPageId} to ${toPageId}`);
    
    const fromPage = document.getElementById(fromPageId);
    const toPage = document.getElementById(toPageId);
    
    if (!fromPage || !toPage) {
      console.error("Page elements not found:", { fromPageId, toPageId });
      return Promise.resolve();
    }
    
    return new Promise(resolve => {
      // Exit animation
      fromPage.classList.add('page-exit');
      
      setTimeout(() => {
        // Switch pages
        fromPage.classList.remove('active', 'page-exit');
        toPage.classList.add('active', 'page-enter');
        
        setTimeout(() => {
          // Cleanup
          toPage.classList.remove('page-enter');
          resolve();
        }, 600);
      }, 600);
    });
  };
}