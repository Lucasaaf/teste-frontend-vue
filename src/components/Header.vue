<template>
    <v-app-bar app class="header">
        <v-row no-gutters class=" w-full">
          <v-col cols="4" class="text-left">
            <v-btn color="#c0392b" @click='redirectToPosts' class="self-end ma-3">Posts</v-btn> 
          </v-col>
          <v-col cols="4" class="text-center">
            <div class="header-title">
              <h2 class="h1">{{ title }}</h2>
            </div>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-btn color="#c0392b" @click='redirect' class="self-end ma-3">Users</v-btn>
          </v-col>
        </v-row>
    </v-app-bar>
  </template>
  
  <script>

  export default {
    name: 'nav-bar',
    methods: {
        redirect(){
            this.$router.push('/users')
        },
        redirectToPosts(){
            this.$router.push('/')
        }
    },
    props: {
      title: {
        type: String,
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: center;
  }
  .w-full {
    width: 100vw;
  }
  
  .header-title {
    display: flex;
    justify-content: center;
  }
  </style>