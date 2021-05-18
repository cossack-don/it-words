<template>
  <div class="items-word-wrapper">
    <div
      v-for="item in arrayWords"
      :key="item.id"
      class="items-word-wrapper__item-wrapper"
    >
      <div
        v-if="item.show"
        class="items-word-wrapper__item"
        :class="{ checkedWordBgJs: item.done }"
      >
        <DiscriptionItem :item="item" />
        <div class="item-word__btns">
          <!-- {{ item.done }} -->
          <BtnCheckboxHideItem
            :idObjectWords="item.id"
            :doneObjectWords="item.done"
          />
          <BtnDeleteItem :idObjectWords="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnDeleteItem from "@/components/main/components/template-word/components/BtnDeleteItem.vue";
import BtnCheckboxHideItem from "@/components/main/components/template-word/components/BtnCheckboxHideItem.vue";
import DiscriptionItem from "@/components/main/components/template-word/components/DiscriptionItem.vue";
export default {
  props: {
    arrayWords: {
      type: Array,
    },
    // indexItemArray: {
    //   type: Array,
    // },
  },

  // BtnCheckboxHideItem
  components: { BtnDeleteItem, DiscriptionItem, BtnCheckboxHideItem },
};
</script>

<style>
.item-word {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;

  /* margin: 15px;

  padding: 15px 25px; */
}
.item-word__btns {
  display: flex;
  align-items: center;
}
</style>