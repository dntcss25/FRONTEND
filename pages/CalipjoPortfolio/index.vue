<template>
  <a-layout class="layout">
    <!-- Navigation -->
    <a-layout-header class="header">
      <div class="logo">A</div>
      <a-menu
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        class="menu"
      >
        <a-menu-item key="about" @click="scrollToSection('about')">About</a-menu-item>
        <a-menu-item key="experience" @click="scrollToSection('experience')">Experience</a-menu-item>
        <a-menu-item key="project" @click="scrollToSection('projects')">Project</a-menu-item>
        <a-menu-item key="contact" @click="scrollToSection('contact')">Contact</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content>
      <!-- Hero Section -->
      <div class="hero">
        <h1 class="hero-title">Hi, I'm Allen</h1>
        <p class="hero-subtitle">Gusto na Grumaduate</p>
        <div class="scroll-indicator" @click="scrollToSection('about')">↓</div>
      </div>

      <!-- About Section -->
      <section id="about" class="section">
        <div class="section-title-wrapper">
          <h2 class="section-title">About Me</h2>
        </div>
        <a-row :gutter="[48, 48]">
          <a-col :span="24" :md="12">
            <div class="about-content">
              <p>Hello! I'm JannIverson Calipjo, a passionate Information Technology student currently pursuing my degree at SPIST. With a keen interest in software development, cybersecurity, and data analysis, I thrive on tackling complex problems and transforming innovative ideas into functional solutions.</p>
              <p>Throughout my academic journey, I have gained hands-on experience in various programming languages including Python, Java, and JavaScript. I have also worked on projects involving web development, database management, and machine learning, all of which have honed my technical skills and deepened my understanding of the IT landscape.</p>
              <p>In addition to my technical abilities, I am a strong advocate for continuous learning and collaboration. I enjoy working on group projects, where I can contribute my ideas and learn from my peers.</p>
              <p>I believe that technology has the power to change lives, and I am excited to be part of this ever-evolving field. In my free time, I enjoy staying up-to-date with the latest tech trends, attending workshops, and contributing to open-source projects.</p>
            </div>
          </a-col>
          <a-col :span="24" :md="12">
            <div class="about-image">
              <img src="./images/main.jpg" alt="About me" />
            </div>
          </a-col>
        </a-row>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section">
        <div class="section-title-wrapper">
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="experience-list">
          <div class="experience-item" v-for="(job, index) in jobs" :key="index">
            <a-row>
              <a-col :span="24" :md="6">
                <div class="job-header">
                  <h3>{{ job.title }}</h3>
                  <p class="company">{{ job.company }}</p>
                  <p class="period">{{ job.period }}</p>
                </div>
              </a-col>
              <a-col :span="24" :md="18">
                <ul class="job-description">
                  <li v-for="(desc, idx) in job.descriptions" :key="idx">
                    {{ desc }}
                  </li>
                </ul>
              </a-col>
            </a-row>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section id="projects" class="section">
        <div class="section-title-wrapper">
          <h2 class="section-title">Featured Project</h2>
        </div>
        <div class="featured-projects">
          <a-row :gutter="[48, 48]" v-for="(project, index) in featuredProjects" :key="index">
            <a-col :span="24" :md="12" :order="index % 2 === 0 ? 0 : 1">
              <div class="project-image">
                <img src="./images/clinicsystem.jpg" :alt="project.name" />
              </div>
            </a-col>
            <a-col :span="24" :md="12">
              <div class="project-content">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <div class="tech-stack">
                  <a-tag v-for="tech in project.technologies" :key="tech">
                    {{ tech }}
                  </a-tag>
                </div>
                <div class="project-links">
                  <a href="#" class="link-icon"><github-outlined /></a>
                  <a href="#" class="link-icon"><link-outlined /></a>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <div class="section-title-wrapper">
          <h2 class="section-title">Contact</h2>
        </div>
        <div class="contact-content">
          <p>I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.</p>
          <a-button type="primary" size="large" @click="showModal">Write Message</a-button>
        </div>
        <div class="footer">
          <p>Allen - 2024</p>
          <like-outlined />
        </div>
      </section>
    </a-layout-content>

    <!-- Contact Modal -->
    <a-modal
      v-model:visible="isModalVisible"
      title="Write a Message"
      @ok="handleOk"
    >
      <a-form :model="formState" :rules="rules" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item name="name" label="Name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item name="email" label="Email">
          <a-input v-model:value="formState.email" />
        </a-form-item>
        <a-form-item name="message" label="Message">
          <a-textarea v-model:value="formState.message" :rows="4" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

