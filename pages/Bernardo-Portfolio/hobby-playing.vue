<template>
  <div class="hobby-playing">
    <h1 class="title">My Top 5 Games</h1>
    <div class="games-list">
      <section class="game-item">
        <div class="game-image-container">
          <img src="./Images/hobby-playing-game(1).jpg" alt="Dota 2" class="game-image" />
        </div>
        <div class="game-info">
          <h2 class="game-title">Dota 2</h2>
          <p class="game-description">A team-based multiplayer online battle arena game with deep strategy, diverse hero customization, and breathtaking visuals.</p>
        </div>
      </section>

      <hr class="divider" />

      <section class="game-item reverse">
        <div class="game-info">
          <h2 class="game-title">Mobile Legends: Bang Bang</h2>
          <p class="game-description">A fast-paced mobile multiplayer online battle arena game with strategic gameplay, unique heroes, and stunning graphics</p>
        </div>
        <div class="game-image-container">
          <img src="./Images/hobby-playing-game(2).jpg" alt="Mobile Legends: Bang Bang" class="game-image" />
        </div>
      </section>

      <hr class="divider" />

      <section class="game-item">
        <div class="game-image-container">
          <img src="./Images/hobby-playing-game(3).jpg" alt="Sword of Convallaria" class="game-image" />
        </div>
        <div class="game-info">
          <h2 class="game-title">Sword of Convallaria</h2>
          <p class="game-description">A fantasy role-playing game with immersive storytelling, strategic turn-based combat, and a rich world filled with magical landscapes and intriguing characters.</p>
        </div>
      </section>

      <hr class="divider" />

      <section class="game-item reverse">
        <div class="game-info">
          <h2 class="game-title">Grand Chase</h2>
          <p class="game-description">A dynamic 2D side-scrolling action game with fast-paced combat, diverse characters, and an engaging storyline set in a vibrant fantasy world.</p>
        </div>
        <div class="game-image-container">
          <img src="./Images/hobby-playing-game(4).jpg" alt="Grand Chase" class="game-image" />
        </div>
      </section>

      <hr class="divider" />

      <section class="game-item">
        <div class="game-image-container">
          <img src="./Images/hobby-playing-game(5).jpg" alt="League of Legends" class="game-image" />
        </div>
        <div class="game-info">
          <h2 class="game-title">League of Legends</h2>
          <p class="game-description">A competitive multiplayer online battle arena game with strategic gameplay, unique champions, and intense team-based combat set in a rich, ever-expanding fantasy universe.</p>
        </div>
      </section>
    </div>
    <router-link to="../Bernardo-Portfolio" class="back-to-home">Back to Home</router-link>
  </div>
</template>

<style scoped>
.hobby-playing {
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

.games-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.game-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.game-item.reverse {
  flex-direction: column-reverse;
}

.game-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 300px;
}

.game-image-container:hover {
  transform: scale(1.05);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.game-info {
  padding: 1rem;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
}

.game-title {
  font-size: 1.5rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.game-description {
  font-size: 1rem;
  color: #d1d1d1;
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
  .game-item {
    flex-direction: row;
    align-items: center;
  }

  .game-item.reverse {
    flex-direction: row-reverse;
  }

  .game-image-container {
    width: 50%;
  }

  .game-info {
    width: 50%;
  }
}

@media (max-width: 767px) {
  .game-image-container {
    width: 100%;
  }
}
</style>

