// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for portfolio items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Image Carousel for Personal Projects
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel-thumbs').forEach(gallery => {
        const carouselId = gallery.dataset.carousel;
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const mainImg = carousel.querySelector('.carousel-main');
        const thumbs = gallery.querySelectorAll('.carousel-thumb');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        let currentIndex = 0;

        // Build dots
        thumbs.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });
        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        function goTo(index) {
            currentIndex = index;
            mainImg.classList.add('fading');
            setTimeout(() => {
                mainImg.src = thumbs[index].src;
                mainImg.alt = thumbs[index].alt;
                mainImg.classList.remove('fading');
            }, 200);

            thumbs.forEach(t => t.classList.remove('active'));
            thumbs[index].classList.add('active');
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
        }

        thumbs.forEach((thumb, i) => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                goTo(i);
            });
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goTo((currentIndex - 1 + thumbs.length) % thumbs.length);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goTo((currentIndex + 1) % thumbs.length);
        });
    });
});

// Image Lightbox Modal - Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalClose = document.querySelector('.modal-close');

    console.log('imageModal:', imageModal);
    console.log('modalImage:', modalImage);
    console.log('modalClose:', modalClose);

    if (imageModal && modalImage && modalClose) {
        // Add click listeners to all project images
        const projectImages = document.querySelectorAll('.project-images img');
        console.log('Project images found:', projectImages.length);
        
        projectImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                console.log('Image clicked:', this.src);
                e.stopPropagation();
                modalImage.src = this.src;
                modalImage.alt = this.alt;
                imageModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Modal should be visible now');
            });
        });

        // Close modal when clicking close button
        modalClose.addEventListener('click', function() {
            console.log('Close button clicked');
            imageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside the image
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                console.log('Outside image clicked, closing modal');
                imageModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                console.log('Escape key pressed, closing modal');
                imageModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    } else {
        console.error('Modal elements not found');
    }
});

