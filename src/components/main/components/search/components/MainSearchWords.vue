<template>
  <div>
    <input
      class="main-search-input"
      type="text"
      v-model="search"
      placeholder="Автопоиск по слову"
    />
    <!-- <button>сделать кнопку, очистить инпут</button> -->

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
    },
  },

  methods: {
    ...mapActions(["ACTION_SEARCH_INPUT"]),

    cleanValueSearch() {
      // this.GETTERS_ON_CLICK_BTN_CLEAN_VALUE_SEARCH;
    },
  },
};
</script>

<style>
</style>