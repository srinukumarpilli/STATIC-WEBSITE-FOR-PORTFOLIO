document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Hamburger Navigation Logic
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // 2. Separate Page Navigation Emulation Logic
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // Clicking any option captures content and reveals the full-page layout
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-desc');

            // Set content dynamically inside separate layer
            modalTitle.textContent = title;
            modalDesc.textContent = description;

            // Trigger structural visibility switch
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock parent window scroll
        });
    });

    // Close the full-page layer view safely
    closeModalBtn.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore standard native scrolling
    });
});