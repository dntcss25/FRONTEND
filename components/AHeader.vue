<template>
    <header class="navbar">

        <a href="#" class="logo"> Logo ni Manoy</a>
        <nav class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/Portfolio">Portfolio</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/Contact">Contact</router-link>
        </nav>


        <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6933951749875!2d120.93714867507097!3d14.387143082267105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d2609bedc269%3A0xd49218819a523761!2sSouthern%20Philippines%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sph!4v1729302094468!5m2!1sen!2sph"
            width="=500" height="450"
            style="border:2px solid green; margin-left: 700px; margin-top: 50px; border-radius: 20px;"
            allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Hello world!</p> -->

        <style>
            /* imported na font style yeah*/
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

            /* Header Styles */
            header {
                font-family: 'Poppins', sans-serif;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100px;
                padding: 1rem 9%;
                background-color: forestgreen;
                filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.2));
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 100;
            }

            /* Logo Styles */
            .logo {
                font-size: 2rem;
                color: white;
                font-weight: 800;
                cursor: pointer;
                transition: transform 0.5s ease;
            }

            .logo:hover {
                transform: scale(1.1);
                color: gold;
            }

            /* Navigation Styles */
            nav {
                display: flex;
            }

            nav a {
                font-size: 1.2rem;
                color: white;
                margin-left: 2.4rem;
                font-weight: 500;
                transition: color 0.3s ease, border-bottom 0.3s ease;
                border-bottom: 3px solid transparent;
            }

            nav a:hover,
            nav a.active {
                color: gold;
                border-bottom: 3px solid gold;
            }
        </style>


        <script>
        import { createRouter, createWebHistory } from 'vue-router';
        import Home from '../pages/Home.vue';
        import Portfolio from '../pages/Portfolio.vue';
        import About from '../pages/About.vue';
        import Contact from '../pages/Contact.vue';

            const routes = [
            { path: '/', component: Home },
            { path: '/Portfolio', component: Portfolio },
            { path: '/About', component: About },
            { path: '/Contact', component: Contact },
            ];

            const router = createRouter({
            history: createWebHistory(),
            routes,
            });

            export default router;

    </script>

    </header>

</template>