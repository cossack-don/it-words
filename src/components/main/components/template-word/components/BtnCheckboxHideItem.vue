<template>
  <input
    :idObjectWords="idObjectWords"
    @click="onClickCheckBox(idObjectWords)"
    type="checkbox"
    class="input-checkbox-hide-item"
  />
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
  // computed: { ...mapState(["arrayItems"]) },
  methods: {
    // ...mapActions(["ACTION_CHANGE_DONE_ITEM"]),
    onClickCheckBox(objectID) {
      console.log(objectID);
      // принимает id из объекта, сравниваем с id в массиве arrayItemsWords
      // this.arrayItemsWords.forEach((item, index) => {
      //   if (item.id === objectID) {
      //     console.log(item);
      //     this.ACTION_CHANGE_DONE_ITEM();
      //     // this.ACTION_ON_CLICK_BTN_DELETE_ITEM(index);
      //   }
      // });
    },
  },
};
</script>

<style>
.input-checkbox-hide-item {
  margin-bottom: 15px;
}
</style>