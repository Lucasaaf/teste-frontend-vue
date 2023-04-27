<template>
  <v-container v-if="user">
    <NavBar title="Details User"/>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="headline">{{ user.name }}</v-card-title>

      <v-card-subtitle>{{ user.username }}</v-card-subtitle>

      <v-card-text>
        <div>Email: {{ user.email }}</div>
        <div>Telefone: {{ user.phone }}</div>
        <div>Website: {{ user.website }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="green" text :href="'http://' + user.website" target="_blank">Visitar Website</v-btn>
      </v-card-actions>

      <v-divider class="my-4" />

      <v-card-subtitle class="green--text">Endereço</v-card-subtitle>

      <v-card-text>
        <div>Rua: {{ user.address.street }}, {{ user.address.suite }}</div>
        <div>Cidade: {{ user.address.city }}</div>
        <div>CEP: {{ user.address.zipcode }}</div>
        <div>Latitude: {{ user.address.geo.lat }}, Longitude: {{ user.address.geo.lng }}</div>
      </v-card-text>

      <v-divider class="my-4" />

      <v-card-subtitle class="green--text">Empresa</v-card-subtitle>

      <v-card-text>
        <div>Nome: {{ user.company.name }}</div>
        <div>Slogan: {{ user.company.catchPhrase }}</div>
        <div>Área de atuação: {{ user.company.bs }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>


  <script>
  import { ApiUsersById } from '@/services/fetchAPI'
  import NavBar from '@/components/Header.vue';
    export default {
      name: 'details-view',
      data(){
        return {
          user: undefined
        }
      },
      methods: {
        directDetails(){
          this.$router.push('/users')
        },
        async getUsers() {
          this.user= await ApiUsersById(this.$route.params.id);
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
