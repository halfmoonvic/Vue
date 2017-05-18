<template>
    <div class="parents">
        <input type="" v-model="parents_msg" name="">
        <div>看看你都输入了啥</div>
        <p>{{parents_msg}}</p>
        <br><br><hr><br>

        <broter_two :bt_msg="parents_msg"></broter_two>

        <br><br><hr><br>

        <broter_one v-on:diy="changeMsg"></broter_one>
    </div>
</template>

<script>
import broter_two from '../brother_two/brother_two.vue';
import broter_one from '../brother_one/brother_one.vue'

export default {
    name: 'parents_component',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            parents_msg: '父元素的消息'
        };
    },
    components: {
        broter_two,
        broter_one
    },
    methods: {
        changeMsg: function (data) {
            console.log(data);
            this.parents_msg = data;
        }
    }
};
</script>

<style lang="css" scoped>

</style>
