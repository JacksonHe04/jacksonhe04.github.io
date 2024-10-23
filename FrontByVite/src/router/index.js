// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Projects from '@/views/Projects/index.vue'
import Timeline from '@/views/Timeline/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home,
                    meta: { title: '首页' }
                },
                {
                    path: 'Projects',
                    component: Projects,
                    meta: { title: '我的项目' }
                },
                {
                    path: 'timeline',
                    component: Timeline,
                    meta: { title: '时间线' }
                },
                {
                    path: 'about',
                    component: About,
                    meta: { title: '关于我' }
                }
            ]
        },

    ],
    // 路由滚动行为定制
    scrollBehavior () {
        return {
            top: 0
        }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Jackson的主页';
    next();
});

export default router
