/**
 * IronPulse Fitness — Interactive Script
 * Fictional Gym Demo Website for NRK Digitals Portfolio
 * Pure Vanilla JavaScript (No frameworks or dependencies required)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CONFIGURATION (EASILY CUSTOMIZABLE PLACEHOLDERS)
  // ==========================================================================
  const CONFIG = {
    gymName: 'IronPulse Fitness',
    agencyName: 'NRK Digitals',
    
    // REPLACE WITH YOUR ACTUAL WHATSAPP BUSINESS NUMBER (Country Code + 10 Digits)
    // Example: '919876543210' for +91 98765 43210
    whatsappNumber: '919876543210',
    
    // Default message sent when user clicks WhatsApp button
    whatsappDefaultMessage: 'Hi IronPulse Fitness, I would like to enquire about your gym memberships and schedule a free trial pass!',
    
    // Placeholder contact details
    phoneDisplay: '+91 98765 43210',
    emailDisplay: 'contact@ironpulse-demo.com'
  };

  // ==========================================================================
  // 2. DOM ELEMENTS CACHE
  // ==========================================================================
  const DOM = {
    header: document.getElementById('navbar'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    closeDrawerBtn: document.getElementById('closeDrawerBtn'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    desktopNavLinks: document.querySelectorAll('.desktop-nav .nav-link'),
    floatingWhatsAppBtn: document.getElementById('floatingWhatsAppBtn'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    enquiryForm: document.getElementById('gymEnquiryForm'),
    formAlert: document.getElementById('formAlert'),
    planSelectDropdown: document.getElementById('membershipPlan'),
    planButtons: document.querySelectorAll('.select-plan-btn'),
    trainerButtons: document.querySelectorAll('.trainer-book-btn'),
    programLinks: document.querySelectorAll('.program-cta-link'),
    demoModal: document.getElementById('demoModal'),
    modalSummary: document.getElementById('modalSummary'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    scrollSections: document.querySelectorAll('section[id]')
  };

  // ==========================================================================
  // 3. WHATSAPP LINK INITIALIZATION
  // ==========================================================================
  function initWhatsAppLinks() {
    const encodedMsg = encodeURIComponent(CONFIG.whatsappDefaultMessage);
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;

    if (DOM.floatingWhatsAppBtn) {
      DOM.floatingWhatsAppBtn.href = waUrl;
      DOM.floatingWhatsAppBtn.setAttribute(
        'aria-label',
        `Chat with ${CONFIG.gymName} on WhatsApp (Placeholder: ${CONFIG.phoneDisplay})`
      );
    }
  }

  // ==========================================================================
  // 4. STICKY HEADER & SCROLL BEHAVIOR
  // ==========================================================================
  function handleScrollHeader() {
    if (!DOM.header) return;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 30) {
      DOM.header.classList.add('scrolled');
    } else {
      DOM.header.classList.remove('scrolled');
    }

    // Toggle Back to Top Button
    if (DOM.backToTopBtn) {
      if (scrollY > 350) {
        DOM.backToTopBtn.classList.add('visible');
      } else {
        DOM.backToTopBtn.classList.remove('visible');
      }
    }
  }

  // ==========================================================================
  // 5. ACTIVE NAVIGATION LINK SPY (SCROLLSPY)
  // ==========================================================================
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offset = 140;

    DOM.scrollSections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        DOM.desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        DOM.mobileNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  // ==========================================================================
  // 6. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  function openMobileMenu() {
    if (!DOM.mobileDrawer || !DOM.mobileMenuBtn) return;
    DOM.mobileDrawer.classList.add('active');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'false');
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMobileMenu() {
    if (!DOM.mobileDrawer || !DOM.mobileMenuBtn) return;
    DOM.mobileDrawer.classList.remove('active');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'true');
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function initMobileDrawer() {
    if (DOM.mobileMenuBtn) {
      DOM.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = DOM.mobileDrawer.classList.contains('active');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (DOM.closeDrawerBtn) {
      DOM.closeDrawerBtn.addEventListener('click', closeMobileMenu);
    }

    if (DOM.drawerBackdrop) {
      DOM.drawerBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close on clicking any mobile navigation link
    DOM.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.mobileDrawer && DOM.mobileDrawer.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // 7. SMOOTH LINK SCROLLING WITH OFFSET
  // ==========================================================================
  function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = DOM.header ? DOM.header.offsetHeight : 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Set focus for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });

    // Back to top click handler
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ==========================================================================
  // 8. PRICING & TRAINER CTAS -> AUTOFILL ENQUIRY FORM
  // ==========================================================================
  function initFormFillTriggers() {
    // 1. Select Plan buttons on Membership Cards
    DOM.planButtons.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const planName = this.getAttribute('data-plan');
        if (planName && DOM.planSelectDropdown) {
          DOM.planSelectDropdown.value = planName;
          
          // Flash the dropdown briefly to highlight change
          highlightField(DOM.planSelectDropdown);

          // Focus on full name after scroll
          focusNameInput();
        }
      });
    });

    // 2. Trainer Book Buttons
    DOM.trainerButtons.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const trainerName = this.getAttribute('data-trainer');
        if (DOM.planSelectDropdown) {
          DOM.planSelectDropdown.value = '1-on-1 Personal Training';
        }
        
        const messageInput = document.getElementById('messageNote');
        if (messageInput && trainerName) {
          messageInput.value = `I am interested in personal training sessions with Coach ${trainerName}. Please share coaching availability.`;
          highlightField(messageInput);
        }

        // Scroll to contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const headerHeight = DOM.header ? DOM.header.offsetHeight : 70;
          const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);
          window.scrollTo({ top: pos, behavior: 'smooth' });
          focusNameInput();
        }
      });
    });

    // 3. Program Track Links
    DOM.programLinks.forEach((link) => {
      link.addEventListener('click', function () {
        const programName = this.getAttribute('data-program');
        const messageInput = document.getElementById('messageNote');
        if (messageInput && programName) {
          messageInput.value = `I want to learn more about the ${programName} training track.`;
          highlightField(messageInput);
        }
        focusNameInput();
      });
    });
  }

  function focusNameInput() {
    setTimeout(() => {
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        nameInput.focus();
      }
    }, 500);
  }

  function highlightField(el) {
    el.style.borderColor = 'var(--accent-orange)';
    el.style.boxShadow = '0 0 0 3px var(--accent-orange-glow)';
    setTimeout(() => {
      el.style.borderColor = '';
      el.style.boxShadow = '';
    }, 1200);
  }

  // ==========================================================================
  // 9. ENQUIRY FORM VALIDATION & DEMO SUBMISSION MODAL
  // ==========================================================================
  function initEnquiryForm() {
    if (!DOM.enquiryForm) return;

    DOM.enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phoneNumber');
      const emailInput = document.getElementById('emailAddress');
      const planInput = document.getElementById('membershipPlan');
      const timeInput = document.getElementById('preferredTime');
      const goalInput = document.getElementById('fitnessGoal');
      const noteInput = document.getElementById('messageNote');

      // Reset field errors
      clearErrors([nameInput, phoneInput, emailInput]);

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'fullNameError', 'Please enter your full name (minimum 2 characters).');
        isValid = false;
      }

      // Validate Phone (basic 10-digit / international format check)
      const phoneVal = phoneInput.value.trim();
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneVal || !phoneRegex.test(phoneVal)) {
        showFieldError(phoneInput, 'phoneNumberError', 'Please enter a valid phone number (8–15 digits).');
        isValid = false;
      }

      // Validate Email
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showFieldError(emailInput, 'emailAddressError', 'Please enter a valid email address.');
        isValid = false;
      }

      if (!isValid) return;

      // SUCCESS: Display confirmation modal simulation
      showDemoConfirmation({
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        plan: planInput.value,
        time: timeInput.value,
        goal: goalInput.value,
        note: noteInput.value.trim() || 'None provided'
      });

      // Reset the form
      DOM.enquiryForm.reset();
    });

    // Close Modal Button
    if (DOM.modalCloseBtn) {
      DOM.modalCloseBtn.addEventListener('click', closeDemoModal);
    }

    // Close Modal on backdrop click
    if (DOM.demoModal) {
      DOM.demoModal.addEventListener('click', (e) => {
        if (e.target === DOM.demoModal) {
          closeDemoModal();
        }
      });
    }
  }

  function showFieldError(inputEl, errorSpanId, message) {
    inputEl.classList.add('input-error');
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
      errorSpan.textContent = message;
    }
    inputEl.focus();
  }

  function clearErrors(inputs) {
    inputs.forEach((input) => {
      if (input) {
        input.classList.remove('input-error');
      }
    });
    const errorSpans = document.querySelectorAll('.field-error');
    errorSpans.forEach((span) => {
      span.textContent = '';
    });
  }

  function showDemoConfirmation(data) {
    if (!DOM.demoModal || !DOM.modalSummary) return;

    DOM.modalSummary.innerHTML = `
      <p><strong>Member Name:</strong> ${sanitizeHTML(data.name)}</p>
      <p><strong>Phone:</strong> ${sanitizeHTML(data.phone)}</p>
      <p><strong>Email:</strong> ${sanitizeHTML(data.email)}</p>
      <p><strong>Selected Plan:</strong> <span style="color:var(--accent-orange); font-weight:700;">${sanitizeHTML(data.plan)}</span></p>
      <p><strong>Preferred Slot:</strong> ${sanitizeHTML(data.time)}</p>
      <p><strong>Fitness Goal:</strong> ${sanitizeHTML(data.goal)}</p>
      <p style="margin-top:8px; border-top:1px solid rgba(255,255,255,0.1); padding-top:6px;">
        <em>Notes:</em> ${sanitizeHTML(data.note)}
      </p>
    `;

    DOM.demoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeDemoModal() {
    if (!DOM.demoModal) return;
    DOM.demoModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  // ==========================================================================
  // 10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target); // Reveal once
            }
          });
        },
        {
          root: null,
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      animatedElements.forEach((el) => observer.observe(el));
    } else {
      // Fallback for older browsers: show all immediately
      animatedElements.forEach((el) => el.classList.add('is-visible'));
    }
  }

  // ==========================================================================
  // 11. INITIALIZATION ON DOM READY
  // ==========================================================================
  function init() {
    initWhatsAppLinks();
    initMobileDrawer();
    initSmoothScrolling();
    initFormFillTriggers();
    initEnquiryForm();
    initScrollAnimations();

    // Scroll listeners with throttling
    let isTicking = false;
    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          handleScrollHeader();
          updateActiveNavLink();
          isTicking = false;
        });
        isTicking = true;
      }
    });

    // Run once on load to sync initial state
    handleScrollHeader();
    updateActiveNavLink();

    // Log portfolio branding confirmation in console
    console.log(
      `%c⚡ ${CONFIG.gymName} — Demo Website%c\nCrafted with precision by ${CONFIG.agencyName}\nAll details, trainer profiles, pricing, and numbers are illustrative demonstration content.`,
      'color: #ff5e14; font-size: 16px; font-weight: bold; background: #080808; padding: 4px 8px; border-radius: 4px;',
      'color: #e2e2e5; font-size: 12px;'
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
