<template>
</template>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    this.$page.lastUpdated = "2023/10/11 下午6:00:00";
  }
};
</script>
