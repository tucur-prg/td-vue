import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { createWebHistory, createRouter } from 'vue-router'
import { routes}  from '@/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log("beforeEach:", to.path, from.path)

  next()
})
