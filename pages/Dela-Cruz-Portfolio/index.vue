<!-- Start of My Code -->
<template>
<div class="portfolio-container">
  <!-- Sidebar Settings -->
  <nav class="sidebar" :class="{ 'shadow-lg': hasScrolled }">
    <div class="nav-item">
      <div class="nav-icon" @click="scrollToSection('home')" title="Home">
        <img src="./img/Home.png" alt="Home Icon" />
      </div>
    </div>
    <div class="nav-item">
      <div class="nav-icon"  @click="scrollToSection('about')" title="About Me">
        <img src="./img/About.png" alt="About Icon" />
      </div>
    </div>
    <div class="nav-item">
      <div class="nav-icon" @click="scrollToSection('education')" title="Education">
        <img src="./img/Education.png" alt="Education Icon" />
      </div>
    </div>
    <div class="nav-item">
      <div class="nav-icon" @click="scrollToSection('hobbies')" title="Hobbies">
        <img src="./img/Hobby.png" alt="Hobbies Icon" />
      </div>
    </div>
    <div class="nav-item">
      <div class="nav-icon" @click="scrollToSection('specs')" title="Computer Specs">
        <img src="./img/Specs.png" alt="Specs Icon" />
      </div>
    </div>
    <div class="nav-item">
      <div class="nav-icon" @click="scrollToSection('contact')" title="Socials & Contact">
        <img src="./img/Social.png" alt="Contact Icon" />
      </div>
    </div>
    <div class="nav-QR">
      <img src="./img/QR.jpg" alt="QR Code" class="qr-code" />
    </div>
  </nav>

    <!-- Start of Main Content -->
    <div class="main-content">
      <div class="logo-container">
        <img src="./img/Logo.png" alt="Logo" class="logo-image">
      </div>
      <!-- Header Settings -->
      <header id="home" class="section">
        <div class="home-section">
          <h1>Welcome to My Portfolio!</h1>
          <p>This project was developed as part of my final requirement for Web Systems and Technologies. <br> Every detail of this site was carefully crafted by me, using Vue and VS Code, to highlight simplicity and interactivity. 
          <br>Beyond its design, this website serves as a personal statement of my journey in web development. <br> Through dedicated effort and countless hours, I gained deeper insights into Vue, CSS, and JavaScript, broadening my technical expertise. 
          <br>My goal is to share my creativity and design style, hoping to engage you enough to explore every corner of the site. </p>
        </div>
      </header>

      <!-- About Me Settings -->
      <section id="about" class="section">
        <h2>ABOUT ME</h2>
        <div class="about-content">
          <div class="about-image-container">
            <img src="./img/AboutIMG.jpeg" alt="Profile" class="profile-image" />
          </div>
          <div class="about-description">
            <p>I’m John Luke Dela Cruz, also known as JL or Luke. I’m a 4th-year IT student with a passion for technology, inspired by my family’s computer literacy. I’ve enjoyed studying Hardware and Programming and have worked on various system applications and web systems, both individually and in teams.
              Alongside my IT skills, I’ve gained experience in data entry through freelancing, which has taught me valuable work-life lessons. I’m also passionate about video games, where I’ve learned the importance of teamwork and perseverance by participating in team based games.
              I aim for a career in hardware or software development, driven by the desire to make my family proud. My long-term goal is to start a business or investment. I enjoy solving problems and am excited to continue learning and growing in the IT field.</p>
          </div>
        </div>
      </section>

      <!-- Education Settings -->
      <section id="education" class="section">
        <h2>EDUCATION</h2>
        <div class="education-timeline">
          <div class="timeline-item">
            <div class="education-item">
              <h3>Elementary to Junior High School</h3>
              <div class="education-content">
                <img src="./img/SMI.png" alt="Elementary to Junior High School" class="school-image" />
                <span>
                  <br>
                  My time at St. Mark's Institute, from 1st grade to Junior High School, was memorable despite some repetitiveness. 
                  Grades 1 to 3 were exciting as I made friends and explored new experiences. 
                  While Grades 4 to 6 were more routine, my last year of elementary stood out due to the moving-up preparations. 
                  Junior High School brought new knowledge, experiences, and fun moments, especially after joining a club.
                  St. Mark's Institute shaped my childhood and holds a special place in my memories.</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="education-item">
              <div class="education-content-2">
                <h3>Senior High School to College</h3>
                <div class="image-description-pair">
                  <img src="./img/STI.jpg" alt="Senior High School to College" class="school-image" />
                  <span>
                    <br>
                    My Senior High School experience at STI College Las Piñas was unforgettable. My first year was filled with activities, clubs, and programs, making it the peak of my school life. 
                    However, COVID struck before the year ended, shifting classes online. While the second year was less exciting, it allowed me to graduate high school. 
                    I continued college at STI, studying Information Technology, which was challenging but manageable due to my computer literacy. 
                    After a year of online classes, face-to-face sessions resumed, but I had to transfer schools as I no longer lived in Las Piñas.</span>
                </div>
                <hr />
                <div class="image-description-pair">
                  <img src="./img/SPIST.jpg" alt="Senior High School to College" class="school-image" />
                  <span>
                    <br>
                    I discovered Southern Philippines Institute of Science and Technology near my home and chose it for its focus on science and technology, as well as its IT program. 
                    After 2.5 years, 5 semesters, and numerous subjects, I reached my final semester. The experience was both engaging and relaxed, with the school being supportive and considerate of my concerns. 
                    Enrolling here allowed me to meet amazing people and create lasting memories during my college journey.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hobbies Settings -->
      <section id="hobbies" class="section">
      <h2>HOBBIES</h2>
      <div class="hobbies-grid">
        <div class="hobby-card" data-hover-text="Playing video games has always been my hobby for as long as I can remember, it's fun and entertaining and it will always be my main hobby.">
          <img src="./img/Games.png" alt="VIDEO GAMES" class="hobby-image" />
          <p>VIDEO GAMES</p>
        </div>
        <div class="hobby-card" data-hover-text="I've tried various sports before, such as Basketball, Volleyball, Table Tennis, Badminton, Dancing, Soccer. It's quite exhilarating
            when you do those acitivies. I hope someday to do go back and do this hobby">
          <img src="./img/Sports.jpg" alt="SPORTS" class="hobby-image" />
          <p>SPORTS</p>
        </div>
        <div class="hobby-card" data-hover-text="My Music hobby involves trying various instruments. Besides just listening to music, I tried to learn playing the Guitar, Violin, Drums, and Piano. I mainly want to learn the piano when I have the time.">
          <img src="./img/Music.jpg" alt="MUSIC" class="hobby-image" />
          <p>MUSIC</p>
        </div>
        <div class="hobby-card" data-hover-text="I started my PC building hobby when I tried to build a computer using spare parts that was lying around. The first time it worked I felt happy and proud of myself, since then I've learned more and more about PC building.">
          <img src="./img/Hardware.png" alt="PC BUILDING" class="hobby-image" />
          <p>PC BUILDING</p>
        </div>
      </div>
    </section>
      <!-- Desktop Specs Settings -->
      <section id="specs" class="section">
        <h2>DESKTOP Specification</h2>
        <div class="specs-description">
          <span>This section shows each component of my system unit or personal computer. My PC has gone through various changes over the years. 
            <br> I built my first computer around 2015 using scraps but later on I slowly upgraded it until it reached to what it is now.</span>
        </div>
        <div class="specs-table">
          <div class="specs-header">Hardware</div>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="spec in [
                { component: 'CPU', spec: 'AMD Ryzen™ 7 5700X' },
                { component: 'RAM', spec: '32GB DDR4-3200mhz' },
                { component: 'MOBO', spec: 'ASROCK B550M PRO SE' },
                { component: 'GPU', spec: 'NVIDIA GeForce RTX 3070' },
                { component: 'SSD', spec: '1TB Samsung 970 EVO Plus NVMe' },
                { component: 'HDD', spec: '2TB Seagate Barracuda' },
                { component: 'PSU', spec: 'Corsair SHIFT White 1000W' }
              ]" :key="spec.component" class="spec-row" @mouseenter="highlightSpec" @mouseleave="unhighlightSpec">
                <td>{{ spec.component }}</td>
                <td>{{ spec.spec }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        <!-- Socials Settings -->
        <section id="contact" class="section">
          <h2>SOCIALS & CONTACT</h2>
          <div class="contact-description">
            <h3>Feel free to connect with me!</h3>
          </div>
          <div class="social-links">
            <a href="https://www.facebook.com/JL.DelaCruz.03/" class="social-item" target="_blank">
              <img src="./img/FB.png" alt="Facebook" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Facebook</span> <br>
                <small class="social-description">facebook.com/JL.DelaCruz.03</small>
              </div>
            </a>
            <a href="https://www.github.com/Luke-DelaCruz" class="social-item" target="_blank">
              <img 
                src="./img/Git.png" alt="Github" class="social-icon"/>
              <div class="social-text">
                <span class="social-name">Github</span> <br>
                <small class="social-description">github.com/Luke-DelaCruz</small>
              </div>
            </a>
            <a href="https://www.x.com/JLDC_03" class="social-item" target="_blank">
              <img 
                src="./img/X.png" alt="Twitter" class="social-icon" />
              <div class="social-text">
                <span class="social-name">X</span> <br>
                <small class="social-description">x.com/JLDC_03</small>
              </div>
            </a>
            <a href="https://www.instagram.com/jl.03_uwu" class="social-item" target="_blank">
              <img src="./img/IG.png" alt="Instagram" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Instagram</span> <br>
                <small class="social-description">instagram.com/jl.03_uwu</small>
              </div>
            </a>
            <a href="discordapp.com/users/uwuzuu" class="social-item" target="_blank">
              <img src="./img/Discord.png" alt="Discord" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Discord</span> <br>
                <small class="social-description">discordapp.com/users/uwuzuu</small>
              </div>
            </a>
            <a href="mailto:JLVDC03@gmail.com?subject=Your Subject Here&body=Hello, this is a pre-filled draft email!" target="_blank" class="social-item">
              <img src="./img/Gmail.png" alt="Gmail" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Gmail</span> <br>
                <small class="social-description">JLVDC03@gmail.com</small>
              </div>
            </a>
            <a href="https://m.me/JL.DelaCruz.03" class="social-item" target="_blank">
              <img src="./img/FBM.png" alt="Messenger" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Messenger</span> <br>
                <small class="social-description">m.me/JL.DelaCruz.03</small>
              </div>
            </a>
            <a href="javascript:void(0);" class="social-item">
              <img src="./img/Cell.png" alt="Contact" class="social-icon" />
              <div class="social-text">
                <span class="social-name">Contact #</span> <br>
                <small class="social-description" id="phone-number">0997-406-0373</small>
              </div>
            </a>
          </div>
        </section>
       <div class="gif">
        <img src="./img/Cat.gif">
       </div>
      <!-- Footer -->
      <footer class="footer">
        <p>&copy; Web Systems and Technologies | 2024 Dela Cruz. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      activeSection.value = section.id
    }
  })
}
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
const highlightSpec = (event) => {
  event.currentTarget.style.backgroundColor = '#e0e0e0'
  event.currentTarget.style.transition = 'background-color 0.3s ease'
}
const unhighlightSpec = (event) => {
  event.currentTarget.style.backgroundColor = ''
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.portfolio-container {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(180deg, #d7f3ff 0%, #2196f3 100%);
  color: #333;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav-item {
  margin: 10px 0; /* Space between icons */
  text-align: center;
  cursor: pointer;
}

.nav-QR {
  align-items: center;
  text-align: center;
  padding-top: 350px;
}

.nav-QR img {
  width: 80px; /* Adjust image width */
  height: 80px; /* Adjust image height */
}

.nav-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-icon img {
  width: 50px; /* Adjust image width */
  height: 50px; /* Adjust image height */
  object-fit: contain; /* Keeps the image aspect ratio */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add hover effect */
}

.nav-icon:hover {
  background: rgba(33, 150, 243, 0.1);
  transform: scale(1.1);
}

.nav-icon svg {
  width: 36px;
  height: 36px;
}

.main-content {
  margin-left: 80px;
  width: calc(100% - 80px);
  padding: 2rem;
  padding-right: 100px;
  padding-left: 100px;
}

.section {
  min-height: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

/* Start of About Me CSS */

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.about-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
}

.profile-image {
  width: 350px;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.about-tile {
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 1rem;
}

.about-description {
  flex: 1;
  padding-left: 2rem;
  font-size: 24px;
}
/* End of About Me CSS */

/* Start of Education CSS */
.education-timeline {
  width: 100%;
  max-width: 1000px;
}

.education-timeline h3 {
  text-align: center;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 2rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #2196f3;
}

.education-item {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.education-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.education-content-2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-content-2 span {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}

.school-image {
  flex-shrink: 0;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  margin: 0;
}

.education-item span {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}


.school-image {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  margin: 1rem 0;
}

.image-description-pair {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

hr {
  border: none;
  border-top: 3px solid #ddd;
  margin: 1rem 0;
}
/* End of Education CSS */

/* Start of Hobby CSS */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
  gap: 4rem;
  width: 100%;
  max-width: 1500px;
}

.hobby-card {
  position: relative;
  background: #f5f5f5;
  width: 350px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hobby-card:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.8);
}

.hobby-card:hover .hobby-image {
  opacity: 0.5;
}

.hobby-card p {
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
}

.hobby-card:hover p {
  color: #fff;
}

.hobby-card::after {
  content: attr(data-hover-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hobby-card:hover::after {
  opacity: 1; 
}

.hobby-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease;
}


.hobby-card:hover .hobby-image {
  opacity: 0.5;
}

.hobby-card p {
  margin: 10px 0;
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;
}
/* End of Hobby CSS */

/* Start of Specs CSS */
.specs-table {
  width: 100%;
  max-width: 800px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.specs-header {
  background: #2196f3;
  color: white;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}

.specs-description {
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;
  font-size: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background: #f0f0f0;
  font-weight: bold;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-item:hover {
  background: #e0e0e0;
  transform: translateX(5px);
}

.social-icon {
  width: 40px;
  height: 40px;
}

.social-name {
  font-weight: bold;
  font-size: 16px;
}

.qr-code {
  max-width: 200px;
  margin-top: 2rem;
}

.logo-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo-image {
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}

.home-section {
  text-align: center;
  font-size: 24px;
}

.gif {
  align-items: center;
  text-align: center;
}

.gif img {
  border-radius: 5px;
}


.footer {
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  margin-top: 2rem;
}

/* Responsive Settings */
@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }
  
  .main-content {
    margin-left: 60px;
    width: calc(100% - 60px);
    padding: 1rem;
  }
  
  .section {
    padding: 2rem;
  }
  
  .about-content {
    flex-direction: column;
    align-items: center;
  }
  
  .about-description {
    padding-left: 0;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>