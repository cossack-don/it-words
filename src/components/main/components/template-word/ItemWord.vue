<template>
  <div class="items-word-wrapper">
    <!--  цикл отрисовки карточек-->
    <div
      v-for="item in arrayWords"
      :key="item.id"
      class="items-word-wrapper__item-wrapper"
    >
      <!--  -->
      <div
        v-if="item.show"
        class="items-word-wrapper__item"
        :class="{ checkedWordBgJs: item.done }"
      >
        <!-- описание карточки -->
        <DiscriptionItem :item="item" />

        <div class="item-word__btns">
          <!-- кнопка чекбокс -->
          <BtnCheckboxHideItem
            :idObjectWords="item.id"
            :doneObjectWords="item.done"
            :checked="item.done"
          />
          <!-- кнопка удалить карточку -->
          <BtnDeleteItem :idObjectWords="item.id" />
        </div>
      </div>
      <!--  -->
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
  },

  methods: {},

  components: { BtnDeleteItem, DiscriptionItem, BtnCheckboxHideItem },
};
</script>

<style>
</style>