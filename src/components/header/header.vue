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
                    <classmap :count="seller.supports[0].type"></classmap>
                    <div class="text">{{seller.supports[0].description}}</div>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="detailShowFn(true)">
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
        <transition name="fade">
            <div v-show="detailShow" class="detail">
                <div class="detail-wrapper">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <stars :size="48" :score="seller.score"></stars>
                        <v-title title="优惠信息"></v-title>
                        <youhui :youhui="seller.supports"></youhui>
                        <v-title title="商家公告"></v-title>
                        <div class="bulletin-ct">{{seller.bulletin}}</div>
                    </div>
                    <div class="detail-close" @click="detailShowFn(false)">
                        <i class="icon-close"></i>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import icon_decrease from "../icon_decrease/icon_decrease.vue";
import classmap from "../classmap/classmap.vue";
import star from "../star/star.vue";
import stars from "../stars/stars.vue"
import title from "../title/title.vue"
import youhui from "../youhui/youhui.vue"

export default {
    name: 'header',
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            detailShow: false
        }
    },
    components: {
        icon_decrease,
        star,
        stars,
        'v-title': title,
        youhui,
        classmap
    },
    methods: {
        detailShowFn: function (flag) {
            this.detailShow = flag;
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
    .detail {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        @include cl-base(.8);
        .detail-wrapper {
            position: relative;
            width: 100%;
            min-height: 100%;
            padding: 64px 34px 0 34px;;
            box-sizing: border-box;
            .detail-main {
                padding-bottom: 60px;
                .name {
                    text-align: center;
                    font-size: $fz-md;
                    line-height: $fz-md;
                }
                .stars {
                    text-align: center;
                    margin: 16px 0 28px;
                }
                .title {
                    margin-bottom: 28px;
                }
                .bulletin-ct {
                    line-height: 2;
                }
            }
            .detail-close {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 32px;
            }
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: all .3s
}
.fade-enter, .fade-leave-active {
    transform: translate(50px, 100px);
    opacity: 0
}

</style>
