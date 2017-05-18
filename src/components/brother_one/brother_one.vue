<template>
    <div id="firstChild">
        <h2>brother_one组件, 子 → 父 传值</h2>
        <br>
        <input type="" v-model="bo_msg" name="" v-on:keyup.enter="sendMsg">
        <p>{{bo_msg}}</p>
        <button @click="sendMsg()">发送</button>
    </div>
</template>

<script>
import bus from '../../assets/eventBus.js'
export default {
    name: 'brother_one',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            bo_msg: '组件一 的消息'
        };
    },
    methods: {
        sendMsg: function () {
            // this.bo_msg = '更改 组件 1 的 消息';
            this.$emit('diy', this.bo_msg);
        }
    }
};
</script>

<style lang="css" scoped>

</style>
