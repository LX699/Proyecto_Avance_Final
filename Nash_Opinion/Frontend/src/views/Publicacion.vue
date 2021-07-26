<template>
  <div>
    <div class="fondo">
      <div class="container py-5">
        <h2 class="letras mb-3">{{ resena.titulo }}</h2>
        <h5 class="letras mb-5">{{ resena.descripcion }}</h5>
        <div class="letras">
          {{ resena.contenido }}
        </div>
        <router-link
            class="boton btn btn-success mt-5"
            :to="{ name: 'Editar_Publicacion', params: { id: resena._id } }"
            >Editar</router-link
          >
        <button class="btn btn-danger mt-5 mx-3" @click="deletePublicacion" >Eliminar</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import resenaService from "@/services/resena.service.js";

export default {
  data() {
    return {
      resena: 0,
    };
  },
  created() {
    this.getResena();
  },
  methods: {
    getResena() {
      resenaService.getById(this.$route.params.id).then((Response) => {
        this.resena = Response.data;
      });
    },
    deletePublicacion(){
      resenaService.delete(this.$route.params.id);
      this.$router.push({ name: 'Menu'});
    }
  },
};
</script>

<style scoped>
.fondo {
  background: url(../assets/fondo2.jpg);

  background-size: cover;
  min-height: 667px;
}
.letras {
  color: azure;
}
</style>