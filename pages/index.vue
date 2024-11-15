<template>
  <div>
      <AHeader />

      <main class="container">
          <div class="hero">
              <div class="hero-content">
                  <h1>
                      <span class="smart">SMART</span>
                      <span class="collaboration">Collaboration</span>
                  </h1>
                  <p>Featuring the work of all 4th year BSIT student from SPIST for the 2024-2025 academic year.</p>
                  <a href="#" class="cta-button">Get Started <i class="fas fa-arrow-right"></i></a>
              </div>
              <div class="hero-image">
                  <img src="@/Images/space.png" alt="Robot with yellow helmet" width="500" height="600">
              </div>
          </div>
      </main>

      <div class="social-links">
          <a href="#"><i class="phone"></i></a>
          <a href="#"><i class="envelope"></i></a>
          <a href="#"><i class="instagram"></i></a>
          <a href="#"><i class="facebook"></i></a>
      </div>

      <AFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Social Links */
.social-links {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-links a:hover {
  background-color: #f0f0f0;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
}

.hero-content {
  flex: 1;
}

h1 {
  margin-bottom: 1rem;
}

.smart {
  display: block;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.2em;
}

.collaboration {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
}

.hero p {
  max-width: 500px;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #45a049;
}

.cta-button i {
  margin-left: 0.5rem;
}

.hero-image {
  flex: 1;
  text-align: right;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
      flex-direction: column;
      text-align: center;
  }

  .hero-image {
      margin-top: 2rem;
  }

  .social-links {
      position: static;
      flex-direction: row;
      justify-content: center;
      margin-top: 2rem;
  }

  nav {
      display: none;
  }
}
</style>