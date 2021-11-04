<template>
  <div class="pagination">
    <div class="pagination__info">
      <button @click="previousPage()" :disabled="isDisabledPrevious"
        class="btn left" :data-state="isDisabledPrevious === true ? 'disabled': ''">
        <i></i>Anterior<i></i>
      </button>
    </div>
    <div class="pagination__info">
      <span class="pagination-link is-current">
        {{ currentPage }} de {{ totalPages }}
      </span>
    </div>
    <div class="pagination__info">
      <button @click="nextPage()" :disabled="isDisabledNext"
        class="btn right" :data-state="isDisabledNext === true ? 'disabled': ''">
        <i></i>Siguiente<i></i>
      </button>
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

<style lang="scss" scoped>
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
      @include media(mobile){
        font: 0/0 a;
        text-shadow: transparent;
        color: transparent;
        text-decoration: none;
        background: transparent;
        border: 0px;
        margin: 10px;
        width: 60px;
        height: 60px;
        cursor: pointer;
        position: relative;
        transform: translate3d(0,0,0); // fixes flicker in webkit
        -webkit-filter: drop-shadow( 0 2px 0px rgba(0,0,0,0.2) );
        i {
          position: absolute;
          top: 50%;
          left: 0;
          width: 50px;
          height: 5px;
          border-radius: 5px;
          background: $background-secundary;
          transition: all 0.15s ease;
        }
        &.left {
          right: 58%;
          i {
            transform-origin: 0% 50%
          }

          @include arrowTransform( 40deg, 0, -1px );

          &:hover,
          &:focus {
            font: 0/0 a;
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
            background: transparent;
            border:none;
            @include arrowTransform( 30deg, 0, -1px );
          }

          &:active {
            font: 0/0 a;
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
            background: transparent;
            border:none;
            @include arrowTransform( 25deg, 1px, -1px );
          }

          &[data-state=disabled] {
            @include arrowTransform( 0deg, -5px, 0 );

            &:hover {
              @include arrowTransform( 0deg, -5px, 0 );
            }
          }
        }

        &.right {
          left: 58%;
          i {
            transform-origin: 100% 50%
          }

          @include arrowTransform( 40deg, 0, 1px );

          &:hover,
          &:focus {
            font: 0/0 a;
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
            background: transparent;
            border:none;
            @include arrowTransform( 30deg, 0, 1px );
          }

          &:active {
            font: 0/0 a;
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
            background: transparent;
            border:none;
            @include arrowTransform( 25deg, 1px, 1px );
          }

          &[data-state=disabled] {
            @include arrowTransform( 0deg, 5px, 0 );

            &:hover {
              @include arrowTransform( 0deg, 5px, 0 );
            }
          }
        }
      }
    }
}
.pagination__info{
  display: inline-block;
  text-align: center;
  width: 33,333%;
  span{
    vertical-align: -webkit-baseline-middle;
  }
}
</style>
