<template>
  <div>
    <div class="fondo py-5">
      <div class="container mx-5">
        <h2 class="titulo text-center">
          Publicaciones que podrian interesarte
        </h2>
        <div class="position-relative mt-5">
          <div v-for="resena in resenas" :key="resena._id">
            <div class="d-flex justify-content-center">
              <div class="sugerencia alert alert-secondary" role="alert">
                <router-link
                  class="links"
                  :to="{ name: 'Publicacion', params: { id: resena._id } }"
                  >{{ resena.titulo }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resenaService from "@/services/resena.service.js";

export default {
  data() {
    return {
      resenas: [],
    };
  },
  created() {
    this.getResenas();
  },
  methods: {
    getResenas() {
      resenaService.all().then((Response) => {
        console.log(Response);
        this.resenas = Response.data;
      });
    },
  },
};
</script>

<style scoped>
.sugerencia {
  text-align: center;
  width: 800px;
}

.fondo {
  background: url(../assets/fondo.jpg);
  background-size: cover;
  min-height: 652.5px;
}

.titulo {
  color: azure;
}
.links {
  color: black;
}
</style>