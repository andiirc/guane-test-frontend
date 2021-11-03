<template>
    <div class="charecter_profile">
      <DetailCharacter/>
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
  width: 100%;
}
</style>
