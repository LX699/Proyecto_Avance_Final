<template>
  <div>
    <div class="fondo py-5">
      <form class="container letras">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
          v-model="usuario.correo"
            type="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
          v-model="usuario.nombre"
            type="email"
            class="form-control"
            id="nombre"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
          v-model="usuario.contrasena"
            type="password"
            class="form-control"
            id="password"
          />
        </div>

        <button class="btn btn-success mt-5" @click="addUsuario">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import usuarioService from "@/services/usuario.service.js";

export default {
  data(){
    return {
      usuario: {
        correo: "",
        nombre: "",
        contrasena: "",
      },
    };
  },
  methods: {
    addUsuario(){
      usuarioService.save(this.usuario);
      this.$router.push({ name: 'Menu'});
    }
  }
};
</script>

<style scoped>
.fondo {
  background: url(../assets/fondo2.jpg);
  background-size: cover;
  min-height: 652.5px;
}
.letras {
  color: azure;
}
</style>