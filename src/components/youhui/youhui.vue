<template>
    <ul class="youhui">
        <li class="youhui-item" v-for="(item, index) in youhui">
            <classmap :count="item.type" class="pic"></classmap>
            <span class="des">{{item.description}}</span>
        </li>
    </ul>
</template>

<script>
import classmap from '../classmap/classmap.vue';

export default {
    name: 'youhui',
    props: {
        youhui: {
            type: Array
        }
    },
    data() {
        return {

        };
    },
    components: {
        classmap
    }
};
</script>

<style lang="scss" scoped>
@import '../../common/all';

.youhui {
    padding-left: 12px;
    .youhui-item {
        margin-bottom: 12px;
        .pic {
            margin-right: 6px;
        }
        .des {
            font-size: $fz-xs;
            line-height: $fz-xs;
            color: #fff;
        }
    }
}

</style>
