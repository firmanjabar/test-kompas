<template>
  <div class="mt-3 text-center bg-white p-2 customStyle">
    <small>
      coded with
      <font-awesome-icon icon="fa-regular fa-heart" style="color: red" />
      <a class="styleLink" href="https://firmanjabar.my.id" target="_blank">
        firman abdul jabar
      </a>
      <br />
      <a
        href="https://github.com/firmanjabar/test-kompas"
        class="styleLink"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-github" /> source code
      </a>
    </small>
  </div>
</template>

<script>
export default {};
</script>

<style>
.customStyle {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.styleLink {
  text-decoration: none;
  color: black;
}
</style>