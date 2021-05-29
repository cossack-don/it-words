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
  computed: {},

  methods: {
    ...mapActions(["ACTION_FLAG_CHECKBOX"]),

    onClickCheckBox(idObjectWords) {
      this.ACTION_FLAG_CHECKBOX(idObjectWords);
    },
  },
};
</script>

<style>
.input-checkbox-hide-item {
  width: 45px;
  height: 45px;
  cursor: pointer;
  margin-right: 15px;
}
</style>