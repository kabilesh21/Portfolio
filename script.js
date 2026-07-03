document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // PAGE TRANSITION EFFECT
    // ==========================================================================
    const pageOverlay = document.getElementById('page-overlay');
    if (pageOverlay) {
        // Smoothly fade out the overlay once the DOM is loaded
        setTimeout(() => {
            pageOverlay.style.opacity = '0';
            setTimeout(() => {
                pageOverlay.style.display = 'none';
            }, 400);
        }, 100);
    }

    // ==========================================================================
    // STICKY HEADER
    // ==========================================================================
    const header = document.getElementById('header');
    const handleScrollHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScrollHeader);
    handleScrollHeader(); // Initialize on load in case page starts scrolled

    // ==========================================================================
    // MOBILE NAVIGATION MENU
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ==========================================================================
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (filename === linkHref || (filename === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================================================
    // BACK TO TOP BUTTON
    // ==========================================================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // SCROLL REVEAL ANIMATION (Using Intersection Observer)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add('active');
        });
    }

    // ==========================================================================
    // TYPING EFFECT (Hero Section)
    // ==========================================================================
    const typingSpan = document.getElementById('typing-text');
    if (typingSpan) {
        const roles = ["B.Tech IT Student", "Backend Enthusiast", "Problem Solver"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        const type = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingSpan.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Delete faster
            } else {
                typingSpan.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Type speed
            }

            // Word completed
            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at the end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        };

        // Start the typing effect
        setTimeout(type, 1000);
    }

    // ==========================================================================
    // CONTACT FORM VALIDATION & SUBMISSION (Local Handling)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple client-side checks
            if (!name || !email || !subject || !message) {
                showStatus('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (Success)
            showStatus('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        });

        const showStatus = (msg, type) => {
            formStatus.textContent = msg;
            formStatus.className = 'form-status'; // Reset classes
            formStatus.classList.add(type);
            
            // Auto hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        };

        const isValidEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
    }

    // ==========================================================================
    // CURRENT YEAR AUTO-UPDATE
    // ==========================================================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
