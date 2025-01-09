<template>
    <div class="search">
      <div class="search-container">
        <span class="search-icon">
          🔍
        </span>
        <input
          class="search-input"
          type="text"
          v-model="searchQuery"
          placeholder="Search users..."
          @input="emitSearch"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const searchQuery = ref(props.modelValue);
  
      const emitSearch = () => {
        emit('update:modelValue', searchQuery.value);
      };
  
      watch(() => props.modelValue, newValue => {
        searchQuery.value = newValue;
      });
  
      return { searchQuery, emitSearch };
    },
  };
  </script>
  
  