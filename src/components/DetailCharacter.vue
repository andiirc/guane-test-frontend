<template>
  <div v-if="character">
    <div  class="character__card">
      <div class="character__card__image">
        <img :src="character.image" :alt="character.name" >
      </div>
      <div class="character__card__inline">
        <div class="character__card__inline__status">
          <div class="led active"
            :class="character.status === 'Alive' ? 'alive':
                    character.status === 'Dead' ? 'dead': 'default'">
            <span class="hilight"
                  :class="character.status === 'Alive' ? 'alive':
                          character.status === 'Dead' ? 'dead': 'default'">
            </span>
          </div>
        </div>
      <div class="character__card__inline__name">
        {{ character.name }}
      </div>
      </div>
      <div class="character__card__textcenter">
          Species: {{ character.species }}
      </div>
      <div class="character__card__textcenter">
          Location:  {{ character.location.name }}
      </div>
    </div>
    <div class="character__card__information">
      <div class="character__card__information__data">
        <div v-if="character.gender === 'Female'" class="character__card__information__data__item">
            <img src="../assets/images/female.svg" alt="female" >
            <span> {{ character.gender}} </span>
        </div>
        <div v-else-if="character.gender === 'Male'"
          class="character__card__information__data__item">
          <img src="../assets/images/male.svg" alt="male" >
            <span> {{ character.gender}} </span>
        </div>
        <div v-else class="character__card__information__data__item">
            <img src="../assets/images/unknown.svg" alt="unknown">
            <span> {{ character.gender}} </span>
        </div>
      </div>
      <div class="character__card__information__data">
        <div v-if="character.episode.length > 1" class="character__card__information__data__item">
            <p>{{ character.episode.length }}</p>
            <span>Episodes</span>
        </div>
        <div v-else class="character__card__information__data__item">
            <p>{{ character.episode.length }}</p>
            <span>Episode</span>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import router from '@/router/index';

export default {
  name: 'DetailCharacter',
  setup() {
    const store = useStore();
    const route = useRoute();

    const character = computed(() => store.getters.findById(route.params.id));

    onMounted(() => {
      if (character.value === undefined) router.push({ name: 'PageNotFound' });
    });

    return { character };
  },
};
</script>

<style lang="scss" scoped>

.character__card{
  border-radius: 15px 15px 0px 0px;
  text-align: center;
  margin: 100px auto 0px;
  @include card-wrap(300px, $background-tertiary);
  &__image {
    display: block;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    transform: translateY(-40%);
    box-shadow: 0px 5px 50px 0px rgb(43, 227, 252), 0px 0px 0px 7px rgb(3, 152, 172);
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  &__inline{
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    &__status{
      margin:0 auto;
      width: 10%;
      display: inline-block;
      .led {
        border-radius: 50%;
        background-color: #220000;
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;
        margin: 13px auto;
      }
      .led.active.alive {
        @include led-color(#4daa00, rgba(30, 255, 0, 0.4), rgb(0, 120, 20));
        .hilight {
          @include let-wrap-hilight(rgba(0, 180, 30, 0.6));
        }
      }
      .led.active.alive .hilight {
        @include led-hilight(rgb(21, 255, 0));
      }
      .led.active.dead {
        @include led-color(#AA0000, rgba(255, 0, 0, 0.4), rgba(120, 0, 0, 1));
        .hilight {
          @include let-wrap-hilight(rgba(180, 0, 0, 0.6));
        }
      }
      .led.active.dead .hilight {
        @include led-hilight(rgba(255, 0, 0, 1));
      }
      .led.active.default {
        @include led-color(#006caa, rgba(0, 47, 255, 0.4), rgb(0, 12, 120));
        .hilight {
          @include let-wrap-hilight(rgba(0, 3, 180, 0.6));
        }
      }
      .led.active.default .hilight {
        @include led-hilight(rgb(47, 0, 255));
      }
    }
    &__name{
      color: #02b1c8;
      display: inline-block;
      font-size: 24px;
      font-family: 'Schoolbell', serif;
      margin: 0 auto;
      padding: 11px;
      text-align: left;
      vertical-align: top;
    }
  }
  &__textcenter {
    color: $text-quaternary;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }
}

.character__card__information{
  border-radius: 0px 0px 15px 15px;
  margin: 0px auto 20px;
  @include card-wrap(100px, $text-quaternary);
  &__data{
    color:$text-primary;
    display: inline-block;
    width: 50%;
    text-align: center;
    &__item{
      width: 80%;
      margin: 0 auto;
      text-align: center;
      img{
        margin: 10px auto;
        text-align: center;
        width: 60px;
        display: block;
      }
      span{
        display: block;
        font-weight: bold;
        font-size: 25px;
        margin: 10px 10px;
      }
      p{
        margin: 10px auto;
        text-align: center;
        font-size: 45px;
        width: 60px;
        display: block;
      }
    }
  }
}
</style>
