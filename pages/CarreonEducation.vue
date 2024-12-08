<template>
    <div>

  
      <!-- Header Section -->
        <CarreonHeader/>
  
      <!-- Education Content Section -->
      <section class="education">
        <div class="education-content">
          <div class="content-header">
            <h1>MY <span>Educational </span>Background</h1>
          </div>
  
          <div class="content-body">
            <!-- Education Card 1 -->
            <CarreonEducationCard
              title="Junior Highschool - Bacoor National Highschool Molino Main"
              subtitle="CXFG+472, Molino Rd, Bacoor, 4102 Cavite"
              description="During my time at Bacoor National High School, I learned the value of perseverance and teamwork..."
               :imgSrc="require('@/assets/school1.jpg')"
              socialLinks="http://facebook.com/BacoorNHS.main.OFFICIAL"
              email="301171@deped.gov.ph"
              phone="#0464176149"
            />
  
            <!-- Education Card 2 -->
            <CarreonEducationCard
              title="Senior Highschool - University of Perpetual Help System DALTA"
              subtitle="3 Molino Rd, Bacoor, Cavite | Accountancy Business Management"
              description="At the University of Perpetual Help System DALTA, my journey in the ABM strand opened my eyes to the world of business and finance..."
              :imgSrc="require('@/assets/school2.jpg')"
              socialLinks="https://www.facebook.com/perpetualmolino/"
              email="marketing.molino@perpetualdalta.edu.ph"
              phone="#0464770602"
            />
  
            <!-- Education Card 3 -->
            <CarreonEducationCard
              title="College (current) - Southern Philippines Institute of Science & Technology"
              subtitle="Tia Maria Building, 2A Emilio Aguinaldo Hwy, Imus, 4104 Cavite"
              description="Studying Bachelor of Science in Information Technology at the Southern Philippines Institute of Science and Technology has ignited my passion..."
              :imgSrc="require('@/assets/school4.jpg')"
              socialLinks="https://www.facebook.com/spistofficial/"
              email="spistmarketing@spist.edu.ph"
              phone="#09499271532"
            />
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
  <CarreonFooter/>
    </div>
  </template>
  
  <script>
  import EducationCard from "@/components/CarreonEducationCard.vue";
import CarreonHeader from "../components/CarreonHeader.vue";
import CarreonFooter from "../components/CarreonFooter.vue";
  
  export default {
    name: "EducationPage",
    components: {
      EducationCard
    },
    methods: {
      toggleMenu() {
        const nav = document.querySelector('nav');
        const sidenav = document.querySelector('.sidenav');
        const menuToggle = document.querySelector('.menu-toggle');
  
        nav.classList.toggle('active');
        sidenav.style.left = nav.classList.contains('active') ? '0' : '-150px';
        menuToggle.classList.toggle('active');
      }
    }
  };
  </script>
  
  <style>
  /* Include your styles here */
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
  
  .content-header h1 {
    margin-top: var(--header-height);
    color: white;
  }
  
  span{
    color: crimson;
  }

  .education{
    padding: calc(var(--header-height) + 20px) 5% 20px;
    display: flex;
    justify-content: center;
    align-items: auto;
    gap: 8rem;
    background-color: black;
    margin-bottom: 30px;
  }
  
  .education-content .content-header {
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5rem;
    gap: 1rem;
    font-size: 4rem;
    color: white;
    text-align: center;
  }
  
  .education-content .content-body {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  
  /* Media Queries for responsive design */
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
    .education{
      flex-direction: column;
      gap: 4rem;
    }
  
    .home-img img {
      width: 70vw;
    }
  
    .education{
      margin-left: 0;
    }
  }
  
  @media (max-width: 768px) {
  
  
    .menu-toggle {
      display: block;
    }
  }
  
  @media (max-width: 450px) {
    html {
      font-size: 50%;
    }
  
    .education-content h1 {
      font-size: 5rem;
    }
  
    .education-content h3 {
      font-size: 3rem;
    }
  }
  </style>
  