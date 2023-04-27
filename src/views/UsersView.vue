<template>
  <div>
    <v-container>
      <NavBar title="Users"/>
    </v-container>
    <v-main>
      <v-list :style="{ background: '#2c3e50'}">
        <v-list-item
        v-for="users in arrayUsers"
        :key="users.id"
        >
        <v-list-item-content>
          <v-card class='' :to="`/details/${ users.id }`">
            <div class="d-flex">
            <v-icon color="#27ae60" large>mdi-account</v-icon>                                    
            <v-card-title>{{ users.name }}</v-card-title>
            </div>
            <v-card-subtitle>@{{ users.username }}</v-card-subtitle>
          </v-card>
        </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-main>
  </div>
  </template>
  
  <script>
  import { ApiUsers } from '@/services/fetchAPI'
  import NavBar from '@/components/Header.vue';
    export default {
      name: 'users-view',
      data(){
        return {
          arrayUsers: []
        }
      },
    methods: {
      directDetails(){
            this.$router.push('/users')
        },
      async getUsers() {
        this.arrayUsers = await ApiUsers();
      },
    },
    created(){
      this.getUsers()
    },
    components: {
        NavBar,
      }
    }
  </script>