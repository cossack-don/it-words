<template>
  <main class="main">
    <Search />
    <ItemWord
      class="main_item"
      :arrayWords="GETTERS_GET_ARRAY_WORDS"
      v-if="arrayItemsWords.length > 0"
    />
    <div v-else>Слова закончились</div>

    <!-- ДОДЕЛАТЬ КНОПКУ ВВЕРХ, СДЕЛАТЬ ПРИ УСЛОВИЕ ПРОКРУТКИ 300 ПК ПОКАЗЫВАТЬ КНОПКУ ИНАЧЕ СКРЫВАТЬ -->
    <button
      v-if="flagArrayScrollTopPage"
      class="btn-array-top-page"
      @click="btnScrollTopPage"
    >
      &#5123; вверх
    </button>
  </main>
</template>

<script>
// Search
import Search from "@/components/main/components/search/Search.vue";

// Item word - card
import ItemWord from "@/components/main/components/template-word/ItemWord.vue";

import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  components: {
    Search,
    ItemWord,
  },
  data() {
    return {
      flagArrayScrollTopPage: true,
    };
  },

  computed: {
    ...mapGetters(["GETTERS_GET_ARRAY_WORDS"]),
    ...mapState({
      arrayItemsWords: (state) => state.arrayItemsWords,
    }),
  },
  methods: {
    btnScrollTopPage() {
      window.scrollTo(0, 0);
    },

    ...mapActions(["ACTION_ARRAY_WORDS"]),
  },

  created() {
    this.ACTION_ARRAY_WORDS();
  },
};
</script>

<style>
.main {
  position: relative;
}
.btn-array-top-page {
  position: fixed;
  top: 90px;
  left: 20px;
}
</style>