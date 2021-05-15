<template>
  <input class="main-search-input" type="text" v-model.trim="search" placeholder="Автопоиск по слову" />
</template>

<script>
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
};
</script>

<style>
</style>