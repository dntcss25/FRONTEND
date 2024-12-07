<template>
  <a-layout class="portfolio">
    <!-- Navigation Bar Structure -->
    <a-layout-header :class="{'navbar': true, 'navbar-visible': headerVisible, 'navbar-hidden': !headerVisible}">
      <div class="navbar-content">
        <div class="navbar-item">
          <a href="#home" class="navbar-link">Home</a>
          <a-icon type="home" class="header-icon" />
        </div>
        <div class="navbar-item">
          <a href="#about" class="navbar-link">About</a>
          <a-icon type="info-circle" class="header-icon" />
        </div>
        <div class="navbar-item">
          <a href="#hobbies" class="navbar-link">Hobbies</a>
          <a-icon type="appstore" class="header-icon" />
        </div>
        <div class="navbar-item">
          <a href="#contact" class="navbar-link">Contact</a>
          <a-icon type="phone" class="header-icon" />
        </div>
      </div>
    </a-layout-header>

    <!-- Welcome Section -->
    <div id="home" class="welcome-section">
      <div class="title-container">
        <h1 class="colorful-text">Welcome to My Portfolio</h1>
        <p class="colorful-text">Jean Louie Gandeza / 4th-year IT student</p>
      </div>
      <img class="welcome-image" src="./Components/Home.jpg" alt="Jean Louie Gandeza">
    </div>

    <!-- Introduction Section -->
    <div id="about" class="introduction-section">
      <h2 class="colorful-text">Who is Jean Louie?</h2>
      <div class="intro-content">
        <p class="colorful-text">
          A 4th-year IT student passionate about technology, who loves singing and stays active by playing basketball to keep balanced and motivated.
        </p>
        <img class="intro-image" src="./Components/sing.jpg" alt="Jean Louie Singing">
      </div>
    </div>

    <!-- Hobbies Section -->
    <div id="hobbies" class="hobbies-section">
      <h2 class="colorful-text">My Hobbies</h2>
      <div class="hobbies-grid">
        <div class="hobby-card">
          <img src="./Components/gaming.jpg" alt="Gaming">
          <div class="hobby-description">
            <p class="colorful-text">Gaming: It relieves stress.</p>
          </div>
          <p class="colorful-text">Gaming</p>
        </div>
        <div class="hobby-card">
          <img src="./Components/basketball.jpg" alt="Basketball">
          <div class="hobby-description">
            <p class="colorful-text">Playing Basketball: It keeps me fit and is always fun to play.</p>
          </div>
          <p class="colorful-text">Playing basketball</p>
        </div>
        <div class="hobby-card">
          <img src="./Components/singing.jpg" alt="Singing">
          <div class="hobby-description">
            <p class="colorful-text">Singing: Through singing, I can release the emotions I want to release.</p>
          </div>
          <p class="colorful-text">Singing</p>
        </div>
        <div class="hobby-card">
          <img src="./Components/watching-series.jpg" alt="Watching Series">
          <div class="hobby-description">
            <p class="colorful-text">Watching Series: It's another way to relieve stress.</p>
          </div>
          <p class="colorful-text">Watching series</p>
        </div>
      </div>
    </div>

    <!-- Contacts Section -->
    <div id="contact" class="contacts-section">
      <h2 class="colorful-text">Reach Out to Me</h2>
      <!-- Social Media Section -->
      <div class="social-media-section">
        <h3 class="colorful-text">My Social Media Accounts</h3>
        <div class="social-media-icons">
          <a href="https://facebook.com" target="_blank"><img src="./Components/facebook-icon.png" alt="Facebook"></a>
          <a href="https://instagram.com" target="_blank"><img src="./Components/instagram-icon.jpg" alt="Instagram"></a>
        </div>
      </div>
      <!-- Email Section -->
      <div class="email-section">
        <h3 class="colorful-text">Email</h3>
        <p class="colorful-text">Gandezajeanlouie@gmail.com</p>
      </div>
      <!-- Phone Section -->
      <div class="phone-section">
        <h3 class="colorful-text">Phone</h3>
        <p class="colorful-text">09695900794</p>
      </div>
    </div>

    <!-- Footer Section -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <a-icon type="copyright" class="footer-icon" />
        <span class="colorful-text">All Rights Reserved</span>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      lastScrollY: 0,
      headerVisible: true,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        this.headerVisible = false;
      } else {
        this.headerVisible = true;
      }
      this.lastScrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: 'Arial, sans-serif';
  margin: 0;
  background-color: #000;
  color: #eee;  /* Set a light color for all text */
  line-height: 1.6;
  scroll-behavior: smooth;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar Styles */
.navbar {
  background-color: #333;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar-visible {
  transform: translateY(0);
  opacity: 1;
}

.navbar-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.navbar-content {
  display: flex;
  gap: 40px;
}

.navbar-item {
  font-size: 1.2em;
}

.navbar-link {
  color: #ffd700;  /* Bright yellow color for links */
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #1e90ff;  /* Bright blue on hover */
}

/* Welcome Section */
.welcome-section {
  text-align: center;
  padding: 100px 20px;
  background-color: #111;
  color: #f0f0f0;  /* Light color for text */
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Other Sections */
.welcome-image, .intro-image, .hobby-card img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-top: 20px;
  border: 5px solid #ffd700;
}

.introduction-section, .hobbies-section, .contacts-section {
  padding: 80px 20px;
  text-align: center;
  background-color: #222;
  color: #f5f5f5;  /* Light color for text */
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.introduction-section {
  background-color: #222;
}

.hobbies-section {
  background-color: #333;
}

.contacts-section {
  background-color: #444;
}

/* Hobbies Section Styling */
.hobbies-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.hobby-card {
  position: relative;
  display: inline-block;
  margin: 20px;
  text-align: center;
}

.hobby-card img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.hobby-card:hover img {
  transform: scale(1.1);
}

.hobby-description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;  /* Light text color */
  padding: 10px;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  width: 80%;
  text-align: center;
}

.hobby-card:hover .hobby-description {
  opacity: 1;
  visibility: visible;
}

.hobby-card p {
  font-size: 1.2em;
  color: #ffd700;  /* Bright yellow color for hobby title */
  margin-top: 10px;
}

.hobby-card:hover p {
  color: #1e90ff;  /* Bright blue on hover */
}

/* Footer Styles */
.footer {
  background-color: #333;
  padding: 10px 0;
  text-align: center;
  color: #fff;  /* Light color for footer text */
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-icon {
  font-size: 24px;
  margin-right: 8px;
}

.footer-content span {
  font-size: 14px;
}

/* Social Media Icons Styles */
.social-media-icons img {
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

/* Colorful Text Styling */
.colorful-text {
  color: #ff6347; /* Tomato red for most text */
}

.colorful-text:hover {
  color: #32cd32; /* Lime green on hover */
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    align-items: center;
  }

  .navbar-item {
    margin: 10px 0;
  }

  .footer-content {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
