<template>
    <a-layout style="min-height: 100vh">
      <!-- Sidebar -->
      <a-layout-sider collapsible>
        <a-menu mode="inline" theme="dark" style="background: #2e7d32;">
          <a-menu-item key="1">Home</a-menu-item>
          <a-menu-item key="2">Dashboard</a-menu-item>
          <a-menu-item key="3">Profile</a-menu-item>
        </a-menu>
      </a-layout-sider>
  
      <a-layout>
        <!-- Header -->
        <a-layout-header style="text-align: center; font-size: 24px;">
          This is my Green-Themed Header
        </a-layout-header>
  
        <!-- Main Content -->
        <a-layout-content style="padding: 24px;">
          <div>
            <!-- Data Table -->
            <h2>User Table</h2>
            <a-table :dataSource="tableData" :columns="columns" rowKey="id">
              <template #actions="{ record }">
                <a-button type="primary" danger @click="deleteRow(record.id)">Delete</a-button>
              </template>
            </a-table>
  
            <!-- Add User Button -->
            <div style="margin-top: 24px;">
              <a-button type="primary" @click="isModalVisible = true">Add New User</a-button>
            </div>
  
            <!-- Add User Modal -->
            <a-modal v-model:visible="isModalVisible" title="Add New User" @ok="handleOk">
              <a-form :model="newUser" layout="vertical">
                <a-form-item label="Name">
                  <a-input v-model="newUser.name" />
                </a-form-item>
                <a-form-item label="Age">
                  <a-input v-model="newUser.age" type="number" />
                </a-form-item>
              </a-form>
            </a-modal>
          </div>
        </a-layout-content>
  
        <!-- Footer -->
        <a-layout-footer style="text-align: center;">
          © 2024 Green Dashboard
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Sidebar state
        isModalVisible: false,
        // User Table Data
        tableData: [
          { id: 1, name: 'Alice Green', age: 30 },
          { id: 2, name: 'Bob Fields', age: 28 },
        ],
        columns: [
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
          {
            title: 'Actions',
            key: 'actions',
            // Removed customRender and replaced with proper scoped slot definition
            scopedSlots: { customRender: 'actions' },
          },
        ],
        // Form Data
        newUser: {
          name: '',
          age: null,
        },
      };
    },
    methods: {
      handleOk() {
        // Push the new user data to tableData and clear form
        this.tableData.push({ ...this.newUser, id: Date.now() });
        this.newUser.name = '';
        this.newUser.age = null;
        this.isModalVisible = false;
      },

      deleteRow(id) {
        this.tableData = this.tableData.filter(row => row.id !== id);
      },
    },
  };
  </script>
  
  <style>
  /* style.css */
  body {
    font-family: Arial, sans-serif;
    background-color: #e8f5e9;
    color: #1b5e20;
  }
  
  .ant-layout-header,
  .ant-layout-footer {
    background-color: #1b5e20;
    color: #ffffff;
  }
  
  .ant-layout-sider {
    background-color: #2e7d32;
  }
  
  .ant-menu-item-selected {
    background-color: #66bb6a !important;
  }
  
  .ant-btn-primary {
    background-color: #388e3c;
    border-color: #388e3c;
  }
  
  .ant-btn-primary:hover {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  
  .ant-table-thead > tr > th {
    background-color: #a5d6a7;
    color: #1b5e20;
  }
  
  .ant-table-tbody > tr:hover > td {
    background-color: #c8e6c9;
  }
  
  .ant-modal-content {
    background-color: #e8f5e9;
    border: 1px solid #388e3c;
  }
  </style>
  