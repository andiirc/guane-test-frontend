<template>
  <div class="pagination">
    <div class="pagination__info">
      <button @click="previousPage()" :disabled="isDisabledPrevious"
      class="btn">Anterior</button>
    </div>
    <div class="pagination__info">
      <span class="pagination-link is-current">
        {{ currentPage }} de {{ totalPages }}
      </span>
    </div>
    <div class="pagination__info">
      <button @click="nextPage()" :disabled="isDisabledNext"
      class="btn">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Paginate',
  setup() {
    const store = useStore();

    const page = computed(() => store.state.page);

    const currentPage = computed(() => store.state.currentPage);

    const totalPages = computed(() => store.state.totalPages);

    const isDisabledPrevious = computed(() => store.state.currentPage === 1);

    const isDisabledNext = computed(() => store.state.currentPage === store.state.totalPages);

    const nextPage = () => store.dispatch('nextPage');

    const previousPage = () => store.dispatch('previousPage');

    return {
      page, currentPage, totalPages, nextPage, previousPage, isDisabledPrevious, isDisabledNext,
    };
  },
};
</script>

<style lang="scss">
.pagination{
    color: $text-primary;
    font-size: 1.6rem;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    .btn {
      font-family: 'Patrick Hand', Tahoma, Geneva, Verdana, sans-serif;
      box-sizing: border-box;
      appearance: none;
      background-color: $background-secundary;
      border: 2px solid $background-tertiary;
      border-radius: 0.6em;
      color: $text-primary;
      cursor: pointer;
      display: flex;
      align-self: center;
      font-size: 0.8rem;
      line-height: 1;
      margin: 20px;
      padding: 1em 2em;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      &:hover,
      &:focus {
        border: 2px solid $background-secundary;
        background-color: $background-tertiary;
        color: $text-quaternary;
        outline: 0;
      }
      &:disabled{
        pointer-events: none;
        opacity: 0.2;
      }
    }
}
.pagination__info{
  display: inline-block;
  text-align: center;
  width: 33,333%;
}
</style>
