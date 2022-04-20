import {createRouter, createWebHistory} from 'vue-router'
import MyPortfolio from '../views/MyPortfolio.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import InforStudent from '../views/InforStudent.vue'
const history=createWebHistory();

const routes=[
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/my-portfolio',
        name:'MyPortfolio',
        component: MyPortfolio
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/information/:studentId',
        name: 'inforStudent',
        component: InforStudent
    }

]


const router = createRouter( { history,routes } )

export default router