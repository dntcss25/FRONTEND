<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CarreonFooter from '../components/CarreonFooter.vue';
import CarreonHeader from '../components/CarreonHeader.vue';

const menuToggle = ref<HTMLElement | null>(null);
const nav = ref<HTMLElement | null>(null);
const sidenav = ref<HTMLElement | null>(null);

// Handles the toggle functionality for the menu
const toggleMenu = () => {
    if (nav.value && sidenav.value && menuToggle.value) {
        nav.value.classList.toggle('active');
        sidenav.value.style.left = nav.value.classList.contains('active') ? '0' : '-150px';
        menuToggle.value.classList.toggle('active');
    }
};

onMounted(() => {
    if (menuToggle.value && nav.value && sidenav.value) {
        menuToggle.value.addEventListener('click', toggleMenu);
    }

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            if (link.target === "_blank") return;
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => window.location.href = link.href, 250);
        });
    });
});
</script>

<template>
    <div>
        <CarreonHeader />

        <main class="main-content">
            <section class="home">
                <div class="home-img">
                    <img :src="require('@/assets/crimson_knight.png')" alt="Crimson Knight" />
                </div>
                <div class="home-content">
                    <h1>Hi, It's <span class="crimson">JC</span></h1>
                    <h3 class="small-text">Here are <span class="crimson">My Projects</span></h3>
                    <p>
                        Welcome to my portfolio, where I showcase a collection of my creative work and professional projects.
                        My journey as a developer has been driven by a passion for innovation, problem-solving, and pushing the boundaries of what’s possible.
                        Each project here reflects my commitment to quality, attention to detail, and ability to bring ideas to life with a blend of technical expertise and creativity.
                    </p>

                    <div class="social-container">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/JC4peace" target="_blank" aria-label="Facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://github.com/JCFlare" target="_blank" aria-label="GitHub">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://x.com/JhonCarlos18941" target="_blank" aria-label="Twitter">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/lars_flare/" target="_blank" aria-label="Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                        <a href="mailto:jcgocarreon03@gmail.com" class="hire-me-button">Hire Me</a>
                    </div>
                </div>
            </section>

            <section class="album-selection">
                <h2>Select an Album</h2>
                <div class="cards">
                    <div class="card" tabindex="0">
                        <h3>Album 1</h3>
                    </div>
                    <div class="card" tabindex="0">
                        <h3>Album 2</h3>
                    </div>
                    <div class="card" tabindex="0">
                        <h3>Album 3</h3>
                    </div>
                    <div class="card" tabindex="0">
                        <h3>Album 4</h3>
                    </div>
                </div>
            </section>
        </main>

        <CarreonFooter />
    </div>
</template>

<style >
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

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

/* Fade-in and fade-out animations */
.fade-out {
    animation: fadeOut 0.5s forwards;
}

.fade-in {
    animation: fadeIn 0.5s forwards;
}

@keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* General Layout */
body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
}

/* Main Content */

.main-content {
    opacity: 1;
    transition: opacity 0.25s;
    padding: calc(var(--header-height) + 20px) 5% 20px;
}

.fade-out .main-content {
    opacity: 0;
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

.social-container {
    display: flex;
    align-items: center;
    gap: 2rem; /* Space between social icons and the "Hire Me" button */
}

.hire-me-button {
    padding: 10px 20px;
    margin-left: 8rem;
    background-color: crimson;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.hire-me-button:hover {
    background-color: darkred;
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

/* Album Section */
.album-selection {
    text-align: center;
    margin-bottom: 20px;
}

.album-selection h2 {
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    color: darkgoldenrod;
}

.album-selection .cards {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
}

.album-selection .card {
    width: 48%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #fff;
    border-radius: 1rem;
    box-shadow: var(--box-shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.album-selection .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.album-selection .card:focus,
.album-selection .card.selected {
    outline: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--text-color);
}

/* Media Queries */
@media (max-width: 1200px) {

    html {
        font-size: 55%;
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


    .album-selection {
        margin-top: 0;
    }

    .social-container {
        justify-content: space-between;
    }

    .hire-me-button {
        margin: 0;
        margin-right: 20px;
    }
}

@media (max-width: 768px) {
    .social-container {
        margin-bottom: 50px;
    }

    .album-selection .card {
        width: 100%;
    }
}

/* Small Screens (Mobile) */
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