import { message } from 'ant-design-vue'

const selectedKeys = ref(['about'])
const isModalVisible = ref(false)

const formState = reactive({
  name: '',
  email: '',
  message: ''
})

const rules = {
  name: [{ required: true, message: 'Please input your name', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' },
    { type: 'email', message: 'Please input a valid email', trigger: 'blur' }
  ],
  message: [{ required: true, message: 'Please input your message', trigger: 'blur' }]
}

const jobs = ref([
  {
    title: 'Internship In SPIST',
    company: 'SOUTHERN PHILIPPINES OF SCIENCE INSTITUTE OF SCIENCE AND TECHNOLOGY',
    period: 'Apr 2022- Dec 2024',
    descriptions: [
      'During my internship at SPIST, I had the opportunity to immerse myself in a dynamic environment where I could apply my academic knowledge to real-world projects. I worked alongside seasoned professionals on various tasks, including software development, troubleshooting, and system optimization, which allowed me to enhance my programming skills and gain insights into best practices in the industry. This experience not only strengthened my technical abilities in languages like Python and JavaScript but also taught me the importance of teamwork, communication, and adaptability in a fast-paced IT setting. Overall, my internship at SPIST has been instrumental in shaping my career aspirations and deepening my passion for technology.',
    ]
  }
])

const featuredProjects = ref([
  {
    name: 'CLINIC SYSTEM FOR SPIST',
    description: 'The Clinic System for SPIST is an innovative digital solution designed to streamline healthcare services within the institution, improving the efficiency of patient management and administration. This comprehensive system integrates various functionalities, including appointment scheduling, patient registration, medical history tracking, and billing, ensuring seamless communication between healthcare providers and students. By utilizing a user-friendly interface, the system facilitates easy access to medical records and supports quick decision-making for healthcare professionals. Moreover, it enhances the overall patient experience by reducing wait times and improving service delivery, ultimately promoting a healthier campus community. The Clinic System is a vital step towards modernizing healthcare practices at SPIST and exemplifies the institution\'s commitment to leveraging technology for better health outcomes.',
    technologies: ['HTML', 'CSS', 'JS', 'Figma', 'React']
  }
])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const showModal = () => {
  isModalVisible.value = true
}

const handleOk = () => {
  isModalVisible.value = false
}

const onFinish = (values) => {
  console.log('Form values:', values)
  message.success('Message sent successfully!')
  isModalVisible.value = false
}

const onFinishFailed = (errorInfo) => {
  console.log('Form validation failed:', errorInfo)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        selectedKeys.value = [entry.target.id]
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}

.header {
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 48px;
  color: #1890ff;
}

.menu {
  flex: 1;
  justify-content: flex-end;
  border-bottom: none;
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f2f5;
}

.hero-title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1890ff;
}

.hero-subtitle {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.scroll-indicator {
  position: absolute;
  bottom: 48px;
  font-size: 24px;
  animation: bounce 2s infinite;
  cursor: pointer;
  color: #1890ff;
}

.section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title-wrapper {
  text-align: center;
  margin-bottom: 48px;
  position: relative;
}

.section-title-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #e8e8e8;
  z-index: -1;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  background: white;
  padding: 0 24px;
  display: inline-block;
  margin: 0;
  color: #1890ff;
}

.about-content {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.65);
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.experience-item {
  margin-bottom: 48px;
  background-color: #f9f9f9;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.job-header {
  margin-bottom: 24px;
}

.job-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1890ff;
}

.company, .period {
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
}

.job-description {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-description li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.65);
}

.job-description li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1890ff;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-content h3 {
  font-size: 24px;
  font-weight:600;
  color: #1890ff;
  margin-bottom: 16px;
}

.tech-stack {
  margin: 16px 0;
}

.project-links {
  display: flex;
  gap: 16px;
}

.link-icon {
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
  transition: color 0.3s;
}

.link-icon:hover {
  color: #1890ff;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.footer {
  margin-top: 80px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .section {
    padding: 60px 16px;
  }

  .about-image {
    margin-top: 24px;
  }

  .project-image {
    margin-bottom: 24px;
  }
}
</style>