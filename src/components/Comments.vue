<template>
    <v-dialog v-model="localDialog" max-width="600px">
      <v-card>
        <v-card-title class="headline">Comentários</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="comment in comments"
              :key="comment.id"
            >
              <v-card class="mt-2" color="#f1f1f1">
                <v-card-title>{{ comment.name }}</v-card-title>
                <v-card-subtitle>{{ comment.email }}</v-card-subtitle>
                <v-card-text>{{ comment.body }}</v-card-text>
              </v-card>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#c0392b" text @click="closeDialog">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ApitPostscomments } from '@/services/fetchAPI'
  export default {
    name: "CommentsDialog",
    data(){
      return {
        comments: [],
      }
    },
    props: {
      dialog: {
        type: Boolean,
      },
      postId: {
        type: Number,
      },
    },
    computed: {
      localDialog: {
        get() {
          return this.dialog;
        },
        set(value) {
          this.$emit("update:dialog", value);
        },
      },
    },
    watch: {
      postId: {
        handler: async function (newVal) {
          if (newVal) {
            this.comments = await ApitPostscomments(newVal);
          } else {
            this.comments = [];
          }
        },
        immediate: true,
      },
    },
    methods: {
      closeDialog() {
        this.$emit("update:dialog", false);
      },
    },
  };
  </script>
  