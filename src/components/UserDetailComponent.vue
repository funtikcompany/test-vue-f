<template>
    <div class="user-details-card">
      <!-- Фото користувача -->
      <div class="user-photo">
        <img :src="`https://i.pravatar.cc/150?img=${user.id}`" alt="User Avatar" />
      </div>
  
      <!-- Основна інформація про користувача -->
      <div class="user-info">
        <h2>{{ user.name }}</h2>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p>
          <strong>Address:</strong> {{ user.address.street }}, {{ user.address.suite }},
          {{ user.address.city }}
        </p>
      </div>
  
      <!-- Додаткова інформація -->
      <div class="user-company">
        <h3>About the Company</h3>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
        <p><strong>Catchphrase:</strong> "{{ user.company.catchPhrase }}"</p>
        <p><strong>Website:</strong> 
          <a :href="`http://${user.website}`" target="_blank">{{ user.website }}</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import {defineComponent} from 'vue';
  
  export default defineComponent({
    props: ['user'],
  })
  </script>
  