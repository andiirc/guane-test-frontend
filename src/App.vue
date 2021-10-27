<template>
  <div class="nav">
    <div class="nav__item">
      <h1 class="title__heading">Rick<span> And</span> Morty</h1>
    </div>
    <div class="nav__item" >
      <router-link to="/" class="link__item">Home</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-color: $background-primary;
  color: $text-secundary;
  font-family: 'Patrick Hand', Tahoma, Geneva, Verdana, sans-serif;
}

.nav{
  background-color: $background-tertiary;
  width: 100%;
  border-bottom: 5px solid $background-secundary;
  .nav__item{
    widows: 100;
    text-align: center;
    .title__heading {
      margin: 0;
      padding: 0;
      height: 65px;
      font-family: 'Schoolbell', serif;
      font-size: 40px;
      color: #02b1c8;
      text-shadow: 0.02em 0.02em 0.02em $text-quaternary,
                 -0.02em -0.02em 0.02em $text-quaternary,
                 0 0 0.2em $text-quaternary;
      animation: textShadow 2s linear infinite alternate;
      span {
        font-size: 50px;
        margin: 0 -12px;
        vertical-align: middle;
      }
    }
    .link__item{
      color: $text-secundary;
      font-size: 20px;
      text-align: center;
      text-decoration: none;
      -webkit-appearance: button;
      -moz-appearance: button;
      appearance: bottom;
      margin: 20px 20px;
      &.router-link-exact-active {
        border-bottom: 3px solid $background-secundary;
      }
    }
  }
}
</style>
