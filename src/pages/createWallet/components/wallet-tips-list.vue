<template>
  <ul>
    <li v-for="(item, index) in tipsListKey" :key="index">
      <img :src="item.tips_img" alt="" class="tips_img" />
      <span>{{ $t(item.tips_cnt) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tipsList',
  props: {
    tipsListKey: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styless/public";
ul {
  margin: 0;
  padding: 0;
  li {
    color: $colorTips;
    font-size: 0.6rem;
    margin-bottom: 0.4rem;
    line-height: 1.5;
    display: flex;
    span {
      word-wrap: break-word;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>