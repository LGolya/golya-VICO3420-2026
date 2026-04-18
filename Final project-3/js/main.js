// -- ACTIVE NAV LINK --
 
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
 
document.querySelectorAll('.nav-links a').forEach(function(link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
 
 
// -- SLIDESHOW --
 
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
 
if (slides.length > 0) {
 
  function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  }
 
  var nextBtn = document.getElementById('next');
  var prevBtn = document.getElementById('prev');
 
  if (nextBtn) nextBtn.addEventListener('click', function() { showSlide(currentSlide + 1); });
  if (prevBtn) prevBtn.addEventListener('click', function() { showSlide(currentSlide - 1); });
 
  setInterval(function() { showSlide(currentSlide + 1); }, 4000);
}


// -- LIGHTBOX FOR GALLERY -- 
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var lightboxClose = document.getElementById('lightbox-close');
var galleryImages = document.querySelectorAll('.gallery-grid img');

if (galleryImages.length > 0) {
  galleryImages.forEach(function(img) {
    img.addEventListener('click', function() {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', function() {
      lightbox.classList.remove('active');
    });
  }

  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
}



 
var filterBtns = document.querySelectorAll('.filter-btn');
 
if (filterBtns.length > 0) {
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
 
      var filter = btn.dataset.filter;
 
      document.querySelectorAll('.gallery-item').forEach(function(item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
 
 
 
var contactForm = document.getElementById('contact-form');
 
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
 
    var name = document.getElementById('name').value;
 
    if (!name) {
      alert('Please enter your name.');
      return;
    }
 
    contactForm.innerHTML = '<p style="font-size:1.2rem; color:#4ECDC4; text-align:center; padding:40px 0;">Thanks for reaching out! I\'ll be in touch soon 🎨</p>';
  });
}

// jQuery - fade the page in on load
$(document).ready(function() {
  $('body').hide().fadeIn(800);
});

