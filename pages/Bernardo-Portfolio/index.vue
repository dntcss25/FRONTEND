<template>
  <div class="layout">
    <!-- Navigation -->
    <Header />

    <!-- Hero -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Hi I'am <span class="highlight">Christian</span></h1>
        <h2>4<span class="highlight">th</span> Y<span class="highlight">e</span>ar <span class="highlight">IT Student</span></h2>
        <div class="social-icons">
          <a href="https://www.instagram.com/c_bern.199x/"><img src="./Images/instagram-icon.jpg" alt="Instagram" /></a>
          <a href="https://www.facebook.com/christian.bernardo.9421?mibextid=ZbWKwLp"><img src="./Images/facebook-icon.jpg" alt="Facebook" /></a>
          <a href="mailto:c18-4329-01@spist.edu.ph?subject=Inquiry&body=Hello, I would like to know more about..."><img src="./Images/mail-icon.jpg" alt="Email" /></a>
          <a href="#"><img src="./Images/telephone-icon.jpg" alt="Phone" /></a>
        </div>
      </div>
      <div class="hero-image">
        <img src="./Images/hero-image.jpg" alt="Profile Photo" />
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
      <div class="about-image">
        <img src="./Images/about-image.jpg" alt="About" />
      </div>
      <div class="about-content">
        <h1>About Me</h1>
        <p>Hi, I'm Christian Bernardo, a 4th-year IT student who loves creating and improving systems. I enjoy working on projects that challenge me to learn new things, especially in system development and databases. When I'm not coding, you'll probably find me playing online games. I'm all about turning ideas into reality and having fun while doing it!</p>
        <div class="tabs">
          <button 
            :class="{ active: activeTab === 'education' }" 
            @click="activeTab = 'education'"
          >
            Education
          </button>
          <button 
            :class="{ active: activeTab === 'skills' }" 
            @click="activeTab = 'skills'"
          >
            Skills
          </button>
          <button 
            :class="{ active: activeTab === 'hobby' }" 
            @click="activeTab = 'hobby'"
          >
            Hobby
          </button>
        </div>
        <div v-if="activeTab === 'education'" class="tab-content">
          <li>Elemtary: Southville 1 National Elementary School, Cabuyao Laguna</li>
          <li>junior: Imus National High School, Imus Cavite</li>
          <li>Senior: Southern Philippines Institurte of Science and Technology, Imus Cavite</li>
          <li>College: Southern Philippines Institurte of Science and Technology, Imus Cavite</li>
        </div>
        <div v-else-if="activeTab === 'skills'" class="tab-content">
          <ul>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Microsoft Office (MS Word, MS PowerPoint, MS Excel, MS Access)</li>
            <li>PHP (Hypertext Preprocessor)</li>
            <li>MySQL (Database Management System)</li>
            <li>C++ (Programming Language)</li>
            <li>Figma (UI/UX Design Tool)</li>
            <li>Adobe Photoshop (Image Editing Software)</li>
            <li>Adobe Lightroom (Photo Editing Software)</li>
          </ul>
        </div>
        <div v-else-if="activeTab === 'hobby'" class="tab-content">
          <ul>
            <li>Playing Online Games</li>
            <li>Editing Photos</li>
            <li>Learning New Programming Languages</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Hobby -->
    <section id="hobby" class="hobby">
    <h2>My Hobby</h2>
    <div class="hobby-grid">
      <div class="hobby-item">
        <div class="hobby-image-container">
          <img src="./Images/hobby-playing-image.jpg" alt="Playing" />
          <div class="hobby-overlay">
            <RouterLink to="../Bernardo-Portfolio/hobby-playing" class="view-button">View</RouterLink>
          </div>
        </div>
        <p>Playing</p>
      </div>
      <div class="hobby-item">
        <div class="hobby-image-container">
          <img src="./Images/hobby-editing-image.jpg" alt="Editing" />
          <div class="hobby-overlay">
            <RouterLink to="../Bernardo-Portfolio/hobby-editing" class="view-button">View</RouterLink>
          </div>
        </div>
        <p>Editing</p>
      </div>
      <div class="hobby-item">
        <div class="hobby-image-container">
          <img src="./Images/hobby-coding-image.jpg" alt="Coding" />
          <div class="hobby-overlay">
            <RouterLink to="../Bernardo-Portfolio/hobby-coding" class="view-button">View</RouterLink>
          </div>
        </div>
        <p>Coding</p>
      </div>
    </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact">
      <h2>Contact</h2>
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-item">
            <a href="https://www.instagram.com/c_bern.199x/"><img src="./Images/instagram-icon.jpg" alt="Instagram" />
            <span>Instagram: Christian Bernardo</span></a>
          </div>
          <div class="contact-item">
            <a href="https://www.facebook.com/christian.bernardo.9421?mibextid=ZbWKwLp"><img src="./Images/facebook-icon.jpg" alt="Facebook" />
            <span>Facebook: Christian Bernardo</span></a>
          </div>
          <div class="contact-item">
            <a href="mailto:c18-4329-01@spist.edu.ph?subject=Inquiry&body=Hello, I would like to know more about..."><img src="./Images/mail-icon.jpg" alt="Email" />
            <span>Gmail:C18-4329-01@spist.edu.ph</span></a>
          </div>
          <div class="contact-item">
            <a href="#"><img src="./Images/telephone-icon.jpg" alt="Phone" />
            <span>(+63) 900-000-000</span></a>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <input type="text" v-model="form.name" placeholder="Your Name" required />
          <input type="email" v-model="form.email" placeholder="Your Email" required />
          <textarea v-model="form.message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './component/Header.vue'
