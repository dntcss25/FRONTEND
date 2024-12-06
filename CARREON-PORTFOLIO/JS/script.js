document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const sidenav = document.querySelector('.sidenav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        sidenav.style.left = nav.classList.contains('active') ? '0' : '-150px';
        menuToggle.classList.toggle('active');
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            if (link.target === "_blank") return;
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => window.location.href = link.href, 250);
        });
    });

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        successMessage.classList.add('visible');
        setTimeout(() => {
            successMessage.classList.remove('visible');
            form.classList.remove('hidden');
            form.reset();
        }, 4000);
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});
