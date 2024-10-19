<template>
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
</template>

<script setup>
import { ref } from 'vue';

const cardItems = ref([
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
  { title: 'Mark Sebastian', imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
]);
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
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

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>