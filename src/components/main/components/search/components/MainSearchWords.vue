<template>
  <div><input type="text" v-model="search" /></div>
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