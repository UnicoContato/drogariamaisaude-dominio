document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header-hidden');
        header.classList.remove('shadow-sm');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
        header.classList.add('shadow-sm');
    }
    
    lastScroll = currentScroll;
});

const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('modal-open');
const closeBtns = document.querySelectorAll('.modal-close');

const openModal = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = 'auto';
};

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});