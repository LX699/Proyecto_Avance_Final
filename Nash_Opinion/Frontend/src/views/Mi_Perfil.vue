<template>
  <div>
    <div class="fondo">
      <div class="">
        <div class="card mb-5" style="width: 20rem">
          <div class="card-header text-center">Nombre</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">{{ usuario.nombre }}</li>
          </ul>
        </div>
        <div class="card" style="width: 20rem">
          <div class="card-header text-center">Email</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              {{ usuario.correo }}
            </li>
          </ul>
        </div>
        <router-link
          class="boton btn btn-success mt-5"
          :to="{ name: 'Editar_Perfil', params: { id: usuario._id } }"
          >Editar</router-link
        >
      </div>
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
  },
};
</script>

<style scoped>
.fondo {
  background: url(../assets/fondo2.jpg);
  background-size: cover;
  min-height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.letras {
  color: azure;
}
.hijo {
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
.padre {
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>