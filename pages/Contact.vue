<template>
    <a-row>
      <a-col span="8">
        <p>Get in Touch with us:</p>
        <a-form :form="form">
          <a-form-item label="Name">
            <a-input v-model:value="name" :rules="[{ required: true, message: 'Please input your name!' }]"></a-input>
          </a-form-item>
          <a-form-item label="Contact">
            <a-input v-model:value="contact" :rules="[{ required: true, message: 'Please input your contact!' }]"></a-input>
          </a-form-item>
          <a-form-item label="Message">
            <a-textarea v-model:value="message" :rules="[{ required: true, message: 'Please input your message!' }]"></a-textarea>
          </a-form-item>
          <a-button class="Submitbutton" type="primary">SUBMIT</a-button>
        </a-form>
      </a-col>
      <a-col span="8">
        <p>DITO YUNG MAP</p>
      </a-col>
    </a-row>
  </template>
  <style>
  .Submitbutton{
    background-color: #193940;
  }
</style>