<template>
  <div>
    <div class="fondo py-5">
      <form class="container letras">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-success mt-5">
          Iniciar Sesion
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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