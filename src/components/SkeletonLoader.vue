<template>
  <transition name="skeleton-loader" mode="out-in">
    <div class="items-character" >
      <div class="character" v-for="i in 10" :key="i">
        <img>
        <div class="character__info">
          <h3 class="character__name"></h3>
          <div class="status">
          </div>
          <div class="origin">
          </div>
          <div class="location">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  setup() {
  },
};
</script>

<style lang="scss" scoped>
.items-character{
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  text-align: center;
  margin: 0 auto;
  list-style: none;
  width: 90%;
  .character {
    background-color: $background-primary;
    flex-grow: 1;
    border-radius: 15px 15px;
    margin: 20px;
    img{
      height: 300px;
      width: 300px;
      border-radius: 15px 15px 0px 0px;
      animation: pulse-bg 1s infinite;
    }
    &__info{
      padding: 1.5rem;
      .status{
        width: 252px;
        height: 22px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        animation: pulse-bg 1s infinite;
      }
      .origin {
          width: 252px;
          height: 22px;
          border-radius: 5px;
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.5rem;

        }
        .location {
          width: 252px;
          height: 22px;
          border-radius: 5px;
          display: flex;
          align-items: flex-start;
          margin-top: 0.5rem;
          animation: pulse-bg 1s infinite;
        }
    }
    &__name{
      border-radius: 5px;
      width: 252px;
      height: 26px;
      animation: pulse-bg 1s infinite;
    }
  }
}

.skeleton-loader-enter-active,
.skeleton-loader-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.skeleton-loader-enter,
.skeleton-loader-leave-to {
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
}

@keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
</style>
