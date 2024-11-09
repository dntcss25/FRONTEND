<template>
  <div>
    
    <HomeHeader/>

    <a-table :dataSource="instructors" :columns="columns">
      
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      instructors: [],
      columns: [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Subject',
          dataIndex: 'subject',
          key: 'subject',
        }
      ]
    }
  },
  async fetch(){
    let {data} = await this.$axios.get('/instructors');
    this.instructors = data;
    console.log('instructors :>> ', this.instructors);
  },
  methods: {
  }
}
</script>
