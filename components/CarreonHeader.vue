<template>
    <!-- Header Section -->
    <header>
        <router-link to="/CarreonIndex" class="logo">JC</router-link>

        <!-- Menu Toggle (will show on small screens) -->
        <button class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- Navigation Links -->
        <nav ref="nav">
            <router-link to="/CarreonIndex" :class="{ active: isHome }">Home</router-link>
            <router-link to="/CarreonSkills" :class="{ active: isSkills }">Skills</router-link>
            <router-link to="/CarreonEducation" :class="{ active: isEducation }">Education</router-link>
            <router-link to="/CarreonPortfolio" :class="{ active: isPortfolio }">Portfolio</router-link>
            <router-link to="/CarreonContact" :class="{ active: isContact }">Contact</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        isHome() {
            return this.$route.path === '/CarreonIndex';
        },
        isSkills() {
            return this.$route.path === '/CarreonSkills';
        },
        isEducation() {
            return this.$route.path === '/CarreonEducation';
        },
        isPortfolio() {
            return this.$route.path === '/CarreonPortfolio';
        },
        isContact() {
            return this.$route.path === '/CarreonContact';
        }
    },
    mounted() {
        this.addEventListeners();
    },
    methods: {
        toggleMenu() {
            const nav = this.$refs.nav;
            nav.classList.toggle('active');  // Toggle active class on nav for mobile menu
        },
        addEventListeners() {
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

            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', () => {
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                });
            });
        }
    }
};
</script>

<style>
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

</style>
