<template>
  <div>


    <CarreonHeader />

    <!-- Skills Section -->
    <main>
      <section class="skills">
        <div class="skill-content">
          <div class="content-header">
            <h1>MY <span>Skills</span></h1>
          </div>

          <div class="content-body">
            <div @click.prevent="selectCard('frontend')" class="card card1">
              <h3 class="small-text">Frontend Dev -<br><span>Intermediate</span></h3>
              <span class="star-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <p>Intermediate knowledge in Frontend Development entails a solid understanding of HTML, CSS, and
                JavaScript, but beginner in building responsive layouts.</p>
            </div>

            <div @click.prevent="selectCard('backend')" class="card card2">
              <h3 class="small-text">Backend Dev - <span>Beginner</span></h3>
              <span class="star-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <p>Basic knowledge in Backend Development includes understanding server-side concepts, databases, and
                using languages like PHP or Node.js for simple tasks.</p>
            </div>

            <div @click.prevent="selectCard('database')" class="card card3">
              <h3 class="small-text">Database - <span>Beginner</span></h3>
              <span class="star-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <p>Basic knowledge in databases includes understanding data structures, creating tables, and performing
                simple queries using SQL.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <CarreonFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CarreonFooter from '../components/CarreonFooter.vue';
import CarreonHeader from '../components/CarreonHeader.vue';

export default {
  components: {
    CarreonFooter,
    CarreonHeader
  },
  setup() {
    const isLoading = ref(true);  // Define isLoading to show the loading screen initially
    const selectedCard = ref(null); // Track the selected card

    // Simulate loading process (can be replaced with actual API call or logic)
    setTimeout(() => {
      isLoading.value = false;
    }, 2000); // Set to false after 2 seconds

    // Method to handle card selection (optional)
    const selectCard = (cardName) => {
      selectedCard.value = cardName;
      // You can implement additional logic based on the card selected
      console.log(`Selected card: ${cardName}`);
    };

    // Method to toggle the menu
    const toggleMenu = () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      const sidenav = document.querySelector('.sidenav');

      if (nav && sidenav) {
        nav.classList.toggle('active');
        sidenav.style.left = nav.classList.contains('active') ? '0' : '-150px';
        if (menuToggle) menuToggle.classList.toggle('active');
      }
    };

    onMounted(() => {
      // Add additional DOM manipulations if necessary here
    });

    return {
      isLoading,
      selectedCard,
      toggleMenu,
      selectCard
    };
  }
};
</script>

<style>
/* Include external resources */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

/* CSS variables */
:root {
  --primary-color: crimson;
  --background-color: #000;
  --text-color: #fff;
  --header-height: 100px;
  --sidenav-width: 150px;
}

/* Global Styles */
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

/* Body and overall layout */
body {
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

h1,
h3 {
  margin: 0;
}

/* Fade In / Out Animations */
.fade-out {
  animation: fadeOut 0.5s forwards;
}

.fade-in {
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Main Content */
.content-header h1 {
  margin-top: var(--header-height);
  color: white;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}

.content-header span {
  color: var(--primary-color);
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 5%;
  gap: 4rem;
  background-color: var(--background-color);
}

.content-body {
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
}

.card {
  background-color: #0a0a0a;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: calc(33% - 20px);
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card:hover,
.card.selected {
  border: 2px solid var(--primary-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.card p {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1rem;
}

.star-rating {
  font-size: 1.6rem;
  color: darkgoldenrod;
  margin-bottom: 1rem;
}

.small-text {
  font-size: 3rem;
  font-weight: 600;
  min-width: 280px;
}

.small-text span {
  position: relative;
  color: var(--primary-color);
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }

  .content-body {
    gap: 2rem;
  }

  .card {
    width: 100%;
  }

  .content-header h1 {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }

  .skills {
    gap: 2rem;
  }

  .card {
    width: 100%;
    margin-bottom: 2rem;
  }

  .content-header h1 {
    font-size: 3rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 45%;
  }

  .content-header h1 {
    font-size: 2.5rem;
  }

  .card h3 {
    font-size: 1.8rem;
  }

  .card p {
    font-size: 1.4rem;
  }

  .star-rating {
    font-size: 1.2rem;
  }
}
</style>