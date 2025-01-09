<template>
    <div class="user-card" @click="goToDetails">
        <img :src="`https://i.pravatar.cc/150?img=${user.id}`" alt="User Avatar" />
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
    </div>
  </template>
  
  <script>
  import {defineComponent} from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    props: ['user'],
    setup(props) {
        const router = useRouter();

        const goToDetails = () => {
            router.push({ name: 'UserDetails', params: { id: props.user.id } });
        };

        return { goToDetails };
    },
  })
  </script>
  
  <style scoped>
 
  </style>
  