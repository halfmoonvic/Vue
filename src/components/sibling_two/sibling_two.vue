<template>
    <div id="sibling_two">
        <h2>同级组件 二</h2>
        <p>从 同级组件一 接受的 参数:</p>
        <b>{{msg}}</b>
    </div>
</template>

<script>
import bus from '../../assets/eventBus.js';
export default {
    name: 'sibling_two',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            msg: '默认值'
        };
    },
    mounted() {
        var self = this;
        bus.$on("diy", function (msg) {
            self.msg = msg
        })
    }
};
</script>

<style lang="scss" scoped>

</style>
