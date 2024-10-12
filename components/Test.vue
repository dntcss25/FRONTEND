<template>
    <div class="container">
      <header>
        <div class="logo">&lt;C/Bernardo&gt;</div>
        <nav>
          <ul>
            <li v-for="item in menuItems" :key="item">
              <a :href="`#${item.toLowerCase()}`">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <button id="menuToggle" class="menu-toggle" @click="toggleSidebar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
  
      <div id="sidebar" :class="['sidebar', { active: sidebarActive }]">
        <ul>
          <li v-for="item in menuItems" :key="item">
            <a :href="`#${item.toLowerCase()}`" @click="closeSidebar">{{ item }}</a>
          </li>
        </ul>
      </div>
  
      <main>
        <section id="home" class="hero">
          <div class="hero-content">
            <h2>Hi! I'm,</h2>
            <h1><span class="highlight">Christian Bernardo</span></h1>
          </div>
          <div class="hero-image">
            <img src="/placeholder.svg?height=300&width=300" alt="Bernardo">
          </div>
        </section>
  
        <section id="about" class="about">
          <div class="about-image">
            <img src="/placeholder.svg?height=300&width=300" alt="About Bernardo">
          </div>
          <div class="about-content">
            <h2>About Me</h2>
            <p>Hi, I'm Christian Bernardo, an IT student dedicated to learning and growing every day. I'm committed to giving my best in every project and constantly seeking new opportunities to expand my skills and knowledge. Right now, this website represents the best I can do, but I'm excited to keep improving and pushing my limits</p>
          </div>
        </section>
  
        <section id="education" class="education">
          <h2>My education</h2>
          <div class="education-grid">
            <div class="education-item" v-for="(edu, index) in education" :key="index">
              <h3>{{ edu.level }}</h3>
              <p>{{ edu.school }}</p>
            </div>
          </div>
        </section>
  
        <section id="portfolio" class="portfolio">
          <h2>My Work</h2>
          <div class="portfolio-grid">
            <div class="portfolio-item" v-for="(project, index) in projects" :key="index">
              <img :src="project.image" :alt="project.title">
              <div class="portfolio-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </section>
  
        <section id="contact" class="contact">
          <div class="contact-content">
            <h2>Contact Us</h2>
            <div class="social-icons">
              <a v-for="(contact, index) in contactInfo" :key="index" :href="contact.link">
                <img :src="contact.icon" :alt="contact.type">
                <span>{{ contact.value }}</span>
              </a>
            </div>
          </div>
          <form class="contact-form" @submit.prevent="submitForm">
            <input v-model="form.name" type="text" placeholder="Your Name" required>
            <input v-model="form.email" type="email" placeholder="Your Email" required>
            <textarea v-model="form.message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
  
      <footer>
        <label>&copy; copyright @ {{ currentYear }} by <span class="myname">Christian Bernardo</span> | All rights reserved!</label>
      </footer>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    name: 'App',
    setup() {
      const sidebarActive = ref(false)
      const menuItems = ['Home', 'About', 'Education', 'Portfolio', 'Contact']
  
      const education = [
        { level: 'College (Present)', school: 'Southern Philippines Institute of Science and technology' },
        { level: 'Senior High', school: 'Southern Philippines Institute of Science and technology' },
        { level: 'Junior High', school: 'Imus National High School' }
      ]
  
      const projects = [
        { title: 'Project 1', description: 'Short project description goes here.', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Project 2', description: 'Short project description goes here.', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Project 3', description: 'Short project description goes here.', image: '/placeholder.svg?height=200&width=300' }
      ]
  
      const contactInfo = [
        { type: 'Telephone', value: '0965-000-0000', icon: '/placeholder.svg?height=30&width=30', link: '#' },
        { type: 'Facebook', value: 'Christian Bernardo', icon: '/placeholder.svg?height=30&width=30', link: '#' },
        { type: 'Instagram', value: 'c_bern.199x', icon: '/placeholder.svg?height=30&width=30', link: '#' },
        { type: 'Gmail', value: 'C18-4329-01@gmail.com', icon: '/placeholder.svg?height=30&width=30', link: '#' }
      ]
  
      const form = ref({
        name: '',
        email: '',
        message: ''
      })
  
      const toggleSidebar = () => {
        sidebarActive.value = !sidebarActive.value
      }
  
      const closeSidebar = () => {
        sidebarActive.value = false
      }
  
      const submitForm = () => {
        console.log('Form submitted:', form.value)
        // Here you would typically send the form data to a server
        form.value = { name: '', email: '', message: '' }
      }
  
      const currentYear = computed(() => new Date().getFullYear())
  
      return {
        sidebarActive,
        menuItems,
        education,
        projects,
        contactInfo,
        form,
        toggleSidebar,
        closeSidebar,
        submitForm,
        currentYear
      }
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  header {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  nav ul {
    display: flex;
    list-style-type: none;
  }
  
  nav ul li {
    margin-left: 20px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #14ffeb;
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
    background-color: #fff;
    margin: 5px 0;
    transition: 0.4s;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background-color: #111;
    padding: 20px;
    transition: 0.4s;
    z-index: 1000;
  }
  
  .sidebar.active {
    right: 0;
  }
  
  .sidebar ul {
    list-style-type: none;
  }
  
  .sidebar ul li {
    margin-bottom: 15px;
  }
  
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  .sidebar ul li a:hover {
    color: #14ffeb;
  }
  
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;
  }
  
  .hero-content {
    flex: 1;
  }
  
  .hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .hero h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .highlight {
    color: #14ffeb;
  }
  
  .hero-image {
    flex: 1;
    text-align: right;
  }
  
  .hero-image img {
    max-width: 100%;
    border-radius: 50%;
  }
  
  .about, .education, .portfolio, .contact {
    padding: 50px 0;
  }
  
  .about, .education, .portfolio, .contact p{
    font-size: 20px;
  }

  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .about-content, .about-image {
    flex: 1;
  }
  
  .about-image img {
    max-width: 50%;
    border-radius: 10px;
  }
  
  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .education-grid, .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .about, .education-item, .portfolio-item {
    background-color: rgb(49, 49, 49);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .education-item:hover, .portfolio-item:hover {
    transform: translateY(-5px);
  }
  
  .portfolio-item img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .contact {
    display: flex;
    justify-content: space-between;
  }
  
  .contact-content, .contact-form {
    flex: 1;
  }
  
  .social-icons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-direction: column;
  }
  
  .social-icons img {
    width: 30px;
    height: 30px;
  }
  
  .social-icons a {
    display: flex;
    align-items: center;
    text-decoration: none; 
    color: white; 
    gap: 10px; 
  }
  
  .social-icons span {
    color: white; 
    font-size: 16px; 
  }
  
  .contact-form {
    background-color: rgb(49, 49, 49);
    padding: 20px; 
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 800px; 
    margin: auto; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #111;
    color: #fff;
    border-radius: 5px;
  }
  
  .contact-form button {
    background-color: #142bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .contact-form button:hover {
    background-color: #ecbad2;
  }
  
  footer {
    font-size: 24px;
    text-align: center;
    padding: 30px 0;
    background-color: #000000;
  }
  
  .myname {
    color: #14ffeb;
  }
  
  @media (max-width: 800px) {
    nav {
      display: none;
    }
  
    .menu-toggle {
      display: block;
    }
  
    .hero, .about, .contact {
      flex-direction: column;
    }
  
    .hero-image, .about-image {
      margin-top: 30px;
    }
  
    .education-grid, .portfolio-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>