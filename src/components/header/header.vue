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
            <div v-if="seller.supports" class="support-count">
                <div class="count">{{seller.supports.length}}个</div>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar">
        </div>
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
    position: relative;
    color: #fff;
    background: $cl-base;
    .content-wrapper {
        position: relative;
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
        .support-count {
            position: absolute;
            right: 12px;
            bottom: 18px;
            @include flex();
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            border-radius: 14px;
            background: rgba(0, 0, 0, .2);
            text-align: center;
            .count {
                font-size: $fz-ss;
            }
        }
    }
    .bulletin-wrapper {
        @include flex(space-between);
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        background: $cl-base;
        .bulletin-title {
            flex: 0 0 22px;
            width: 22px;
            height: 12px;
            @include bg-image("bulletin");
            background-size: 22px 12px;
            background-repeat: no-repeat;
        }
        .bulletin-text {
            flex: 1 1 auto;
            margin: 0 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: $fz-ss;
        }
        .icon-keyboard_arrow_right {
            flex: 0 0 10px;
            width: 10px;
        }
    }
    .background {
        position: absolute;
        top: 0;
        z-index: -1;
        filter: blur(10px);
        width: 100%;
        height: 100%;
        > img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>
