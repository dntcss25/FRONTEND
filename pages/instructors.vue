<template>
    <div>
        <!-- <sidebar/> -->
        <a-table :dataSource="instructors" :columns="columns"></a-table>
    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue';
export default {
  components: { sidebar },
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
},
created(){
    if (this.$auth.loggedIn) {
    this.username = this.$auth.user.username
    this.name = this.$auth.user.name
    this.email = this.$auth.user.email
    }
}
}
</script>
