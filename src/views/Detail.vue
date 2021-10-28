<template>
    <div class="charecter_profile">
      <DetailCharacter />
    </div>
</template>

<script>
import DetailCharacter from '@/components/DetailCharacter.vue';

export default {
  name: 'Detail',
  components: {
    DetailCharacter,
  },
};
</script>

<style lang="scss">
.charecter_profile {
  display: block;
  margin:0 auto;
  //background-image: linear-gradient(10deg, $text-quaternary 0%, snow 100%);
  //background-image: linear-gradient(-5deg, $text-quaternary 0%, snow 100%);
  width: 100%;
}
</style>
