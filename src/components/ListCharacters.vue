<template>
  <div class="characters">
    <router-link :to="{ name: 'Detail', params: { id: character.id } }"
      v-for="character in characters" :key="character.id">
        <ItemCharacter :character="character" />
    </router-link>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ItemCharacter from '@/components/ItemCharacter.vue';

export default {
  name: 'ListCharacters',
  components: {
    ItemCharacter,
  },
  setup() {
    const store = useStore();

    const characters = computed(() => store.state.charactersFilter);

    onMounted(() => store.dispatch('getCharacters'));

    return { characters };
  },
};
</script>

 <style lang="scss">
 .characters {
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    text-align: center;
    margin: 0 auto;
    list-style: none;
    width: 90%;
     a {
         text-decoration: none;
     }
 }
 </style>
