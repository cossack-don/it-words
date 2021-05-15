<template>
  <main class="main">
    <button @click="onClickRandomWords">Случайный порядок слов</button>
    <Search class="main_search" />
    <ItemWord
      class="main_item"
      :arrayWords="GETTERS_GET_ARRAY_WORDS"
      v-if="$store.state.arrayItemsWords.length > 0"
    />
    <div v-else>Слова закончились</div>
  </main>
</template>

<script>
// Search
import Search from "@/components/main/components/search/Search.vue";

// Item word - card
import ItemWord from "@/components/main/components/template-word/ItemWord.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Search,
    ItemWord,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GETTERS_GET_ARRAY_WORDS"]),
  },
  methods: {
    ...mapActions(["ACTION_RANDOM_WORDS"]),
    onClickRandomWords() {
      this.ACTION_RANDOM_WORDS();
    },
  },
};
</script>

<style>
.main_search {
  background: red;
}
.main_item {
  /* background: yellow; */
}
</style>