<template>
    <!-- Footer Section -->
    <footer>
      <div class="footer-nav">
        <ul>
          <li><a href="#">© JC Carreon @2024</a></li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>Opportunities Don't Happen, <span class="crimson">You Create Them.</span></p>
      </div>
    </footer>
  </template>
  
  <script>
  // No script needed unless you want dynamic content or interaction
  export default {
    name: "FooterSection",
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #5c5c5c;
    padding: 20px 0;
    margin-top: auto;
  }
  
  .footer-nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  
  .footer-nav ul a {
    color: var(--text-color);
    margin: 0 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.7;
    transition: 0.5s;
  }
  
  .footer-nav ul a:hover {
    opacity: 1;
  }
  
  .footer-bottom {
    background-color: #302f2f;
    padding: 20px;
    text-align: center;
  }
  
  .footer-bottom p {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
  }
  </style>
  