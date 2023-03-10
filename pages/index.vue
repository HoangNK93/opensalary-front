<template>
  <div>
    <Header />
    <div>
      <tutorial></tutorial>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "~/components/layout/Header.vue";
import Tutorial from "~/components/Tutorial.vue";

export default {
  components: {
    Header,
    Tutorial
  }
}
</script>
