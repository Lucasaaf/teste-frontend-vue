<template>
  <div>
    <v-container>
      <NavBar title="Posts"/>
    </v-container>
    <v-main>
      <CommentsDialog :dialog.sync="showCommentsDialog" :postId="selectedPostId" />
      <v-list :style="{ background: '#2c3e50'}">
        <v-list-item
          v-for="post in arrayPosts"
          :key="post.id"
        >
          <v-list-item-content>
            <v-card @click="openCommentsDialog(post.id)">
              <div>
                <v-icon color="#27ae60" large>mdi-account</v-icon>
                {{ post.user }}
              </div>
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-subtitle>{{ post.body }}</v-card-subtitle>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-main>
  </div>
</template>
  
  <script>
  import NavBar from '@/components/Header.vue';
  import { ApiPost } from '@/services/fetchAPI'
  import CommentsDialog from '@/components/Comments.vue';

    export default {
      name: 'homePost-view',

      data(){
        return{
          arrayPosts:[],
          showCommentsDialog: false,
          selectedPostId: null,
        }
      },
      methods: {
        async getPosts() {
          this.arrayPosts = await ApiPost();
        },
        openCommentsDialog(postId) {
          this.selectedPostId = postId;
          this.showCommentsDialog = true;
  },
      },
      created() {
        this.getPosts()
      },
      components: {
        NavBar,
        CommentsDialog,
      }
    }
  </script>