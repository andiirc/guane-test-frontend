<template>
  <div class="container">
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue';

export default {
  name: 'Home',
  components: {
    ListCharacters,
  },
};
</script>

<style lang="scss">
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

h1{
  margin-bottom: 3rem;
  text-align: center;
}
img{
   width: 100%;
}
</style>
