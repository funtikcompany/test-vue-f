<template>
    <div class="home">
        <div class="container">
            <h1 class="home-title">Welcome to the User Directory</h1>
            <p class="home-subtitle">Search and explore user profiles.</p>
            <UserList />
        </div>
    </div>
  </template>
  
  <script>
  import UserList from '../components/UserLists.vue';
  
  export default {
    components: {
      UserList,
    },
  };
  </script>