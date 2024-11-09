<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="app-icon">
          <img src="../assets/images/logo.png" alt="">
          <h5>SPIST</h5>
        </div>
      </div>
      <ul class="sidebar-list">
        <li v-for="item in menuItems" :key="item.text" :class="['sidebar-list-item', { active: item.active }]">
          <nuxt-link :to="item.route">
            <component :is="item.icon" class="icon"/>
            <span>{{ item.text }}</span>
          </nuxt-link>
        </li>
      </ul>
      <div class="account-info">
        <nuxt-link to="user" class="account-info-picture">
          <img src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Account">
        </nuxt-link>
        <nuxt-link to="user" class="account-info-name">Donalene T.</nuxt-link>
        <div class="logout-button-wrapper">
          <button class="action-button logout jsLogout" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FeatherActivity, FeatherShoppingBag, FeatherInbox } from 'vue-feather-icons';
  
  export default {
    data() {
      return {
        menuItems: [
          { text: 'Dashboard', route: 'home', icon: FeatherActivity, active: false },
        //   { text: 'Items', route: 'items', icon: FeatherShoppingBag, active: false },
        //   { text: 'Status', route: 'status', icon: FeatherActivity, active: false },
        //   { text: 'Report', route: 'report', icon: FeatherInbox, active: false },
          { text: 'Instructors', route: 'instructors', icon: FeatherActivity, active: true },
          { text: 'Users', route: 'users', icon: FeatherActivity, active: false }
        ]
      };
    },
    methods: {
        async logout(){  
            try {
                await this.$auth.logout();
                await this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    flex-basis: 200px;
    max-width: 200px;
    background-color: var(--sidebar);
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .sidebar-header, .account-info { padding: 16px; }
  .sidebar-list { list-style: none; padding: 0; }
  .sidebar-list-item { margin-bottom: 4px; }
  .sidebar-list-item a {
    display: flex; align-items: center; padding: 10px 16px;
    color: var(--sidebar-link); text-decoration: none;
  }
  .sidebar-list-item.active { background-color: var(--sidebar-active-link); }
  .icon { margin-right: 8px; }
  @media screen and (max-width: 1024px) { .sidebar { display: none; } }
  </style>
  