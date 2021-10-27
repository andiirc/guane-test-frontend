<template>
  <div class="message">
    <div class="message__img">
      <span>44</span>
    </div>
    <p>La página que está intentando buscar<br> no se encuentra en este universo.</p>
  </div>
</template>

<style lang="scss" >
.message{
  display: block;
  width: 100%;
  &__img{
    display: block;
    margin: 0 auto;
    transform: translateY(2%);
    width: fit-content;
    text-align: center;
    span {
      display: block;
      margin: 0 auto;
      color: $text-primary;
      font-weight: 600;
      font-size: 18em;
      display: block;
      overflow: hidden;
      width: fit-content;
      height: max-content;
      &:first-letter{
        letter-spacing: 21vmax;
      }
      &:before{
        content:'';
        background-image: url('~@/assets/images/ram.png');
        position: absolute;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        animation: rotateIn 0.5s ease-out;
      }
    }
  }
  p{
    text-align: center;
    font-weight: 400;
    color: $text-tertiary;
  }
}

@keyframes rotateIn {
  from {
    transform: rotate( 0deg ) scale(0.2);
    opacity: 0;
  }
  to {
    transform: rotate( 360deg ) scale(1);
    opacity: 1;
  }
}

</style>
