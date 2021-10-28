<template>
  <section>
    <div class="characters">
      <router-link :to="{ name: 'Detail', params: { id: character.id } }"
        v-for="character in characters" :key="character.id" class="characters__item">
        <ItemCharacter :character="character" />
      </router-link>
    </div>
  </section>
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
     list-style: none;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 3rem;
     margin: 3rem 0;
     a {
         text-decoration: none;
     }
 }
 </style>
