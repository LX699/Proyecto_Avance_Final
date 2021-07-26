<template>
  <div>
    <div class="fondo py-5">
      <div class="titulo text-center">
        <h1 class="mb-3">Que esperas para registrarte?</h1>
        <h5>
          y poder compartirnos tu experiencia con tus compras (des)agradables
        </h5>
        <div class="padre">
          <router-link
            class="boton btn btn-success mt-5"
            :to="{ name: 'Registro' }"
            >Registrate</router-link
          >
        </div>
        <div class="hijo mt-3">
          <br /><h8
            >si no puedes
            <router-link class="links" :to="{ name: 'Iniciar_Sesion' }"
              >Iniciar Sesion</router-link
            ></h8
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fondo {
  background: url(../assets/fondo.jpg);
  background-size: cover;
  min-height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  color: azure;
}
.boton {
  width: 150px;
  height: 45px;
  border-radius: 40px;
  background-color: rgb(52, 255, 51);
  display: flex;
  justify-content: center;
  align-items: center;
}
.hijo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.padre {
  display: flex;
  justify-content: center;
  align-items: center;
}
.links {
  color: rgb(0, 255, 242);
}
</style>