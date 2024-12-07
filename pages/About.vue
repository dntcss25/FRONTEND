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
      <div id="about" class="header2">
        <p>Information Technology Student</p>
      </div>
      <div class="content2">
        <div class="left-column">
          <div class="profile-card2">
            <div class="profile-info">
              <img src="./image/picture.png" alt="Profile Picture" class="profile-pic" />
              <p class="representative">4-Year Representative</p>
            </div>
            <div class="profile-content">
              <div class="section-title">About Me</div>
              <div class="section-content">
                <p>
                  Hi, I'm Kc Matthew P. Miralles, a passionate web developer and IT student at Southern Philippines Institute of Science and Technology. I have a strong background in Information Technology with hands-on experience in various projects during my OJT at Fynn Boutique Hotel. My dedication to technology and helping others has been a driving force throughout my educational journey.
                </p>
              </div>
              <div class="section-title">Skills & Interests</div>
              <div class="section-content">
                <p>Web Development, IT Support, Cybersecurity, Networking<br>
                  Mentoring younger siblings and inspiring them to excel in their studies
                  <br>Exploring the latest trends in technology and continuous learning.</p>
              </div>
              <div class="section-title">Education</div>
              <div class="section-content">
                <p>
                  <strong>Tertiary:</strong> Southern Philippines Institute of Science and Technology, BSIT (August 2021 – Present)<br />
                  <strong>Secondary:</strong> Imus National High School (2014 – 2018)<br />
                  <strong>Primary:</strong> Nicanor C. Garcia Elementary School (2008 – 2014)
                </p>
              </div>
              <div class="section-title">Featured Video</div>
              <div class="section-content">
                  <video controls class="video-player">
                   <source src="./videos/portfolio video.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarActive: false
      };
    },
    methods: {
      toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
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

    .profile-card2 {
        margin-left: -30px;
        width: 500px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .profile-info .profile-pic{
        margin-left: 25px;
    }

    .profile-info .representative{
        text-align: center;
        line-height: 1.2;
    }

    .profile-content .section-title{
        margin-top: 4px;
    }

    .profile-content .section-content{
        margin-top: -20px;
        padding: 16px;
        margin-bottom: -30px;
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

.content2 {
    display: flex;
    align-items: flex-start;
    padding: 80px;
    margin-top: -50px;
    gap: 20px; 
    background-color: #333333;  
}

.profile-card2 {
    background-color: #F0F0F0;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 20px; 
    max-width: 1600px; 
    border: 1px solid #ddd; 
    margin-top: -20px; 
}

.profile-info {
    flex: 0 0 35%;
    text-align: center;
    padding-right: 10px; 
}

.profile-info .profile-pic {
    width: 330px; 
    height: 330px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #3A77B1; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    margin-right: 10px;
}

.profile-info .representative {
    font-size: 38px;
    color: #333333; 
    font-weight: bold;
    margin-top: 10px;
    margin-left: 20px;
}

.profile-content {
    flex: 1; 
    text-align: left;
}

.profile-content .section-title {
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #3A77B1; 
    border-bottom: 2px solid #3A77B1;
    padding-bottom: 5px; 
}

.section-content p{
    font-size: 16px;
    color: #555555; 
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
}

.profile-card2:hover {
    background-color: #eaf4f9; 
    border: 1px solid #3A77B1; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    transition: all 0.3s ease-in-out; 
}

.video-player {
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  display: block;
  border: 2px solid #ddd;
  border-radius: 8px;
}

  </style>
  