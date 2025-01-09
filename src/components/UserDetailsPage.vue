<template>
    <div class="container">
        <router-link class="nav-link" to="/">
          ← Go back
        </router-link>
        <UserDetailComponent :user="user" v-if="!loading"/>
        <LoaderComponent v-else/>
    </div>
</template>
  
  <script>
  import { ref, onMounted,defineComponent } from 'vue';
  import { getUsersDetail } from '../api';
  import UserDetailComponent from './UserDetailComponent.vue';
  import LoaderComponent from './LoaderComponent.vue';
  
  export default defineComponent({
    components:{UserDetailComponent,LoaderComponent},
    setup() {
      const user = ref(null);
      const loading = ref(true)
  
      const fetchUserDetails = async id => {
        try {
          const response = await getUsersDetail(id);
          console.log(response)
          user.value = response.data;
        } catch (error) {
          console.error('Error fetching user details:', error);
        }finally{
            loading.value=false
        }
      };
  
      onMounted(() => {
        const id = window.location.pathname.split('/').pop();
        fetchUserDetails(id);
      });
  
      return { user,loading };
    },
  });
  </script>
  
  <style scoped>
  .user-details img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  </style>
  