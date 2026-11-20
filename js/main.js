/**
 * AC REPAIR & AIR CONDITIONING SERVICES
 * Master JavaScript • Pure Vanilla JS (No External Libraries)
 * TSCG Technologies Portfolio Demonstration
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollReveal();
  initFaqAccordion();
  initProjectFilters();
  initProjectModal();
  initContactForms();
  initBackToTop();
  initDemoPhoneTriggers();
});

/* --------------------------------------------------------------------------
   1. Sticky Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items for a clean single-open accordion
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          const otherHeader = other.querySelector('.faq-header');
          if (otherContent) otherContent.style.maxHeight = null;
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Projects Filtering
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Project Modal / Lightbox
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  'proj-1': {
    title: 'Modern Apartment Split AC Installation',
    category: 'Residential AC / Installation',
    img: 'images/ac-project-residential.jpg',
    overview: 'Complete split air-conditioning installation for an urban residential high-rise. Project included structural bracket mounting, vibration dampers, precision line insulation, and balanced airflow testing across open living and bedroom zones.',
    scope: 'Indoor mounting position analysis, secure outdoor bracket fixings, copper piping insulation check, condensate drain path gravity slope validation, and baseline cooling cycle verification.'
  },
  'proj-2': {
    title: 'Residential Villa Multi-Split AC Maintenance',
    category: 'Residential AC / Maintenance',
    img: 'images/ac-project-maintenance.jpg',
    overview: 'Comprehensive pre-summer seasonal preventive maintenance for a multi-storey residential villa. All indoor fan coils and outdoor condenser units underwent deep coil cleaning and electrical sensor evaluation.',
    scope: 'Filter sanitization, evaporator coil cleansing, electrical contact tightening, refrigerant circuit pressure health assessment, and remote receiver sensor testing.'
  },
  'proj-3': {
    title: 'Commercial Corporate Office Cooling Setup',
    category: 'Commercial AC',
    img: 'images/ac-project-office.jpg',
    overview: 'Engineered cooling arrangement for an open-plan commercial tech office space. Designed for consistent temperature distribution, quiet acoustic performance, and zoned thermal management during high-occupancy hours.',
    scope: 'Ceiling cassette placement mapping, return air flow balancing, centralized thermostat controls configuration, and multi-unit performance monitoring.'
  },
  'proj-4': {
    title: 'Window AC Mounting & Architectural Framing Concept',
    category: 'AC Installation / Window AC',
    img: 'images/ac-project-installation.jpg',
    overview: 'Precision window air conditioner installation featuring custom vibration dampening gaskets, weatherproof structural support framing, and neat external drainage management.',
    scope: 'Wall aperture inspection, anti-vibration mount alignment, acoustic perimeter sealing, and drainage runoff positioning away from walkways.'
  },
  'proj-5': {
    title: 'Multi-Unit Residential Complex Cooling Installation',
    category: 'Residential AC / Multi-Unit',
    img: 'images/ac-project-window-unit.jpg',
    overview: 'Coordinated cooling implementation across multiple adjacent residential townhomes, maintaining unified exterior aesthetics and quiet condenser placement away from sleeping quarters.',
    scope: 'Coordinated riser line running, architectural outdoor unit positioning, synchronized electrical breaker distribution, and final temperature delta checks.'
  },
  'proj-6': {
    title: 'Indoor Evaporator Coil Precision Cleaning Showcase',
    category: 'AC Maintenance / Cleaning',
    img: 'images/ac-project-cleaning.jpg',
    overview: 'Specialized deep hydro coil sanitization demonstrating removal of micro-dust accumulation, allergen buildup, and biofilm blockage without damaging fragile aluminium cooling fins.',
    scope: 'Protective water catch bag installation, low-pressure antimicrobial coil wash, blower wheel extraction & de-greasing, and condensate pan flush.'
  },
  'proj-7': {
    title: 'Commercial Rooftop Condenser Cluster System Inspection',
    category: 'Commercial AC / Maintenance',
    img: 'images/ac-project-multi-unit.jpg',
    overview: 'High-level commercial cooling diagnostics on rooftop condenser clusters serving retail showrooms. Verified motor bearings, fan blade balances, and heat rejection efficiency.',
    scope: 'Heat exchanger thermal imaging evaluation, condenser fan amp draw checks, dual pressure switch testing, and preventative weatherproofing.'
  },
  'proj-8': {
    title: 'Modern Office Smart Thermostat & Inverter AC Upgrade',
    category: 'AC Replacement / Modern Cooling',
    img: 'images/ac-project-cooling-upgrade.jpg',
    overview: 'Replacement of legacy fixed-speed AC systems with modern variable-speed inverter split units integrated with digital smart thermostat schedules.',
    scope: 'Safe decommission and eco-responsible disposal of obsolete indoor and outdoor units, line flushing, new inverter split positioning, and smart interface programming.'
  }
};

function initProjectModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) return;

  const modalImg = modalOverlay.querySelector('.modal-media img');
  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalCategory = modalOverlay.querySelector('.modal-category-text');
  const modalOverview = modalOverlay.querySelector('.modal-overview-text');
  const modalScope = modalOverlay.querySelector('.modal-scope-text');
  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  const openModal = (projId) => {
    const data = PROJECT_DETAILS[projId];
    if (!data) return;

    if (modalImg) {
      modalImg.src = data.img;
      modalImg.alt = data.title;
    }
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalOverview) modalOverview.textContent = data.overview;
    if (modalScope) modalScope.textContent = data.scope;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-project-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-project-trigger');
      openModal(projId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   7. Form Validation & Demo Feedback
   -------------------------------------------------------------------------- */
