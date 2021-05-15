<template>
  <div class="item-word">
    <div v-for="item in arrayWords" :key="item.id">
    <div class="wp" v-if="item.show">
      <DiscriptionItem :item="item" />
      <div class="item-word__btns">
        <BtnCheckboxHideItem :idObjectWords="item.id" />
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
  components: { BtnDeleteItem, BtnCheckboxHideItem, DiscriptionItem },
};
</script>

<style>
.wp {
  display: flex;
  justify-content: space-between;

  background: plum;
  margin: 15px;
  padding: 15px;
}
.item-word {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;

  margin: 15px;

  padding: 15px 25px;
}
.item-word__btns {
  display: flex;
}
</style>