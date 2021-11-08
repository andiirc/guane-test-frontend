<template>
  <div class="container">
    <transition name="fade">
      <AsyncListCharacters />
    </transition>
    <transition name="fade">
      <AsyncPaginate />
    </transition>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import LoadFailed from '@/components/LoadFailed.vue';
import ListCharacters from '@/components/ListCharacters.vue';
import Paginate from '@/components/Paginate.vue';
import { resolveTimeout } from '../utils/index';

const AsyncListCharacters = defineAsyncComponent({
  loader: () => resolveTimeout(ListCharacters, 2000),
  loadingComponent: SkeletonLoader,
  errorComponent: LoadFailed,
  delay: 30,
});

const AsyncPaginate = defineAsyncComponent({
  loader: () => resolveTimeout(Paginate, 2000),
  delay: 30,
});

export default {
  name: 'Home',
  components: {
    AsyncListCharacters,
    AsyncPaginate,
  },
};
</script>

<style lang="scss">
.container {
  width: 90%;
  margin: 40px auto;
}

h1{
  margin-bottom: 3rem;
  text-align: center;
}
img{
   width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
