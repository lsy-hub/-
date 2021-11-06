<template>
    <el-container style="height:100vh">
        <el-header style="background-color:rgb(67,74,80);line-height:60px;color:#fff;">
            <el-row :gutter="20">
                <el-col :span="16">
                    <i class="el-icon-orange logo"></i>epic后台管理系统
                </el-col>
                <el-col :span="8" style="text-align:right">
                    {{userInfo.username}}<el-button type='text' @click="logout">退出</el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:100%"
                    router>
                    <template v-for="item in menu">
                        <el-submenu :index="item.path" v-if="item.children" :key="item.path">
                            <template #title><i :class="item.icon"></i>{{item.text}}</template>
                            <el-menu-item :index="'/manage'+item.path+it.path" v-for="it in item.children"
                                :key="it.path">
                                {{it.text}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item :index="'/manage'+item.path" v-else :key="item.path">
                            <i :class="item.icon"></i>{{item.text}}</el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'Manage',
        data() {
            return {
                menu: [{
                        path: '/home',
                        text: '首页',
                        icon: 'el-icon-s-home'
                    },
                    {
                        path: '/goods',
                        text: '游戏管理',
                        icon: 'el-icon-s-order',
                        children: [{
                            path: '/list',
                            text: '游戏列表'
                        }, {
                            path: '/add',
                            text: '添加游戏'
                        }]
                    },
                    {
                        path: '/news',
                        text: '新闻管理',
                        icon: 'el-icon-news',
                        children: [{
                            path: '/list',
                            text: '新闻列表'
                        }, {
                            path: '/add',
                            text: '添加新闻'
                        }]
                    },
                    {
                        path: '/user',
                        text: '用户管理',
                        icon: 'el-icon-user',
                        children: [{
                            path: '/list',
                            text: '用户列表'
                        }, {
                            path: '/add',
                            text: '添加用户'
                        }]
                    },
                ]
            }
        },
        computed: {
            ...mapState('user', ['userInfo']),
        },
        methods: {
            ...mapMutations('user', {
                logout(commit) {
                    commit('logout')
                    this.$router.push('login')
                }
            })
        }
    }
</script>
<style scoped>
    .logo {
        font-size: 36px;
        vertical-align: middle;
        color: #f90;
    }
</style>