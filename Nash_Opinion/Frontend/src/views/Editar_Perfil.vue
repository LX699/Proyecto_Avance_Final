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

        <button class="btn btn-success mt-5" @click="updateUsuario">
          Actualizar
        </button>
        <router-link
            class="boton btn btn-danger mt-5 mx-3"
            :to="{ name: 'Mi_Perfil', params:{id: this.usuario._id} }"
            >Cancelar</router-link
          >
      </form>
    </div>
  </div>
</template>

<script>
import usuarioService from "@/services/usuario.service.js";

export default {
  data() {
    return {
      usuario: {
        correo: "",
        nombre: "",
        contrasena: "",
      },
    };
  },
  created() {
    this.getUsuario();
  },
  methods: {
    getUsuario() {
      usuarioService.getById(this.$route.params.id).then((Response) => {
        this.usuario = Response.data;
      });
    },
    updateUsuario() {
      usuarioService.update(this.$route.params.id, this.usuario);
      this.$router.push({ name: "Mi_Perfil", params:{id: this.usuario._id} });
    },
  },
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