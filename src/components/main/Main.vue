<template>
  <main class="main">
    
    <Search />
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

};
</script>

<style>

</style>