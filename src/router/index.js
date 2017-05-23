import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import parents from '@/components/parents_component/parents_component'
import father from '@/components/father/father.vue'

Vue.use(Router);

const routes = [{
        path: '/goods',
        name: 'goods',
        components: {
            test: goods
        }
    },
    {
        path: '/ratings',
        name: 'ratings',
        components: {
            test: ratings
        }
    },
    {
        path: '/seller',
        name: 'seller',
        components: {
            test: seller
        }
    },
    {
        path: '/parents',
        name: 'parents',
        components: {
            test: parents
        }
    },
    {
        path: '/father',
        name: 'father',
        components: {
            test: father
        }
    }
];

// export default new Router({
//     routes
    // routes: [{
    //     path: '/',
    //     name: 'Hello',
    //     component: Hello
    // }]
// });

const router = new Router({
    routes,
    linkActiveClass: 'active'
});

router.push('goods');

export default router;
