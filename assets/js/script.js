'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// Project modal elements
// Define per-project details here. Key should match the visible project title text.
const projectsData = {
  'Herbal App': {
    category: 'Mobile Application',
    description: 'Discover herbal remedies with searchable plant profiles, symptom-based suggestions, and dosage guidance. Save favorites, access content offline, and receive friendly reminders. A clean, reliable interface promotes responsible usage and supports mindful wellness routines every day.',
    image: '/assets/images/Herbal-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'MakeUp App': {
    category: 'Mobile Application',
    description: 'A modern beauty companion to explore looks, tutorials, and product catalogs. Get skin-type recommendations, shade matching, and manage wishlists. Intuitive design and smooth performance help users experiment confidently and save favorite styles for quick access.',
    image: '/assets/images/Makeup-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'MOR App': {
    category: 'Mobile Application',
    description: 'A productivity and habit-building app with goals, reminders, streaks, and simple analytics. Minimal design, offline access, and notifications fit daily life, helping users stay organized, focused, and consistent on personal growth plans and routines.',
    image: '/assets/images/MOR-APP.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Pet App': {
    category: 'Mobile Application',
    description: 'All-in-one pet care with vaccination schedules, reminders, vet contacts, feeding plans, and activity logs. Store medical history, track growth, and access training guides. Friendly design streamlines daily tasks and keeps pets healthy, active, and happy.',
    image: '/assets/images/Pet-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Wallet App': {
    category: 'Mobile Application',
    description: 'A secure finance app to track expenses, manage budgets, and view trends. Set savings goals, categorize transactions, and see monthly summaries. Clear charts, smart alerts, and quick entry build awareness and help users stay on budget.',
    image: '/assets/images/Wallet-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Wedding App': {
    category: 'Mobile Application',
    description: 'A wedding planner with guest management, RSVP tracking, budgets, and vendor coordination. Share schedules and galleries with guests. Checklists and reminders keep everything organized in one elegant, stress-reducing app experience for couples.',
    image: '/assets/images/Wedding-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Zikr App': {
    category: 'Mobile Application',
    description: 'A serene app for daily dhikr with curated supplications, repetition counts, and reminders. Calming design, offline support, and configurable sessions enable mindful practice anywhere. Progress views and saved presets encourage consistent, meaningful reflection.',
    image: '/assets/images/Zikr-App.png',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Fitness App': {
    category: 'Mobile Application',
    description: 'A personalized fitness companion with guided routines, activity tracking, and goals. Monitor calories, log exercises, and get adaptive recommendations. Clean visuals, reminders, and progress charts help maintain consistency and achieve sustainable results.',
    image: '/assets/images/work1.jpg',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'Savo App': {
    category: 'Mobile Application',
    description: 'A sleek, user-centered app for organizing tasks with lists, notes, tags, priorities, and reminders. Categorize projects, track progress, and stay focused with minimal distractions. Ideal for personal tasks and lightweight project planning.',
    image: '/assets/images/work2.jpg',
    links: { playstore: '#', appstore: '#', visit: '' }
  },
  'UI/UX': {
    category: 'UI/UX Design',
    description: 'A UI/UX showcase emphasizing clarity, accessibility, and delight. Includes research, wireframes, high-fidelity prototypes, and micro-interactions. Focused on solving real user problems with thoughtful IA, consistent patterns, and responsive, brand-aligned design.',
    image: '/assets/images/UI-UX.png',
    links: { visit: '' }
  },
  'Twala Meals': {
    category: 'UI/UX Design',
    description: 'A streamlined food ordering platform to browse menus, customize orders, and track deliveries. Highlights bestsellers and deals with effortless navigation. Built for performance, secure payments, and scalability to ensure a smooth, reliable experience.',
    image: '/assets/images/UI-UX.png',
    links: { visit: '' }
  },
  'Twala Meals': {
    category: 'Web development',
    description: 'A streamlined food ordering platform to browse menus, customize orders, and track deliveries. Highlights bestsellers and deals with effortless navigation. Built for performance, secure payments, and scalability to ensure a smooth, reliable experience.',
    image: '/assets/images/TwalaMeals.png',
    links: { visit: '#', github: '', video: '' }
  },
  'Tushifa Website': {
    category: 'Web development',
    description: 'A professional healthcare site featuring services, departments, and appointments. Streamlined navigation, responsive layouts, and accessibility build trust. Prioritizes performance, SEO, and security to deliver an informative, credible experience across devices.',
    image: '/assets/images/Tushifa-website.png',
    links: { visit: '#', github: '' }
  },
  'Hotel Booking': {
    category: 'Web development',
    description: 'A fast, user-friendly hotel booking interface to discover stays, compare options, and reserve rooms. Filter by budget, amenities, and ratings. Responsive design, clear pricing, and performance ensure a smooth, transparent experience end-to-end.',
    image: '/assets/images/Hotel-Booking-Web.png',
    links: { visit: '#', github: '' }
  },
  'Rains': {
    category: 'Web development',
    description: 'A clean, brand-forward website highlighting products and stories with immersive visuals and concise messaging. Built for speed, accessibility, and maintainability with readable layouts, intuitive navigation, strong SEO, and modular components.',
    image: '/assets/images/rains.png',
    links: { visit: '#', github: '' }
  },
  'RideZoid': {
    category: 'Web development',
    description: 'A mobility platform website communicating features, pricing, and value clearly. Visitors explore services, sign up, and learn benefits. Balanced visuals, responsive behavior, performance, and SEO deliver a reliable experience that scales gracefully.',
    image: '/assets/images/RideZoid.png',
    links: { visit: '#', github: '' }
  }
};

const projectModalContainer = document.querySelector('[data-project-modal-container]');
const projectOverlay = document.querySelector('[data-project-overlay]');
const projectModalClose = document.querySelector('[data-project-modal-close]');
const projectImage = document.querySelector('[data-project-image]');
const projectTitle = document.querySelector('[data-project-title]');
const projectCategory = document.querySelector('[data-project-category]');
const projectDescription = document.querySelector('[data-project-description]');
const projectActions = document.querySelector('[data-project-actions]');

const openProjectModal = () => {
  projectModalContainer.classList.add('active');
  projectOverlay.classList.add('active');
};

const closeProjectModal = () => {
  projectModalContainer.classList.remove('active');
  projectOverlay.classList.remove('active');
};

if (projectModalClose && projectOverlay) {
  projectModalClose.addEventListener('click', closeProjectModal);
  projectOverlay.addEventListener('click', closeProjectModal);
}

// Delegate clicks on project eye icons
document.addEventListener('click', (e) => {
  const iconBox = e.target.closest('.project-item-icon-box');
  if (!iconBox) return;

  const projectItem = iconBox.closest('.project-item');
  if (!projectItem) return;

  const imgEl = projectItem.querySelector('.project-img img');
  const titleEl = projectItem.querySelector('.project-title');
  const categoryEl = projectItem.querySelector('.project-category');

  const titleText = titleEl ? titleEl.textContent.trim() : 'Project';
  const projectData = projectsData[titleText];

  // Title
  projectTitle.textContent = titleText;

  // Image (prefer configured image)
  if (projectData && projectData.image) {
    projectImage.src = projectData.image;
  } else if (imgEl) {
    projectImage.src = imgEl.src;
  }

  // Category
  if (projectData && projectData.category) {
    projectCategory.textContent = projectData.category;
  } else if (categoryEl) {
    projectCategory.textContent = categoryEl.textContent;
  } else {
    projectCategory.textContent = '';
  }

  // Description
  projectDescription.textContent = projectData && projectData.description
    ? projectData.description
    : `${titleText} details and description.`;

  // Build actions: prefer explicit links from project data; otherwise fallback to category
  projectActions.innerHTML = '';

  const addAction = (label, href, dataAttr) => {
    if (!href) return '';
    const safeHref = href || '#';
    const data = dataAttr ? ` ${dataAttr}` : '';
    return `<a class="modal-btn" target="_blank" rel="noopener" href="${safeHref}"${data}>${label}</a>`;
  };

  if (projectData && projectData.links) {
    const { visit, playstore, appstore, github, video } = projectData.links;
    const buttons = [
      addAction('Visit', visit, 'data-project-visit'),
      addAction('Play Store', playstore, 'data-project-playstore'),
      addAction('App Store', appstore, 'data-project-appstore'),
      addAction('GitHub', github, 'data-project-github'),
      addAction('Video', video, 'data-project-video')
    ].filter(Boolean).join('\n');
    projectActions.innerHTML = buttons;
  } else {
    const category = (projectCategory.textContent || '').toLowerCase();
    if (category.includes('mobile')) {
      projectActions.innerHTML = `
        <a class="modal-btn" target="_blank" rel="noopener" href="#" data-project-playstore>Play Store</a>
        <a class="modal-btn" target="_blank" rel="noopener" href="#" data-project-appstore>App Store</a>
      `;
    } else if (category.includes('web')) {
      projectActions.innerHTML = `
        <a class="modal-btn" target="_blank" rel="noopener" href="#" data-project-visit>Visit</a>
      `;
    } else {
      projectActions.innerHTML = '';
    }
  }

  // Move actions under the image for project modal
  const isProjectModal = document.querySelector('.project-modal');
  if (isProjectModal) {
    let imageActions = isProjectModal.querySelector('.image-actions');
    const imgWrapper = isProjectModal.querySelector('.modal-img-wrapper');
    if (imgWrapper) {
      if (!imageActions) {
        imageActions = document.createElement('div');
        imageActions.className = 'image-actions';
        imgWrapper.appendChild(imageActions);
      }
      imageActions.innerHTML = projectActions.innerHTML;
      projectActions.innerHTML = '';
    }
  }

  openProjectModal();
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Contact form submission handler
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const submitBtn = form.querySelector('.form-btn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = `
    <ion-icon name="hourglass-outline"></ion-icon>
    <span>Sending...</span>
  `;
  submitBtn.disabled = true;
  
  try {
    const formData = new FormData(form);
    const data = {
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Show success message
      submitBtn.innerHTML = `
        <ion-icon name="checkmark-circle"></ion-icon>
        <span>Message Sent!</span>
      `;
      submitBtn.style.backgroundColor = '#28a745';
      
      // Reset form
      form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.disabled = false;
      }, 3000);
      
    } else {
      throw new Error(result.message || 'Failed to send message');
    }
    
  } catch (error) {
    console.error('Error:', error);
    
    // Show error message
    submitBtn.innerHTML = `
      <ion-icon name="close-circle"></ion-icon>
      <span>Error! Try Again</span>
    `;
    submitBtn.style.backgroundColor = '#dc3545';
    
    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.disabled = false;
    }, 3000);
  }
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}