<template>
    <div id="app">
        <v-header></v-header>
        <div class="tab bd-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    export default {
        components: {
            'v-header': header
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">


.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include bd-1px($cl-base);
    .tab-item {
        flex: 1;
        text-align: center;
        > a {
            display: block;
            font-size: $fz-sm;
            color: $cl-word;
            &.active {
                color: rgb(240, 20, 20);
            }
        }
    }
}
</style>
