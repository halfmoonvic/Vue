<template>
    <div id="sibling_one">
        <h2>同级组件一</h2>
        <button @click="sendMsg">向组件 二 传值</button>
    </div>
</template>

<script>
import bus from '../../assets/eventBus.js';

export default {
    name: 'sibling_one',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {

        };
    },
    methods: {
        sendMsg: function () {
            bus.$emit("diy", "this message is from 同级组件 一")
        }
    }
};
</script>

<style lang="css" scoped>

</style>
