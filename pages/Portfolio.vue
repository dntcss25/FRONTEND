<template>
  <a-layout>
    <div class="page-container">
      <div class="grid-container">
        <a-card v-for="(item, index) in cardItems" :key="index" hoverable class="grid-item">
          <template #cover>
            <img :alt="item.title" :src="item.imageUrl" />
          </template>
          <a-card-meta :title="item.title">
            <template #description>{{ item.name }}</template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import IMAGE from '@/Images/IMAGE.jpg';

const cardItems = ref([
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Christian Bernardo', imageUrl: IMAGE },
  { title: 'Allen Iverson Calipjo', imageUrl: IMAGE },
  { title: 'John Luke Dela Cruz', imageUrl: IMAGE },
  { title: 'Christiano Hermoso', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },
  { title: 'Michael Angelo Alba', imageUrl: IMAGE },

]);
</script>

<style scoped>
.page-container {
  padding: 0 250px;
  margin-top: 100px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Fixed 4-column layout */
  gap: 16px;
  padding: 16px;
}

.grid-item {
  width: 100%;
}

.ant-card-meta-description {
  font-size: 12px;
  color: #666;
}

@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); 
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>