<template>
  <div class="page-two">
    <h2 class="title">Перевод слов</h2>

    <div class="calendar-container">
      <iframe
        name="myframe"
        width="100%"
        src="https://www.lingvolive.com/ru-ru"
      ></iframe>
    </div>

    <!-- link home -->
    <router-link to="/" class="header__link link-home">Home</router-link>
  </div>
</template>

<style>
.page-two {
  height: 100vh;
}
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

.link-home {
  margin: 15px auto;
}

.title {
  margin-bottom: 15px;
}
</style>