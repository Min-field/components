import flipper from './components/flipper/flipper.vue'
import center from './components/center/center.vue'
import carousel from './components/carousel/carousel.vue'

const routes = [
    {
        path: '/',
        redirect: '/component/flipper'
    },
    {
        path: '/component/flipper',
        component: flipper
    },
    {
        path: '/component/center',
        component: center
    },
    {
        path: '/component/carousel',
        component: carousel
    }
]

export default routes