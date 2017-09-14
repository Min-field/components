import flipper from './components/flipper/flipper.vue'

const routes = [
    {
        path: '/',
        redirect: '/component/flipper'
    },
    {
        path: '/component/flipper',
        component: flipper
    }
]

export default routes