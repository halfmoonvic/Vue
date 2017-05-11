<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <!-- <div class="icon" :class="classMap[seller.supports[0].type]"></div> -->
                    <icon_decrease :specialmap="seller.supports[0].type"></icon_decrease>
                    <div class="text">{{seller.supports[0].description}}</div>
                </div>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script>
import icon_decrease from "../icon_decrease/icon_decrease.vue";

export default {
  name: 'header',
  props: {
    seller: {
        type: Object
    }
  },
  components: {
    icon_decrease
  },
  created() {
    // this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  computed: {
      classMap: function () {
          return  ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
  }
};
</script>

<style lang="scss" scoped>
@import '../../common/all';

.header {
    color: #fff;
    background: #000;
    .content-wrapper {
        padding: 24px 12px 18px 24px;
        @include flex(flex-start, flex-start);
        .avatar {
            img {
                border-radius: 2px;
            }
        }
        .content {
            margin-left: 16px;
            .title {
                margin: 2px 0 8px 0;
                @include flex(flex-star);
                .brand {
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    margin-right: 6px;
                    @include bg-image('brand');
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                }
                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }
            }
            .description {
                margin-bottom: 10px;
                line-height: $fz-xs;
                font-size: $fz-xs;
            }
            .support {
                @include flex(flex-start, flex-start);
                .text {
                    line-height: 12px;
                    font-size: 12px;
                }
            }
        }
    }
}

</style>
