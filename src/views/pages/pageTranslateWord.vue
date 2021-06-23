<template>
  <div>
    <h2>page 2 search-word in internet</h2>
    <router-link to="/" class="header__link222222222">Home</router-link>

    <div class="calendar-container">
      <iframe
        name="myframe"
        width="100%"
        src="https://www.lingvolive.com/ru-ru"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.calendar-container {
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
}

.calendar-container iframe {
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.calendar-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>