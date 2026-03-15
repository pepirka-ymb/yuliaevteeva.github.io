document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                const spans = burgerBtn.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    });
});

const openModalButton = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const cancelModalButton = document.getElementById('cancelModal');
const hero = document.getElementById("section1");
const scrollBtn = document.getElementById("scrollTopBtn");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollBtn.style.display = "none";
      } else {
        scrollBtn.style.display = "flex";
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(hero);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    }
    
    function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
    }
    
    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    cancelModalButton.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
    closeModal();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
    }
    });