<template>
    <nav>
      <div class="logo">BERN</div>
      <div class="menu">
        <a
          v-for="item in menuItems"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          :class="{ active: activeSection === item.toLowerCase() }"
          @click="activeSection = item.toLowerCase()"
        >
          {{ item }}
        </a>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeSection = ref('home')
  const menuItems = ['Home', 'About', 'Hobby', 'Contact']
  </script>
  
  <style scoped>
  nav {
    background: #004d40;
    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .menu a {
    color: white;
    text-decoration: none;
    margin-left: 2rem;
    transition: color 0.3s;
  }
  
  .menu a:hover,
  .menu a.active {
    color: #00ffff;
  }
  
  </style>
  