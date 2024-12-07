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
      <div id="experience" class="header2">
        <p>Project & Experience</p>
      </div>
      <div class="content3">
        <div class="card">
          <div class="section">
            <div class="section-left">
              <h1 class="section-title">Project Overview</h1>
              <img src="./image/project.jpg" alt="Project" class="project-img" />
            </div>
            <div class="section-right">
              <p>
                The School Budget Tracking Management System (SBTMS) is a webpage I created to help schools manage their
                financial resources more effectively. This user-friendly platform allows schools to track expenses, 
                manage budgets, and ensure financial transparency. With SBTMS, schools can streamline their budgeting processes,
                make informed financial decisions, and maintain accurate records, ultimately enhancing financial management and 
                resource allocation.
              </p>
            </div>
          </div>
          <div class="section">
            <div class="section-left">
              <h1 class="section-title">OJT Experience</h1>
              <img src="./image/ojt.jpg" alt="OJT" class="ojt-img" />
            </div>
            <div class="section-right">
              <p>OJT at Fynn Boutique Hotel (2024):</p>
              <ul>
                <li>Managed and set up CCTV systems</li>
                <li>Configured and troubleshooted computers and printers</li>
                <li>Provided IT support for events</li>
                <li>Assisted with cybersecurity measures</li>
                <li>Contributed to inventory management and incident response</li>
              </ul>
            </div>
          </div>
          <p>
            Department: IT Department and Housekeeping (Temporary Assignment)<br>
            During my On-the-Job Training (OJT) at Fynn Boutique Hotel, I gained extensive experience
            in both IT support and operational management within the hospitality industry.
            My primary role was within the IT department, where I handled various tasks including network
            troubleshooting, device configuration, and overall tech support for hotel systems. This was 
            complemented by my temporary assignment in the Housekeeping (HK) department, which allowed me 
            to explore a wider range of responsibilities, such as managing room inventory and supporting 
            the hotel's daily operations.
          </p>
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

    .card .section{
        margin-left: -40px;
        width: 380px;
        flex-direction: column;
        text-align: center;
    }

    .section .section-title{
        margin-top: -10px;
        margin-left: 60px;
    }

    .section .project-img{
        margin-top: 30px;
        margin-left: 60px;
        
    }

    .section .section-right p{
        margin-top: 15px;
        margin-left: 30px 0;
        margin-right: -20px;
        line-height: 1.2;
        padding: 0px; 
    }

    .section .ojt-img{
        margin-top: 15px;
        margin-left: 60px;
        margin-right: 30px;
    }

    .section .section-right ul{
        text-align: left;
        font-size: 10px;
    }

    p{
        margin-top: 15px;
        margin-left: -30px;
        margin-right: -30px;
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

.content3 {
    display: flex;
    justify-content: center;
    padding: 130px;
    background-color: #333333;
    margin-top: -50px;
    margin-bottom: -50px;
}

.card {
    background-color: #F0F0F0;
    padding: 45px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    border: 1px solid #ddd;
    margin-top: -90px;
}

.section {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.section-left {
    flex: 1;
    text-align: center;
}

p {
    font-size: 19px;
    color: #555555;
    text-align: justify;
    margin-bottom: 19px;
    margin-top: 10px;
    padding-left: 15px;
    line-height: 1.3;  
    padding-right: 20px;
}

.section-right {
    flex: 2;
    padding-left: 10px;
}

.section .section-title {
    font-size: 26px;
    font-weight: bold;
    color: #3A77B1;
    margin-top: -10px;
    margin-bottom: 10px;
    border-bottom: 2px solid #3A77B1;
    padding-bottom: 5px; 
}

.project-img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: 40px;
}

.ojt-img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: 7px;
}

.section-right p {
    font-size: 19px;
    color: #555555;
    line-height: 1.6;
    margin-bottom: 12px;
    margin-top: 63px;
    text-align: justify;
    margin-left: 10px;
}

.section-right ul {
    list-style-type: disc;
    margin-left: 17px;
}

.section-right ul li {
    font-size: 18px;
    color: #555555;
    margin-bottom: 9px;
}

.card:hover {
    background-color: #eaf4f9; 
    border: 1px solid #3A77B1; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    transition: all 0.3s ease-in-out; 
}

  </style>
  