import Home from '@/pages/Home.vue'
import State from '@/pages/StateDiff.vue'
import Subscribe from '@/pages/Subscribe.vue'
import Local1 from '@/pages/Local1.vue'
import Local2 from '@/pages/Local2.vue'
import List from '@/pages/List.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/state', component: State },
  { path: '/subscribe', component: Subscribe },
  { path: '/local1', component: Local1 },
  { path: '/local2', component: Local2 },
  { path: '/list', component: List }
]
