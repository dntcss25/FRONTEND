<template>
  <div class="hobby-editing">
    <h1 class="title">Editing Skills</h1>
    <div class="image-pairs">
      <section class="image-pair">
        <div class="images-container">
          <div class="image-container">
            <img src="./Images/hobby-editing-enhance(1).jpg" alt="Enhanced landscape" class="image enhanced" />
            <p class="image-label">Enhanced</p>
          </div>
          <div class="image-container">
            <img src="./Images/hobby-editing-raw(1).jpg" alt="Raw landscape" class="image raw" />
            <p class="image-label">Raw</p>
          </div>
        </div>
        <p class="description">Landscape photo editing: Enhancing colors and contrast to bring out the beauty of nature.</p>
      </section>

      <hr class="divider" />

      <section class="image-pair reverse">
        <p class="description">Portrait retouching: Subtle enhancements to bring out the subject's best features.</p>
        <div class="images-container">
          <div class="image-container">
            <img src="./Images/hobby-editing-enhance(2).jpg" alt="Enhanced portrait" class="image enhanced" />
            <p class="image-label">Enhanced</p>
          </div>
          <div class="image-container">
            <img src="./Images/hobby-editing-raw(2).jpg" alt="Raw portrait" class="image raw" />
            <p class="image-label">Raw</p>
          </div>
        </div>
      </section>

      <hr class="divider" />

      <section class="image-pair">
        <div class="images-container">
          <div class="image-container">
            <img src="./Images/hobby-editing-enhance(3).jpg" alt="Enhanced night photo" class="image enhanced" />
            <p class="image-label">Enhanced</p>
          </div>
          <div class="image-container">
            <img src="./Images/hobby-editing-raw(3).jpg" alt="Raw night photo" class="image raw" />
            <p class="image-label">Raw</p>
          </div>
        </div>
        <p class="description">Night photography: Bringing out details and reducing noise in low-light situations.</p>
      </section>

      <hr class="divider" />

      <section class="image-pair reverse">
        <p class="description">Food photography: Enhancing colors and textures to make dishes look more appetizing.</p>
        <div class="images-container">
          <div class="image-container">
            <img src="./Images/hobby-editing-enhance(4).jpg" alt="Enhanced food photo" class="image enhanced" />
            <p class="image-label">Enhanced</p>
          </div>
          <div class="image-container">
            <img src="./Images/hobby-editing-raw(4).jpg" alt="Raw food photo" class="image raw" />
            <p class="image-label">Raw</p>
          </div>
        </div>
      </section>
    </div>
    <router-link to="../Bernardo-Portfolio" class="back-to-home">Back to Home</router-link>
  </div>
</template>

<style scoped>
.hobby-editing {
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

.image-pairs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-pair {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-pair.reverse {
  flex-direction: column-reverse;
}

.images-container {
  display: flex;
  gap: 1rem;
}

.image-container {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 50%;
  height: 500px; 
}

.image-container:hover {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #00ffff;
  text-align: center;
  padding: 5px;
  font-size: 1rem;
}

.description {
  font-size: 1rem;
  color: #d1d1d1;
  text-align: center;
}

.divider {
  border: none;
  border-top: 1px solid #00ffff;
  margin: 2rem 0;
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
  .image-pair {
    flex-direction: row;
    align-items: center;
  }

  .image-pair.reverse {
    flex-direction: row-reverse;
  }

  .description {
    flex: 1;
    max-width: 30%;
  }

  .images-container {
    flex: 2;
  }
}

@media (max-width: 767px) {
  .images-container {
    flex-direction: column;
  }

  .image-container {
    max-width: 100%;
  }
}
</style>

