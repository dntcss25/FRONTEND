<template>
    <header>
        <div class="container">
            <a href="Home" class="logo"> <img src="@/Images/SPIST.png"> BSIT 4</a>
            <nav>
                <router-link to="/Home" class="active">Home</router-link>
                <router-link to="/Portfolio">Portfolio</router-link>
                <router-link to="/About">About</router-link>
                <router-link to="/Contact">Contact</router-link>
            </nav>
        </div>

        <script>
        import { createRouter, createWebHistory } from 'vue-router';
        import Home from '../pages/Home.vue';
        import Portfolio from '../pages/Portfolio.vue';
        import About from '../pages/About.vue';
        import Contact from '../pages/Contact.vue';

            const routes = [
            { path: '/Home', component: Home },
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

        <style>
            /* imported na font style yeah*/
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

            /* Header */
            header {
                background-color: #fff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            header .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 0;
            }

            .logo {
                font-size: 1.5rem;
                font-weight: bold;
                color: green;
                transition: all 300ms ease;
            }

            .logo:hover {
                scale: 1.1;
                text-decoration: none;
                color: darkgreen;
            }

            .logo img{
               max-width: 3rem;
            }

            nav a {
                margin-left: 2rem;
                text-decoration: none;
                color: #333;
            }
            nav a:hover {
                color: #4CAF50;
            }

            nav a.active {
                color: #4CAF50;
                border-bottom: 2px solid #4CAF50;
            }
        </style>

    </header>

</template>