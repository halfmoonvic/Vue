<template>
    <div class="stars" :class="starType">
        <span v-for="item in scores" class="star-item" :class="item"></span>
    </div>
</template>

<script>
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
const LENGTH = 5;

export default {
    name: 'stars',
    data() {
        return {

        };
    },
    props: {
        score: {
            type: Number
        },
        size: {
            type: Number
        }
    },
    created() {
        // console.log(this.scores);
    },
    computed: {
        starType: function () {
            return 'star-' + this.size;
        },
        scores: function () {
            let result = [];
            let on = Math.floor(this.score);
            let half_ = this.score - on;
            let half = 0;
            let off = 0;
            half_ >= 0.5 ? half = 1 : off = 1;
            for (var i = 0; i < on; i++) {
                result.push(CLS_ON);
            }
            if (half) {result.push(CLS_HALF)}
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            return result;
        }
    }

};
</script>

<style lang="scss" scoped>
@import '../../common/all';

.stars {
    font-size: 0;
    .star-item {
        display: inline-block;
        background-repeat: no-repeat;
    }
    &.star-48{
        .star-item {
            width: 20px;
            height: 20px;
            margin-right: 6px;
            background-size: 15px 15px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-image('star36_on');
            }
            &.half {
                @include bg-image('star36_half');
            }
            &.off {
                @include bg-image('star36_off');
            }
        }
    }
    &.star-36{
        .star-item {
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-image('star24_on');
            }
            &.half {
                @include bg-image('star24_half');
            }
            &.off {
                @include bg-image('star24_off');
            }
        }
    }
    &.star-24{
        .star-item {
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                @include bg-image('star24_on');
            }
            &.half {
                @include bg-image('star24_half');
            }
            &.off {
                @include bg-image('star24_off');
            }
        }
    }
}
</style>
