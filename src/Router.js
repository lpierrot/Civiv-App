 import Vue from 'vue' 
 import Router from 'vue-router' 
 import Home from '@/components/Home.vue' 
 import About from '@/components/About.vue'
 import Results from '@/components/Results.vue'
 
 

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/results',
            name: 'results',
            component: Results
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
})