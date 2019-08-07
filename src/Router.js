import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Results from '@/Results'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'results',
            component: Results
        },
    ]
})