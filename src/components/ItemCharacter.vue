<template>
    <div class="character" v-if="character">
        <img :src="character.image" :alt="character.name">
        <div class="character__info">
            <h3 class="character__name">{{ character.name }}</h3>
            <div class="status">
                <span
                :class="character.status === 'Alive' ? 'alive':
                        character.status === 'Dead' ? 'dead': 'default'">
                </span>
                <span>{{ character.status }} - {{ character.species }}</span>
            </div>
            <div class="origin">
                <span>
                    Origin: {{ character.origin.name }}
                </span>
            </div>
            <div class="location">
                Location: {{ character.location.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ItemCharacter',
  props: ['character'],
};
</script>

<style lang="scss">
.character {
    flex-grow: 1;
    background-color: $background-tertiary;
    border-radius: 15px 15px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    margin: 20px;
    img{
      border-radius: 15px 15px 0px 0px;
    }
    &:hover{
        transform: scale(1.05);
        background-color: $background-secundary;
        .character__info{
            .status {
                span{
                    color: $text-primary;
                }
            }
            .origin {
                color: $text-primary;
            }
            .location {
                color: $text-primary;
            }
        }
        h3{
          @include animated-title($text-primary, #02b1c8);
        }

    }
    &__info{
        padding: 1.5rem;
        font-weight: bold;
        .status{
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.5rem;
            span {
                color: $text-secundary;
                &:first-child {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-top: 6px;
                    margin-right: 12px;
                }
            }
            .alive {
                @include led-blink;
                @include animation-blink(alive,rgb(8, 194, 54),rgb(6, 116, 42),
                  rgba(0, 255, 0, 0.589),rgb(111, 241, 132));
                &:before {
                  @include led-wrap;
                 }
            }
            .dead {
                @include led-blink;
                @include animation-blink(dead, #F00, #A00,
                  rgba(255, 0, 0, 0.5), rgb(231, 108, 108));
                &:before {
                  @include led-wrap;
                }

            }
            .default {
               @include led-blink;
               @include animation-blink(unknown, rgb(62, 81, 253), rgb(7, 10, 155),
                  rgba(41, 2, 148, 0.5), rgb(131, 143, 253));
                &:before {
                  @include led-wrap;
                }
            }
        }
        .origin {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.5rem;
            color: $text-secundary;
        }
        .location {
            display: flex;
            align-items: flex-start;
            margin-top: 0.5rem;
            color: $text-tertiary;
        }
    }
    h3{
        margin-bottom: 0.5rem;
    }
    &__name{
        display: flex;
        justify-content: center;
        @include animated-title(#02b1c8, $text-quaternary);
    }
}
</style>
