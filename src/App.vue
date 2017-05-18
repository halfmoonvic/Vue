<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
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
            <div class="tab-item">
                <router-link to="/parents">父组件</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/father">同级组件传值</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    import axios from 'axios';
    const ERR_OK = 0;

    export default {
        data() {
            return {
                seller: {}
            }
        },
        created() {
            // this.$http.get('/api/seller').then((res) => {
            //         res = res.body;
            //         if (res.errno === ERR_OK) {
            //             this.seller = res.data;
            //             console.log(this.seller);
            //         }
            //     })
            axios.get('/api/seller')
                .then(res => {
                    // res = res.data;
                    if (res.data.errno === ERR_OK) {
                        this.seller = res.data.data;
                    }
                })
        },
        components: {
            'v-header': header
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
@import './common/cs.sass';

.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include bd-1px($cl-base);
    .tab-item {
        flex: 1 1 auto;
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
