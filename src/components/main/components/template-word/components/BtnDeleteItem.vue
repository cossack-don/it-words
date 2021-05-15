<template>
  <button
    :idObjectWords="idObjectWords"
    @click="onClickDeleteItem(idObjectWords)"
  >
    BtnDeleteItem
  </button>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {
    idObjectWords: {
      type: Number,
      required: true,
    },
  },
  computed: { ...mapState(["arrayItemsWords"]) },
  methods: {
    ...mapActions(["ACTION_ON_CLICK_BTN_DELETE_ITEM"]),

    onClickDeleteItem(idObjectItem) {
      // принимает id из объекта, сравниваем с id в массиве arrayItemsWords
      this.arrayItemsWords.find((item, index) => {
        if (item.id === idObjectItem) {
          this.ACTION_ON_CLICK_BTN_DELETE_ITEM(index);
          return true;
        }
      });
    },
  },
};
</script>

<style>
</style>