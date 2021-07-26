<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'Home'}" >NashOpinion</router-link>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Menu'}" >Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Iniciar_Sesion'}"
              >Iniciar Sesion</router-link
            >
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Crear_Publicacion'}"
              >Nueva Publicacion</router-link
            >
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Mi_Perfil', params: { id: '60fec9b2e45e903cfc5beacf' }}"
              >Mi Perfil</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Busqueda"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>