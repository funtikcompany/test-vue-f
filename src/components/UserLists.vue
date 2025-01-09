<template>
    <div class="user-list">
      <SearchBar v-model="searchQuery" />

      <div v-if="!loading" class="cards">
        <UserCard
          v-for="user in filteredUsers"
          :key="user.id"
          :user="user"
        />
      </div>
      <LoaderComponent v-else/>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import UserCard from '../components/UserCard.vue';
  import SearchBar from '../components/SearchBar.vue';
  import LoaderComponent from './LoaderComponent.vue';
  import {getUsers} from '../api'
  
  export default {
    components: { UserCard, SearchBar,LoaderComponent },
    setup() {
      const users = ref([]);
      const searchQuery = ref('');
      const loading = ref(true);
  
      const filteredUsers = computed(() =>
        users.value.filter(user =>
          user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      );
  
      const fetchUsers = async () => {
        try {
          const response = await getUsers()
          users.value = response.data;
        } catch (error) {
            alert('Йой, щось трапилось!:(')
        }finally {
            loading.value = false
        }
      };
  
      onMounted(fetchUsers);
  
      return { users, searchQuery, filteredUsers,loading };
    },
  };
  </script>
  
  <style scoped>

  </style>
  