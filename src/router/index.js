import Vue from 'vue'
import Router from 'vue-router'

// Importe os componentes de visualização
import HomePost from '@/views/HomePostView.vue'
import Details from '@/views/DetailsView.vue'
import users from '@/views/UsersView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePost },
    { path: '/details/:id', component: Details },
    { path: '/users', component: users },
  ],
})