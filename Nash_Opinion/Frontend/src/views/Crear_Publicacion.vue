<template>
  <div>
    <div class="fondo">
      <div class="letras container py-5">
        <form>
          <div class="mb-3">
            <label for="titulo" class="form-label"
              >Titulo de la publicacion</label
            >
            <input
              v-model="resena.titulo"
              type="text"
              class="form-control"
              id="titulo"
            />
          </div>
          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripcion</label>
            <input
              v-model="resena.descripcion"
              type="text"
              class="form-control"
              id="descripcion"
            />
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="contenido">Contenido</label
            ><br />
            <textarea
              v-model="resena.contenido"
              type="text"
              id="contenido"
              class="form-control"
              placeholder="Contenido"
              minlength="1"
              maxlength="1000"
              name="texto"
            ></textarea>
          </div>
          <button class="btn btn-success mt-5" @click="addResena">Publicar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import resenaService from "@/services/resena.service.js";

export default {
  data(){
    return {
      resena: {
        titulo: "",
        descripcion: "",
        contenido: "",

      },
    };
  },
  methods: {
    addResena(){
      resenaService.save(this.resena);
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