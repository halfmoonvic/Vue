<template>
    <div class="title">
        <div class="line bd-1px"></div>
        <div class="text">{{title}}</div>
        <div class="line bd-1px"></div>
    </div>
</template>

<script>
export default {
    name: 'title',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>
@import '../../common/all';

.title {
    @include flex(space-between, center);
    .line {
        flex: 1 1 auto;
        height: 1px;
        background: rgba(255, 255, 255, .2);
    }
    .text {
        margin: 0 12px;
    }
}
</style>
