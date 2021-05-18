<template>
  <div class="discription-item" :item="item">
    <div class="discription-item__en-word">{{ item.word }}</div>
    <div class="discription-item__line">—</div>
    <div class="discription-item__ru-word">{{ item.translate }}</div>
    <!-- <p class="s">
      <span class="discription-item__en-word"></span>
      <!-- - {{ item.id }} -->
    <!-- </p> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.discription-item {
  display: flex;
  align-items: center;

  &__line {
    margin: 0 10px;
  }
}

.discription-item__en-word {
  color: #2c3e50;
  font-weight: bold;
  font-size: 18px;
}
</style>