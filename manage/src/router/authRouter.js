import Manage from '../views/Manage.vue'
import GoodsList from '@/views/goods/List.vue'
import AddGoods from '@/views/goods/Add.vue'
import userList from '@/views/user/List.vue'
import Adduser from '@/views/user/Add.vue'
import newsList from '../views/news/List.vue'
import Addnews from '@/views/news/Add.vue'
import Home from '@/views/Home.vue'

export default {
    path: '/manage',
    component: Manage,
    children: [{
            path: '',
            redirect: {
                name: 'Home'
            }
        }, {
            path: 'home',
            name: 'Home',
            component: Home
        },
        {
            path: 'goods',
            redirect: {
                name: 'GoodsList'
            }
        },
        {
            path: 'goods/list',
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: 'goods/add',
            name: 'AddGoods',
            component: AddGoods
        },

        {
            path: 'news',
            redirect: {
                name: 'newsList'
            }
        }, {
            path: 'news/list',
            name: 'newsList',
            component: newsList
        }, {
            path: 'news/add',
            name: 'Addnews',
            component: Addnews
        },


        {
            path: 'user',
            redirect: {
                name: 'userList'
            }
        }, {
            path: 'user/list',
            name: 'userList',
            component: userList
        }, {
            path: 'user/add',
            name: 'Adduser',
            component: Adduser
        },
    ]
}