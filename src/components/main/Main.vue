<template>
  <main class="main">
    <Search />
    <ItemWord
      class="main_item"
      :arrayWords="GETTERS_GET_ARRAY_WORDS"
      v-if="$store.state.stateComponent.arrayItemsWords.length > 0"
    />
    <div v-else>Слова закончились</div>
  </main>
</template>

<script>
// Search
import Search from "@/components/main/components/search/Search.vue";

// Item word - card
import ItemWord from "@/components/main/components/template-word/ItemWord.vue";

import { mapGetters, mapActions, mapMutation } from "vuex";

export default {
  components: {
    Search,
    ItemWord,
  },

  computed: {
    ...mapGetters(["GETTERS_GET_ARRAY_WORDS"]),
  },
  methods: {
    ...mapActions(["ACTION_ARRAY_WORDS"]),
  },

  created() {
    this.ACTION_ARRAY_WORDS();
  },
};
</script>

<style>
</style>