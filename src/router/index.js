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
        component: goods
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: ratings
    },
    {
        path: '/seller',
        name: 'seller',
        component: seller
    },
    {
        path: '/parents',
        name: 'parents',
        component: parents
    },
    {
        path: '/father',
        name: 'father',
        component: father,
        meta: {
          keepAlive: true
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
