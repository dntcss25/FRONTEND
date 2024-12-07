<template>
  <div class="hobby-coding">
    <h1 class="title">My Coding Passion</h1>
    <div class="coding-system">
      <div class="system-image-container">
        <img src="./Images/hobby-coding-system(1).jpg" alt="clinic system" class="system-image" />
      </div>
      <div class="system-info">
        <h2 class="system-title">Clinic System (VB.net)</h2>
        <p class="system-description">
          VB.NET is my go-to framework for building robust desktop applications. Its event-driven architecture allows for creating interactive and user-friendly interfaces tailored to a clinic management system. With seamless integration with Microsoft Access, VB.NET simplifies managing patient records and ensuring data is well-organized. I appreciate how its intuitive IDE and strong typing promote maintainable and modular code, enabling the development of efficient and scalable healthcare solutions.
        </p>
      </div>
    </div>
    <router-link to="../Bernardo-Portfolio" class="back-to-home">Back to Home</router-link>
  </div>
</template>

<style scoped>
.hobby-coding {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: monospace;
  background-color: black;
}

.title {
  font-size: 2.5rem;
  color: #00ffff;
  text-align: center;
  margin-bottom: 2rem;
}

.coding-system {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding: 2rem;
}

.system-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.system-image-container:hover {
  transform: scale(1.05);
}

.system-image {
  width: 100%;
  height: auto;
  display: block;
}

.system-info {
  padding: 1rem;
}

.system-title {
  font-size: 2rem;
  color: #00ffff;
  margin-bottom: 1rem;
}

.system-description {
  font-size: 1rem;
  color: #d1d1d1;
  line-height: 1.6;
}

.back-to-home {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00ffff;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  z-index: 1000;
}

.back-to-home:hover {
  background-color: #00cccc;
}

@media (min-width: 768px) {
  .coding-system {
    flex-direction: row;
    align-items: center;
  }

  .system-image-container {
    width: 50%;
  }

  .system-info {
    width: 50%;
  }
}

@media (max-width: 767px) {
  .system-image-container {
    width: 100%;
  }
}
</style>

