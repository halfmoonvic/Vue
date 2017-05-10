<template>
    <div class="icon" :class="classMap[specialmap]"></div>
</template>

<script>
export default {
    name: 'icon_decrease',
    data () {
        return {

        };
    },
    props: {
        specialmap: {
            type: Number
        }
    },
    computed: {
        classMap: function () {
            return  ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../../../common/all';
    .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease {
            @include bg-image('decrease_1')
        }
        &.discount {
            @include bg-image('discount_1')
        }
        &.guarantee {
            @include bg-image('guarantee_1')
        }
        &.invoice {
            @include bg-image('invoice_1')
        }
        &.special {
            @include bg-image('special_1')
        }
    }
</style>
