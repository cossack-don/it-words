<template>
  <div>
    <input
      class="main-search-input"
      type="text"
      v-model="search"
      placeholder="Автопоиск по слову"
    />
    <!-- <button @click="cleanValueSearch">cc222c</button> -->
    <!-- проблема с отисткой инпута -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    search: {
      get() {
        return this.$store.state.searchArray;
      },
      set(value) {
        this.$store.commit("MUTATUINS_SEARCH_INPUT", value);
      },
    },
  },

  // methods: {
  //   ...mapActions(["ACTION_CLEAN_VALUE_SEARCH"]),

  //   cleanValueSearch() {
  //     this.ACTION_CLEAN_VALUE_SEARCH();
  //   },
  // },
};
</script>

<style>
</style>