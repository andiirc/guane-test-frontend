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
    // box-shadow: 0 0 10px 10px $background-body;
    background-color: $background-tertiary;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;
    &:hover{
        transform: scale(1.05);
        background-color: $background-secundary;
        .character__info{
            .status {
                font-weight: bold;
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
            font-family: 'Schoolbell', serif;
            font-size: 30px;
            color: $text-primary;
            text-shadow: 0.02em 0.02em 0.02em #02b1c8,
                 -0.02em -0.02em 0.02em #02b1c8,
                 0 0 0.2em #02b1c8;
            animation: textShadow 2s linear infinite alternate;
        }

    }
    &__info{
        padding: 1.5rem;
        .status{
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            span {
                color: $text-secundary;
                &:first-child {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
            }
            .alive {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: forestgreen;
                display: inline-block;
                position: relative;
                box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2) inset,
                0 2px 0px rgba(255, 255, 255, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.3);
                -webkit-animation: blinkgreen 0.5s infinite;
                -moz-animation: blinkgreen 0.5s infinite;
                -ms-animation: blinkgreen 0.5s infinite;
                -o-animation: blinkgreen 0.5s infinite;
                animation: blinkgreen 0.5s infinite;
                &:before {
                    position: absolute;
                    content: '';
                    top: 2px;
                    left: 3px;
                    width: 3px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                 }
            }
            .dead {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #F00;
                display: inline-block;
                position: relative;
                box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2) inset,
                0 2px 0px rgba(255, 255, 255, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.3);
                -webkit-animation: blinkred 0.5s infinite;
                -moz-animation: blinkred 0.5s infinite;
                -ms-animation: blinkred 0.5s infinite;
                -o-animation: blinkred 0.5s infinite;
                animation: blinkred 0.5s infinite;
                &:before {
                    position: absolute;
                    content: '';
                    top: 2px;
                    left: 3px;
                    width: 3px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                }

            }
            .default {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #24E0FF;
                display: inline-block;
                position: relative;
                box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2) inset,
                0 2px 0px rgba(255, 255, 255, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.3);
                -webkit-animation: blinkblue 0.5s infinite;
                -moz-animation: blinkblue 0.5s infinite;
                -ms-animation: blinkblue 0.5s infinite;
                -o-animation: blinkblue 0.5s infinite;
                animation: blinkblue 0.5s infinite;
                &:before {
                    position: absolute;
                    content: '';
                    top: 2px;
                    left: 3px;
                    width: 3px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                }
            }
        }
        .origin {
            margin-bottom: 0.8rem;
            color: $text-secundary;
        }
        .location {
            margin-top: 0.5rem;
            color: $text-tertiary;
        }
    }
    h3{
        margin-bottom: 0.5rem;
    }
    &__name{
        font-family: 'Schoolbell', serif;
        font-size: 30px;
        color: #02b1c8;
        text-shadow: 0.02em 0.02em 0.02em $text-quaternary,
                 -0.02em -0.02em 0.02em $text-quaternary,
                 0 0 0.2em $text-quaternary;
        animation: textShadow 2s linear infinite alternate;
    }

@-webkit-keyframes blinkblue {
    from { background-color: rgb(62, 81, 253); }
    50% {
          background-color: rgb(7, 10, 155);
          box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px,
          inset #441313 0 -1px 9px, rgba(41, 2, 148, 0.5) 0 2px 0;
        }
    to { background-color: rgb(131, 143, 253); }
}

@-webkit-keyframes blinkred {
    from { background-color: #F00; }
    50% {
          background-color: #A00;
          box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px,
          inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;
        }
    to { background-color: rgb(231, 108, 108); }
}

@-webkit-keyframes blinkgreen {
    from { background-color: rgb(8, 194, 54); }
    50% {
          background-color: rgb(6, 116, 42);
          box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px,
          inset #441313 0 -1px 9px, rgba(0, 255, 0, 0.589) 0 2px 0;
        }
    to { background-color: rgb(111, 241, 132); }
}

}
</style>
