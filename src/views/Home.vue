<template>
  <div class="container">
    <ListCharacters />
    <Paginate />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue';
import Paginate from '@/components/Paginate.vue';

export default {
  name: 'Home',
  components: {
    ListCharacters,
    Paginate,
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
