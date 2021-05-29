<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__btns">
        <button @click="onClickRandomWords" class="header__btn-randow-word">
          Случайный <br />
          порядок слов
        </button>
        <router-link to="/page-translate-word" class="header__link"
          >Page 2</router-link
        >
      </div>
      <h1 class="header__title">
        Словарь английских-технических слов. <br />
        Учи английский сам.
      </h1>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["ACTION_RANDOM_WORDS"]),
    onClickRandomWords() {
      this.ACTION_RANDOM_WORDS();
    },
  },
};
</script>