import Footer from './component/Footer.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const menuItems = ['Home', 'About', 'Hobby', 'Contact']

const showEducation = ref(true)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
const activeTab = ref('education')
const sections = ref([])
const isScrollingUp = ref(true)
const lastScrollTop = ref(0)

onMounted(() => {
  sections.value = Array.from(document.querySelectorAll('section'))
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop
  isScrollingUp.value = st < lastScrollTop.value
  lastScrollTop.value = st <= 0 ? 0 : st

  sections.value.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('in-view')
    } else {
      section.classList.remove('in-view')
    }
  })

  const nav = document.querySelector('nav')
  if (isScrollingUp.value) {
    nav.classList.add('scrolling-up')
    nav.classList.remove('scrolling-down')
  } else {
    nav.classList.add('scrolling-down')
    nav.classList.remove('scrolling-up')
  }
}

</script>

<style scoped>
.layout {
  background: linear-gradient(to bottom, black, #414040);
  color: white;
  min-height: 100vh;
  font-family: monospace;
}

.highlight{
  color: #00ffff;
}
section {
  padding: 4rem;
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.hero-content h1 {
  color: white;
  font-size: 3.5rem;
  margin: 1rem 0;
}

.hero-content h2 {
  color: white;
  font-size: 3rem;
}

.social-icons {
  display: flex;
  gap: 4rem;
  margin-top: 1rem;
  justify-content: center;
}

.social-icons img {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-icons a:hover img {
  opacity: 0.8;
}

.hero-image img {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 4px solid #00ffff;
  object-fit: cover;
}

/* About Section */
.about {
  display: flex;
  gap: 4rem;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.about-content {
  flex: 1;
}

.about-content h1{
  color: white;
  font-size: 2.5rem;
}

.tabs {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.tabs button {
  background: none;
  border: none;
  color: #808080;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0;
}

.tabs button.active {
  color: #00ffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.tab-content {
  color: #d1d1d1;
}

.tab-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

/* Hobby Section */
.hobby {
  text-align: center;
}

.hobby h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.hobby-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.hobby-item {
  position: relative;
}

.hobby-image-container {
  position: relative;
  overflow: hidden;
}

.hobby-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hobby-item:hover .hobby-overlay {
  opacity: 1;
}

.view-button {
  padding: 0.5rem 1rem;
  background-color: #00ffff;
  color: black;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: monospace;
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.view-button:hover {
  background-color: #00cccc;
}

/* Contact Section */
.contact h2{
  color: white;
  font-size: 2.5rem;
}
.contact-container {
  display: flex;
  gap: 2rem; 
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  flex: 1;
  font-size: 1.9rem;
  padding-right: 2rem;
}
.contact-info a{
  color: #00ffff;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item img {
  width: 24px;
  height: 24px;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-family: monospace;
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
  margin-bottom: 0;
}

.contact-form button {
  width: 100%;
  padding: 0.75rem;
  background: #00ffff;
  color: black;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 0;
}

/* transition effect */
section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

section.in-view {
  opacity: 1;
  transform: translateY(0);
}

nav.scrolling-up {
  transform: translateY(0);
}

nav.scrolling-down {
  transform: translateY(-100%);
}

.hero-image img,
.about-image img,
.hobby-item img {
  transition: transform 0.3s ease;
}

.hero-image img:hover,
.about-image img:hover,
.hobby-item img:hover {
  transform: scale(1.05);
}

.contact-form input,
.contact-form textarea,
.contact-form button {
  transition: box-shadow 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus,
.contact-form button:hover {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero, .about {
    flex-direction: column;
    text-align: center;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .hero-content h2 {
    font-size: 2rem;
  }
  .hero-image {
    order: -1; 
  }
  .about li{
    text-align: left;
  }

  .social-icons {
    justify-content: center;
  }

  .hobby-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-container {
    flex-direction: column;
  }
  .contact-info {
  font-size: 1.5rem;
  }
  .contact-form {
  width: 100%;
  }
}

@media (max-width: 640px) {
  section {
    padding: 2rem;
  }

  .hobby-grid {
    grid-template-columns: 1fr;
  }

  nav {
    padding: 1rem 2rem;
  }

  .menu a {
    margin-left: 1rem;
  }

  .hero-image img {
    width: 300px;
    height: 300px;
  }
}

</style>