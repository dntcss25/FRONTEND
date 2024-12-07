<template>
  <a-layout>
    <div class="page-container">
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Search cards..."
        style="margin-bottom: 16px;"
        @search="onSearch"
      />
      <div class="grid-container">
        <a-card v-for="(item, index) in filteredCardItems" :key="index" hoverable class="grid-item">
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
import { ref, computed } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import IMAGE from '@/Images/IMAGE.jpg';

const searchQuery = ref('');

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

const filteredCardItems = computed(() => {
  if (!searchQuery.value) return cardItems.value;
  return cardItems.value.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const onSearch = (value) => {
  searchQuery.value = value;
};
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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