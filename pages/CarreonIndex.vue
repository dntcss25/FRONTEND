<template>
    <div>
      <!-- Loading Screen -->
      <div v-if="isLoading" id="loading-screen" class="loading-screen">
        <div class="spinner"></div>
      </div>
  
      <CarreonHeader></CarreonHeader>
      <!-- Main Content -->
      <main class="main-content">
        <section class="home">
          <div class="home-img">
            <img src="@/assets/ME.jpg" alt="JC's profile picture" />
          </div>
          <div class="home-content">
            <h1>Hi, It's <span class="crimson">JC</span></h1>
            <h3 class="small-text">I'm a <span class="crimson">College Student</span></h3>
            <p>
              Currently a 4th-year Bachelor of Science in Information Technology student, actively honing my skills and developing my expertise to become a proficient full-stack developer.
            </p>
            <div class="social-icons">
              <a href="https://www.facebook.com/JC4peace" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://github.com/JCFlare" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="https://x.com/JhonCarlos18941" target="_blank" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/lars_flare/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </section>
      </main>

      <CarreonFooter></CarreonFooter>
  
    </div>
  </template>
  
  <script>
import CarreonFooter from '../components/CarreonFooter.vue';
import CarreonHeader from '../components/CarreonHeader.vue';


export default {
    data() {
  return {
    isMenuOpen: false, // Ensure this is set to toggle the menu
    isHome: false, 
    isSkills: false,
    isEducation: false,
    isPortfolio: false,
    isContact: false,
  };
},
methods: {
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = this.$refs.nav;
    const sidenav = this.$refs.sidenav;
    
    if (nav && sidenav) {
      nav.classList.toggle('active');
      sidenav.style.left = nav.classList.contains('active') ? '0' : '-150px';
      menuToggle.classList.toggle('active');
    }
  },


    addEventListeners() {
      // Fade-out animation on link click
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', event => {
          if (link.target === "_blank") return;
          event.preventDefault();
          document.body.classList.add('fade-out');
          setTimeout(() => window.location.href = link.href, 250);
        });
      });

      // Contact form submit logic
      const form = document.getElementById('contactForm');
      const successMessage = document.getElementById('successMessage');
      if (form) {
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

      // Add selected class to cards on click
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
        });
      });
    },
  },
};
</script>

  
  <style>
  /* Include your styles here */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
  /* Your custom CSS goes here */
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

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    padding: 1rem 5%;
    background-color: rgba(161, 161, 161, 0.47);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.content-header h1 {
    margin-top: var(--header-height);
}

.logo {
    font-size: 4rem;
    color: var(--primary-color);
    font-weight: 800;
    text-decoration: none;
    transition: 0.5s ease;
}

.logo:hover {
    transform: scale(1.2);
}

nav {
    display: flex;
}

nav a {
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent;
    text-decoration: none;
}

nav a:hover,
nav a.active {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 5px 0;
    transition: 0.3s;
}

.sidenav {
    height: 100%;
    width: var(--sidenav-width);
    position: fixed;
    top: var(--header-height);
    background-color: #333;
    padding-top: 20px;
    transition: 0.3s ease;
    z-index: 900;
    /* display: inline-block; */
    display: none;
}

.sidenav a {
    padding: 15px 25px;
    text-decoration: none;
    font-size: 18px;
    color: var(--text-color);
    display: block;
    transition: 0.3s;
}

.sidenav a.active {
    color: var(--text-color);
    background-color: var(--primary-color);
}

.sidenav a:hover {
    background-color: rgba(139, 139, 139, 0.37);
    color: var(--primary-color);
    border-left: solid var(--primary-color);
}

.main-content {
    padding: calc(var(--header-height) + 20px) 5% 20px;
    margin-left: 20rem;
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

footer {
    background-color: #5c5c5c;
    padding: 20px 0;
    margin-top: auto;
}

.footer-nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

.footer-nav ul a {
    color: var(--text-color);
    margin: 0 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.7;
    transition: 0.5s;
}

.footer-nav ul a:hover {
    opacity: 1;
}

.footer-bottom {
    background-color: #302f2f;
    padding: 20px;
    text-align: center;
}

.footer-bottom p {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
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


@media (max-width: 1200px) {
    html {
        font-size: 55%;
    }

    .sidenav {
        left: 0;
        display: none;
    }
    body {
        padding: 0;
        margin: 0;
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



/* @media (max-width: 991px) { */
 
@media (max-width: 768px) {
    header {
        padding: 1rem 4%;
    }

    nav {
        position: fixed;
        top: var(--header-height);
        right: -100%;
        width: 80%;
        height: calc(100vh - var(--header-height));
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: center;
        padding: 40px 0;
        transition: 0.3s ease;
    }

    nav.active {
        right: 0;
    }

    nav a {
        margin: 1.5rem 0;
        font-size: 2rem;
    }

    .menu-toggle {
        display: block;
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
  