function initContactForms() {
  const forms = document.querySelectorAll('form[data-demo-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        const errorEl = form.querySelector(`#error-${input.name}`) || input.nextElementSibling;
        
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          if (errorEl && errorEl.classList.contains('form-error-msg')) {
            errorEl.classList.add('visible');
          }
        } else {
          // Extra checks for email & phone
          if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            input.classList.add('error');
            if (errorEl && errorEl.classList.contains('form-error-msg')) {
              errorEl.textContent = 'Please provide a valid email address.';
              errorEl.classList.add('visible');
            }
          } else if (input.name === 'phone' && input.value.replace(/\D/g, '').length < 8) {
            isValid = false;
            input.classList.add('error');
            if (errorEl && errorEl.classList.contains('form-error-msg')) {
              errorEl.textContent = 'Please enter a valid phone number.';
              errorEl.classList.add('visible');
            }
          } else {
            input.classList.remove('error');
            if (errorEl && errorEl.classList.contains('form-error-msg')) {
              errorEl.classList.remove('visible');
            }
          }
        }

        input.addEventListener('input', () => {
          input.classList.remove('error');
          if (errorEl && errorEl.classList.contains('form-error-msg')) {
            errorEl.classList.remove('visible');
          }
        }, { once: true });
      });

      if (!isValid) return;

      // Simulate loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Processing Demo Request...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        showDemoToast(
          'DEMO FORM CONFIRMATION',
          'Thank you for testing the interface. This website is a portfolio demonstration for TSCG Technologies. No information has been transmitted, logged or stored.'
        );
      }, 700);
    });
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showDemoToast(title, message) {
  let toast = document.querySelector('.demo-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'demo-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="toast-header">
      <span class="toast-title">✦ ${title}</span>
      <button type="button" style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.1rem;" onclick="this.parentElement.parentElement.classList.remove('show')">✕</button>
    </div>
    <div class="toast-body">${message}</div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 7000);
}

/* --------------------------------------------------------------------------
   8. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   9. Demo Phone Trigger Notification
   -------------------------------------------------------------------------- */
function initDemoPhoneTriggers() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showDemoToast(
        'DEMO PHONE NUMBER: 0000000000',
        'This phone number is a placeholder demonstration contact for TSCG Technologies portfolio display. It is not connected to any live telephone line.'
      );
    });
  });
}
