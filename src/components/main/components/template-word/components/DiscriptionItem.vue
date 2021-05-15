<template>
  <div class="discription-item">
    <p :item="item" class="s">
      {{ item.word }} - {{ item.translate }} {{ item.id }}
    </p>
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

<style>
.discription-item {
  display: flex;
}
.s {
  margin-right: 15px;
}
</style>