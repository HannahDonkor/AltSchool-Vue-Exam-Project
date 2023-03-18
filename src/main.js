import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Repos from './components/Repos.vue'
import Single_repo from './components/Single_repo.vue'
import Not_Found from './components/Not_Found.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home, 
        },

        {
            path: '/Repos',
            name: "Repos",
            component: Repos, 
        },

        {
            path: '/Repos/:repoName',
            name: "Single_repo",
            component: Single_repo, 
            props: true
        },

    
            { 
            path: '/:pathMatch(.*)*',
            name: 'Not_Found',
            component: Not_Found 
            }

    ],
});

createApp(App)
.use(router)
.mount('#app')
