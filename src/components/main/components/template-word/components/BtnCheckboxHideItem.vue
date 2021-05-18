<template>
  <input
    v-model="returnArrayFlags"
    :idObjectWords="idObjectWords"
    :doneObjectWords="doneObjectWords"
    @change="onClickCheckBox(idObjectWords, doneObjectWords)"
    type="checkbox"
    class="input-checkbox-hide-item"
  />
  <!-- checked="checked" -->
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {
    idObjectWords: {
      type: Number,
      required: true,
    },

    doneObjectWords: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["GETTERS_FLAG_CHECKBOX"]),

    returnArrayFlags: {
      get() {
        this.GETTERS_FLAG_CHECKBOX;
      },
      set() {
        this.ACTION_FLAG_CHECKBOX();
      },
    },
  },

  methods: {
    ...mapActions(["ACTION_FLAG_CHECKBOX"]),
    // checked
    onClickCheckBox(idObjectWords, statusFlag) {
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