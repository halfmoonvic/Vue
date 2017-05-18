<template>
    <div>
        <h2>father组件</h2>
        <br>
        <sibling_one></sibling_one>
        <br><br><hr><br><br>
        <sibling_two></sibling_two>
    </div>
</template>

<script>
import sibling_one from '../sibling_one/sibling_one.vue'
import sibling_two from '../sibling_two/sibling_two.vue'

export default {
    name: 'father',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {

        };
    },
    components: {
        sibling_one,
        sibling_two
    }
};
</script>

<style lang="css" scoped>

</style>
