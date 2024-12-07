<template>
  <div class="container">
   
    <nav class="navbar">
      <h1 class="logo">
        <img src="./image/Logo.jpg" alt="Logo" class="logo-img">
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

    
    <div :class="['sidebar', { active: isSidebarActive }]">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    
    <div id="home" class="header">
      <p>Welcome to My Portfolio</p>
    </div>

   
    <div class="content">
      <div class="column">
        <div class="profile-card">
          <img src="./image/profile.jpg" alt="Profile Picture" class="profile-pic">
          <h3>Kc Matthew P. Miralles</h3>
          <p>Web Developer / IT Student
          <br>Email: kcmatthew.miralles099@gmail.com<br>
          Location: Philippines</p>
          <router-link to="/about" class="start-button">
            <button>Start</button>
          </router-link>
        </div>
      </div>     
    </div>                   
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
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

.navbar {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background-color: #333333;
  border-bottom: 2px solid #F0F0F0; 
  position: relative;
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
  color: #FFFFFF;
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
  color: #FFFFFF;
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

  .profile-card {
        margin-left: -7px;
        width: 410px;
    }
}

.header {
  text-align: left;
  padding: 10px;
  background-color: #3A77B1;
}

.header p {
  margin: 0;
  font-size: 23px;
  color: #FFFFFF;
}

.content {
  display: flex;
  justify-content: center; 
  padding: 90px;
  background-color: #333333;
}

.column {
  width: 450px;
  background-color: #F0F0F0;
  padding: 20px;
  margin: 10px auto 20px auto;
  text-align: center;
  border-radius: 6px;
}

.profile-card {
  background-color: #2A2A2A;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #F0F0F0;
}

.profile-pic {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 9px;
}

.profile-card h3 {
    margin: 0;
    font-size: 22px;
    color: #FF4500;
}

.profile-card p {
    font-size: 17px;
    color: #F0F0F0;
    line-height: 1.8;
    text-align: center;
}

button {
    background-color: #FF4500;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
}

button:hover {
    background-color: #3A77B1;
}

</style>
