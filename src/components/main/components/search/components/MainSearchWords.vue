<template>
  <div>
    <input
      class="main-search-input"
      type="text"
      v-model="search"
      placeholder="Автопоиск по слову"
    />
    <button @click="cleanValueSearch(GETTERS_SEARCH_INPUT)">
      сделать кнопку, очистить инпут
    </button>

    <!-- проблема с отисткой инпута -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      tes: false,
    };
  },
  computed: {
    ...mapGetters(["GETTERS_SEARCH_INPUT"]),
    search: {
      get() {
        this.GETTERS_SEARCH_INPUT;
      },
      set(value) {
        this.ACTION_SEARCH_INPUT(value);
        // this.$store.dispatch("ACTION_SEARCH_INPUT", value);
      },
      // set(value) {
      //   this.ACTION_ON_CLICK_BTN_CLEAN_VALUE_SEARCH(value);
      // },
    },
  },

  methods: {
    ...mapActions(["ACTION_SEARCH_INPUT"]),

    cleanValueSearch(val) {
      // this.ACTION_ON_CLICK_BTN_CLEAN_VALUE_SEARCH();
      console.log(val);
      // this.GETTERS_ON_CLICK_BTN_CLEAN_VALUE_SEARCH;
    },
  },
};
</script>

<style>
</style>