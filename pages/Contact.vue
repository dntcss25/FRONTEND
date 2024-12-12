<template>
  <div>
    <AHeader />
    <main>
      <div class="contact-section">
        <!-- Contact Form Section -->
        <div class="form-container">
          <p class="form-heading">GET IN TOUCH WITH US</p>
          <a-form :form="form" @submit.prevent="handleSubmit">
            <a-form-item
              label="NAME"
              :validate-status="nameError ? 'error' : ''"
              :help="nameError"
            >
              <a-input v-model="name" placeholder="Enter your name" />
            </a-form-item>

            <a-form-item
              label="CONTACT"
              :validate-status="contactError ? 'error' : ''"
              :help="contactError"
            >
              <a-input
                v-model="contact"
                placeholder="Enter your contact number"
              />
            </a-form-item>

            <a-form-item
              label="MESSAGE"
              :validate-status="messageError ? 'error' : ''"
              :help="messageError"
            >
              <a-textarea
                v-model="message"
                placeholder="Enter your message"
                rows="1"
              />
            </a-form-item>

            <a-form-item class="center-submit">
              <a-button
                type="primary"
                html-type="submit"
                class="submit-button"
              >
                SUBMIT
              </a-button>
            </a-form-item>
          </a-form>
        </div>

        <!-- Map Section -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.693485082101!2d120.93714867510207!3d14.38713788607434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d2609bedc269%3A0xd49218819a523761!2sSouthern%20Philippines%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sph!4v1729911139373!5m2!1sen!2sph"
            class="adjusted-map"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>

          <div>
            <a-button
              class="direction-button"
              type="default"
              href="https://maps.app.goo.gl/eeft8witFtgR9zRy6"
              target="_blank"
            >
              <i class="fas fa-map-marker-alt"></i> GET DIRECTION
            </a-button>
          </div>
        </div>
      </div>
    </main>
    <AFooter />
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
export default {
  data() {
    return {
      form: this.$form.createForm(this), 
      name: '',
      contact: '',
      message: '',
      nameError: null,
      contactError: null,
      messageError: null,
    };
  },
  methods: {
    validateForm() {
      let valid = true;

      if (!this.name.trim()) {
        this.nameError = "Name is required.";
        valid = false;
      } else {
        this.nameError = null;
      }

      if (!this.contact.trim()) {
        this.contactError = "Contact number is required.";
        valid = false;
      } else if (!/^\d+$/.test(this.contact)) {
        this.contactError = "Contact must be a valid number.";
        valid = false;
      } else {
        this.contactError = null;
      }

      if (!this.message.trim()) {
        this.messageError = "Message is required.";
        valid = false;
      } else {
        this.messageError = null;
      }

      return valid;
    },
    handleSubmit() {
      if (this.validateForm()) {
        console.log("Form submitted:", {
          name: this.name,
          contact: this.contact,
          message: this.message,
        });
        this.$message.success("Form submitted successfully!");
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.contact = '';
      this.message = '';
      this.nameError = null;
      this.contactError = null;
      this.messageError = null;
    },
  },
};
</script>

<style scoped>
.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px; 
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.form-container {
  flex: 1;
  max-width: 80%;
  padding: 12px 50px;
  border-radius: 8px;
}

.center-submit {
  text-align: center;
}

.submit-button {
  background-color: #193940;
  border-color: #193940;
  padding: 5px 80px;
  border-radius: 2px;
}

.submit-button:hover {
  background-color: #1e555e;
  border-color: #1e555e;
}

.map-container {
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.adjusted-map {
  width: 560px;
  height: 495px;
  border-radius: 2px;
  border: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.direction-button {
  right: 201px;
  color: #d23230;
  font-weight: bold;
  border-radius: 6px;
  border-color: #d23230;
}

.direction-button i {
  margin-right: 8px; 
}

.direction-button:hover {
  background-color: #d23230;
  color: rgb(253, 253, 253);
  border-color: #d23230;
}

main {
  padding: 24px;
}

.form-heading {
  margin-top: -17px;
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #030303;
  position: relative;
}

.form-heading::after {
  content: ""; 
  display: block; 
  width: 95%; 
  height: 1px; 
  background-color: #12FF19; 
  margin: 3px auto 0; 
  border-radius: 6px; 
}
</style>
