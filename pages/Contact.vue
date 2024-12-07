<template>
  <div>
    <AHeader />
    <main>
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
      <a-col span="12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.693485082101!2d120.93714867510207!3d14.38713788607434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d2609bedc269%3A0xd49218819a523761!2sSouthern%20Philippines%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sph!4v1729911139373!5m2!1sen!2sph"
          width="100%"
          height="300"
          frameborder="0"
          style="border:0; margin-top: 24px;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <a-button class="direction-button" type="default" href="https://maps.app.goo.gl/eeft8witFtgR9zRy6" target="_blank">
         GET DIRECTION
      </a-button>
    </a-col>
    </a-row>
  </main>
    <AFooter />
  </div>
  </template>
  <style>
  .Submitbutton{
    background-color: #193940;
  }

  .direction-button {
    margin-top: 16px;
    color: #d23230;
    font-weight: bold;
  }
</style>

