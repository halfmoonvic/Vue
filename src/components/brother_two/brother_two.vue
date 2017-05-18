<template>
    <div class="bt">
        <h3>brother_two组件, 父 → 子 传值</h3>
        <br>
        <div>看看 parents_component 组件都是传了什么值</div>
        <div>{{bt_msg}}</div>
        <br>
        更改一下啊
        <input type="" v-model="bt_msg" name="">
    </div>
</template>

<script>
export default {
    name: 'brother_two',
    props: {
        bt_msg: {
            type: String
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="css" scoped>

</style>
