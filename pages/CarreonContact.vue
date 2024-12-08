<script>
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const sidenav = document.querySelector('.sidenav');
    
    // Toggle menu functionality
    if (menuToggle && nav && sidenav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            sidenav.style.left = nav.classList.contains('active') ? '0' : '-150px';
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth page transition when links are clicked
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            if (link.target === "_blank") return;
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => window.location.href = link.href, 250);
        });
    });

    // Contact form submission with success message
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    if (form && successMessage) {
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
    }
});

// Card selection functionality
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});
</script>


<template>
    <div>
        <CarreonHeader/>

        <div class="main-content">
            <section class="contact">
                <div class="home-content">
                    <h1>Get in Touch</h1>
                    <p class="small-text">I'm always open to new opportunities and collaborations.<span class="crimson">
                        Feel free to reach out!</span></p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/JC4peace" target="_blank"><i
                                class="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/JCFlare" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://x.com/JhonCarlos18941" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/lars_flare/" target="_blank"><i
                                class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <div class="contact-form">
                    <h2>Contact Me</h2>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                    <div id="successMessage" class="success-message">
                        Thank you for your message! I'll get back to you soon.
                    </div>
                </div>
            </section>
        </div>

        <CarreonFooter/>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

:root {
    --primary-color: crimson;
    --background-color: #000;
    --text-color: #fff;
    --header-height: 100px;
    --sidenav-width: 150px;
}

.crimson {
    color: var(--primary-color);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
/* Set up the fade-in and fade-out animation */
.fade-out {
    animation: fadeOut 0.5s forwards;
}

.fade-in {
    animation: fadeIn 0.5s forwards;
}

/* Fade-out animation */
@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

/* Fade-in animation */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Ensuring the page is centered and fills the viewport */
body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* You can add styles to hide elements or adjust content during the fade transition */
.main-content {
    opacity: 1;
    transition: opacity 0.25s;
    padding: calc(var(--header-height) + 20px) 5% 20px;
    margin-left: 20rem;
}

.fade-out .main-content {
    opacity: 0;
}


body {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
}

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    min-height: calc(100vh - var(--header-height));
}

.home-content h1 {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.3;
    color: white;
}

.home-content h3 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: white;
}

.home-content p {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 3rem;
}

.home-img img {
    width: 32vw;
    max-width: 400px;
    border-radius: 50%;
    box-shadow: 0 0 25px var(--primary-color);
    transition: 0.2s linear;
}

.home-img img:hover {
    transform: scale(1.05);
}

.social-icons {
    display: flex;
    gap: 1.5rem;
}

.social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: 0.2rem solid var(--primary-color);
    font-size: 2rem;
    border-radius: 50%;
    color: var(--primary-color);
    transition: 0.3s ease;
    text-decoration: none;
}

.social-icons a:hover {
    color: var(--background-color);
    background-color: var(--primary-color);
    box-shadow: 0 0 25px var(--primary-color);
    transform: translateY(-5px);
}

/* Ensure smooth fade transition */
form, #successMessage {
    opacity: 1;
    transition: opacity 0.5s ease;
}

form {
    display: block;
}

#successMessage {
    display: none;
}

/* Fade out form and fade in success message */
form.hidden {
    opacity: 0;
    display: none;
}

#successMessage.visible {
    display: block;
    opacity: 1;
}

.main-content {
    
    margin-left: 0;
}

.home-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.contact-form {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 15px #dc143cd5;
    border-radius: 15px;
    padding: 20px;
    background-color: rgb(5, 5, 5);
    transition: all 300ms ease;
}

.contact-form:hover {
    box-shadow: none;
}


.contact-form h2 {
    font-size: 2.5rem;
    color: darkgoldenrod;
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-size: 1.8rem;
    margin-bottom: 5px;
    color: var(--text-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--primary-color);
    color: var(--text-color);
    border-radius: 4px;
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

.submit-btn {
    width: 100%;
    padding: 15px;
    font-size: 1.8rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #a00d26;
    transform: translateY(-3px);
}

.success-message {
    display: none;
    background-color: rgba(0, 255, 0, 0.1);
    border: 1px solid #00ff00;
    color: #00ff00;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
}
@media (max-width: 1200px) {
    html {
        font-size: 55%;
    }

    .content-body .card {
        width: 100%;
    }
    .content-body .card p {
        margin-top: 4rem;
    }
    .home {
        flex-direction: column;
        gap: 4rem;
    }

    .home-img img {
        width: 70vw;
    }
    
    .main-content {
        margin-left: 0;
    }
}
 
@media (max-width: 768px) {
    .home-content {
        display: block;
        text-align: left;
        height: auto;
    }
}

@media (max-width: 450px) {
    html {
        font-size: 50%;
    }

    .home-content h1 {
        font-size: 5rem;
    }

    .home-content h3 {
        font-size: 3rem;
    }
}
</style>
