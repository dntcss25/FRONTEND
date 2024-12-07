<template>
  <div class="container">
    <nav class="navbar">
      <h1 class="logo">
        <img src="./image/Logo.jpg" alt="Logo" class="logo-img" />
        Website Portfo<span>lio</span>
      </h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="menu-icon" @click="toggleSidebar">&#9776;</div>
    </nav>
    <div class="sidebar" :class="{ active: sidebarActive }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div id="contact" class="header2">
      <p>Contact Information</p>
    </div>
    <div class="content4">
      <div class="contact-form">
        <h2>Send me a message</h2>
        <form @submit.prevent="sendMessage">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Your name..." required />

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Your email..." required />

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Your message..." rows="7" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div class="contact-container">
        <div class="contact-card">
          <h2>Contact Information</h2>
          <p><i class="fa fa-envelope"></i> c21-4911-01@spist.edu.ph</p>
          <p><i class="fa fa-envelope-open"></i> kcmatthew.miralles099@gmail.com</p>
          <p><i class="fa fa-phone-alt"></i> 0997-891-7590</p>
          <p><i class="fa fa-map-marker-alt"></i> Green Park Villas 2, Malagasang 2C, Imus, Cavite, Philippines</p>

          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100076402166743&mibextid=ZbWKwL" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/kzyhine_099?igsh=emV2MXBtcmRhemk1" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/kcmatthew" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61831.41972678299!2d120.9364911!3d14.400410449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d252b84f3c11%3A0x38b0f2e1f833e8df!2sImus%2C%20Cavite!5e0!3m2!1sen!2sph!4v1726812068758!5m2!1sen!2sph"
            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      sidebarActive: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },
    sendMessage() {
      alert('Message sent: ' + this.form.name);
    }
  }
};
</script>

<style scoped>
    body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
}

.container {
    background-color: white;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    margin: 0%;
    overflow: hidden;
}

.logo {
    display: flex;
    align-items: center; 
    color: #F0F0F0;
}

.logo-img {
    height: 50px; 
    margin-right: 10px; 
}

.logo span {
    color: #FF4500; 
}

.project-img {
    max-width: 450px; 
    display: block; 
    margin-top: -50px;
    margin-left: 80px;
}

.navbar {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    background-color: #333333;
    border-bottom: 2px solid #F0F0F0; 
    position: relative;
    z-index: 2000; 
}

.navbar h1.logo {
    font-size: 27px; 
    font-weight: bold;
    padding-left: 2%;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 8px 20px;
    display: flex; 
}

.navbar ul li {
    margin: 0 20px; 
}

.navbar ul li a {
    color: #F5F5DC;
    text-decoration: none;
    font-size: 20px; 
    padding: 20px 0;
    font-weight: bold;
}

.navbar ul li a:hover {
    text-decoration: none;
    color: #FFFFFF;
}

.navbar ul li a:active {
    color: #FF4500;
}

.sidebar {
    position: fixed;
    left: -607px; 
    top: 0;
    width: 607px;
    height: 100%;
    background-color: #333333;
    padding-top: 120px;
    transition: 0.3s;
    z-index: 1000;
}

.sidebar.active {
    left: 0; 
}

.sidebar ul {
    list-style-type: none;
    padding: 60px;
    margin: 0;
}

.sidebar ul li {
    padding: 25px 25px;
}

.sidebar ul li a {
    text-decoration: none;
    color: #F5F5DC;
    font-size: 25px;
    display: block;
    text-align: center;
    transition: color 0.3s ease;
}

.sidebar ul li a:hover {
    text-decoration: none;
    color: #FFFFFF
}

.sidebar ul li a:active {
    color: #FF4500;
}

.menu-icon {
    font-size: 30px;
    cursor: pointer;
    color: #F5F5DC;
    display: none;
    margin-right: 20px;
}

@media (max-width: 768px) {
    .menu-icon {
        display: block; 
    }
    .navbar ul {
        display: none; 
    } 

    .content4{
        flex-direction: column;
        text-align: center;
    }

    .content4 .contact-form{
        margin-left: -39px;
        padding: 40px;
        width: 490px;
    }

    .content4 .contact-form h2{
        text-align: left;
    }

    .content4 .contact-form label {
        margin-right: 300px;
    }

    .contact-container .map-container{
        margin-top: 30px;
    }

  }


  .header2 {
    text-align: left;
    margin-bottom: 50px;
    padding: 10px; 
    background-color: #3A77B1; 
}

.header2 p {
    margin: 0;
    font-size: 23px;
    color: #FFFFFF; 
}

.content4{
    display: flex;
    justify-content: center;
    padding: 100px;
    background-color: #333333;
    margin-top: -50px;   
    margin-bottom: -70px;
}

.contact-form {
    background-color: #f9f9f9; 
    padding: 50px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 120%;
    max-width: 595px;
    margin-top: -50px;
    margin-bottom: 80px;
}

.contact-form h2 {
    margin-top: -7px;
    margin-bottom: 20px;
    color: #444; 
}

.contact-form label {
    font-size: 14px;
    color: #555; 
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #bbb; 
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

.contact-form button {
    background-color: #007bff; 
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
}

.contact-form button:hover {
    background-color: #0056b3; 
}

.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-card{
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 390px;
    margin-left: 20px;
    margin-top: -50px;
}

.contact-card h2{
    margin-top: 5px;
    text-align: center;
}

.contact-card p {
    font-size: 15px;
    margin: 12px 0;
    display: flex;
    align-items: center;
}

.contact-card p i {
    margin-right: 20px;
    color: #333333;
}

.social-icons {
    margin-top: 10px;
    text-align: center;
}

.social-icons a {
    margin-right: 15px;
    color: #333;
    font-size: 24px;
    text-decoration: none;
}

.social-icons a:hover {
    color: #007bff;
}

.map-container {
    width: 100%;
    max-width: 300px;
    margin-top: 10px;
    margin-left: -70px;
}

.map-container iframe {
    border: 0;
    border-radius: 10px;
    width: 130%;
    height: 278px;
}

</style>
