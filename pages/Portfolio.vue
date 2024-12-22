<template>
  <a-layout>
    <AHeader />
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
            <div class="image-container">
              <img :alt="item.title" :src="item.imageUrl" class="card-image" />
              <div class="icon-container">
                <a-tooltip title="GitHub" placement="top">
                  <button class="icon-wrapper" @click="onGitHubClick">
                    <a-icon type="github" class="icon" />
                  </button>
                </a-tooltip>
                <a-tooltip title="Link" placement="top">
                  <button class="icon-wrapper" @click="onLinkClick">
                    <a-icon type="link" class="icon" />
                  </button>
                </a-tooltip>
              </div>
            </div>
          </template>
          <a-card-meta :title="item.title">
            <template #description>{{ item.name }}</template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <AFooter />
  </a-layout>
</template>

<script setup>
import AHeader from '@/components/AHeader.vue';
import AFooter from '@/components/AFooter.vue';
import { ref, computed } from 'vue';
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

const onGitHubClick = () => {

  console.log('GitHub icon clicked');
};

const onLinkClick = () => {

  console.log('Link icon clicked');
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
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(122, 121, 121, 0.199);
}

.grid-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(189, 184, 184, 0.377);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-item:hover::after {
  opacity: 1;
}

.image-container {
  position: relative;
}

.card-image {
  width: 100%; 
  height: auto; 
  object-fit: cover; 
  display: block;
}

.icon-container {
  position: absolute;
  bottom: 10px; 
  left: 10px;
  display: flex;
  gap: 8px; 
  opacity: 0; 
  transition: opacity 0.3s ease;
}

.grid-item:hover .icon-container {
  opacity: 1;
}

.ant-card-meta-description {
  font-size: 12px;
  color: #666;
}

.icon {
  color: #666;
  font-size: 24px; 
  transition: color 0.3s ease; 
}

.icon-wrapper {
  display: inline-flex;
  align-items: center; 
  justify-content: center; 
  padding: 8px; 
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  cursor: pointer; 
  border: none;
  z-index: 1; 
}

.icon-wrapper:hover {
  background-color: #188fff86; 
}

.icon-wrapper:hover .icon {
  color: #fff; 
}

.grid-item:hover .icon {
  color: #188fff96; 
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