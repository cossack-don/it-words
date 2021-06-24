<template>
  <main class="main">
    <!-- Поиск -->
    <Search />
    <!-- сообщение что такого слова не нашло -->
    <div v-if="GETTERS_SEARCH_INPUT">Такого слова к сожалению нету...</div>
    <!-- шаблон карточки товара -->
    <ItemWord
      class="main_item"
      :arrayWords="GETTERS_GET_ARRAY_WORDS"
      v-if="arrayItemsWords.length > 0"
    />
    <!-- если все слова удалили,выпадает сообщение -->
    <div v-else>Слова закончились</div>
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
    return {};
  },

  computed: {
    ...mapGetters(["GETTERS_GET_ARRAY_WORDS", "GETTERS_SEARCH_INPUT"]),
    ...mapState({
      arrayItemsWords: (state) => state.arrayItemsWords,
    }),
  },
  methods: {
    // ...mapMutation(["MUTATUINS_SHOW_MESSAGE_NOT_WORD"]),
    ...mapActions(["ACTION_ARRAY_WORDS"]),
  },

  created() {
    this.ACTION_ARRAY_WORDS();
  },
};
</script>

