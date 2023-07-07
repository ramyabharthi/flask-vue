<template>
    <div>
      <h2>Add Book</h2>
      <form @submit.prevent="handleAddSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" class="form-control" id="author" v-model="author" />
        </div>
        <div class="form-group">
          <label for="read">Read?</label>
          <input type="checkbox" class="form-control" id="read" v-model="read" />
        </div>
        <button type="submit" class="btn btn-primary">Add Book</button>
        <button type="button" class="btn btn-secondary" @click="handleAddReset">Reset</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        author: '',
        read: false,
      };
    },
    methods: {
      handleAddSubmit() {
        // Perform validation and handle the submission logic
        // You can access the form data from this.title, this.author, and this.read
        // Add your code to send the form data to the server or update the local book list
        // After successful submission, you can redirect to the book list page or perform any other action
      },
      handleAddReset() {
        this.title = '';
        this.author = '';
        this.read = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  