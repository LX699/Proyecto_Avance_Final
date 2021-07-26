import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/iniciar_sesion',
    name: 'Iniciar_Sesion',
    component: () => import(/* webpackChunkName: "iniciar_sesion" */ '../views/Iniciar_Sesion.vue')
  },
  {
    path: '/crear_publicacion',
    name: 'Crear_Publicacion',
    component: () => import(/* webpackChunkName: "crear_publicacion" */ '../views/Crear_Publicacion.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/publicacion/:id',
    name: 'Publicacion',
    component: () => import(/* webpackChunkName: "publicacion" */ '../views/Publicacion.vue')
  },
  {
    path: '/editar_publicacion/:id',
    name: 'Editar_Publicacion',
    component: () => import(/* webpackChunkName: "editar_publicacion" */ '../views/Editar_Publicacion.vue')
  },
  {
    path: '/mi_perfil/:id',
    name: 'Mi_Perfil',
    component: () => import(/* webpackChunkName: "mi_perfil" */ '../views/Mi_Perfil.vue')
  },
  {
    path: '/editar_perfil/:id',
    name: 'Editar_Perfil',
    component: () => import(/* webpackChunkName: "editar_perfil" */ '../views/Editar_Perfil.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
