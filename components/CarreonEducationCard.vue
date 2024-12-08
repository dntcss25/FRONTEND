<template>
    <div class="card">
      <div class="imgcard1">
        <img :src="imgSrc" alt="School Image" />
      </div>
      <div class="text-content">
        <h3 class="medium-text">{{ title }} - <span>{{ subtitle }}</span></h3>
        <p>{{ description }}</p>
        <div class="social-icons">
          <a :href="socialLinks" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a :href="'mailto:' + email"><i class="fa-brands fa-google"></i></a>
          <a href="#"><i class="fa fa-phone"></i></a>
          <div class="number-content">
            {{ phone }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarreonEducationCard",
    props: {
      title: String,
      subtitle: String,
      description: String,
      imgSrc: String,
      socialLinks: String,
      email: String,
      phone: String
    }
  };
  </script>
  
  <style scoped>
  /* Same card styling as before */
  .card {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: rgb(3, 3, 3);
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: calc(100% - 40px);
    transition: border 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: white;
  }
  social-icons {
    display: flex;
    gap: 1.5rem;
}

.social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: 0.2rem solid var(--primary-color);
    font-size: 2rem;
    border-radius: 50%;
    color: var(--primary-color);
    transition: 0.3s ease;
    text-decoration: none;
}

.social-icons a:hover {
    color: var(--background-color);
    background-color: var(--primary-color);
    box-shadow: 0 0 25px var(--primary-color);
    transform: translateY(-5px);
}
  
  h3 {
    color: white;
  }
  
  .card:hover {
    border: 2px solid crimson;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  span {
    color: crimson;
  }

  .imgcard1 {
    background-color: rgb(3, 3, 3);
    border: 1px solid transparent;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    overflow: hidden;
}

.imgcard1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.text-content {
    flex: 1;
    font-size: 1.5rem;
}

.text-content h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.text-content p {
    font-size: 1.5rem;
    margin: 5px 0;
}

.card:hover {
    border: 2px solid crimson;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.card:hover {
    border: 2px solid crimson; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card.selected {
    border: 2px solid crimson; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.number-content {
    font-size: 1.8rem; /* Adjust the size of the phone number */
    font-weight: 600;
    color: crimson; /* Optional: match the color to the icon */
     /* Space between the phone number and the icon */
    display: inline-flex; /* Ensure it's inline with the last social icon */
    align-items: center;
}

small-text {
    font-size: 16px;
    font-weight: 500;
    min-width: 280px;
    color: darkgoldenrod;
}


.medium-text {
    font-size: 34px;
    font-weight: 600;
    min-width: 280px;
}

.medium-text span {
    position: relative;
    color: crimson;
}

@media (max-width: 768px) {


.card {
    flex-direction: column; /* Stack the content vertically */
    align-items: flex-start; /* Align items to the left */
    gap: 10px; 
    padding: 15px; 
}

.card img {
    width: 100%; /* Make image take up full width of the card */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 10px; /* Space below the image */
}

/* Optional: Adjust text size for smaller screens */
.card h3 {
    font-size: 1.2rem; /* Slightly smaller title */
}

.card p {
    font-size: 1rem; /* Adjust description size */
}

.imgcard1 img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
}

.text-content {
flex: 1;
font-size: 1rem;
}

.text-content h3 {
font-size: 2rem;
font-weight: bold;
margin-bottom: 10px;
}

.text-content p {
font-size: 1.5rem;
margin: 5px 0;
}

}
  </style>
  