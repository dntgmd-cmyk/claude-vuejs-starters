import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MarketingLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('@/views/HomeView.vue') },
        { path: 'features', name: 'features', component: () => import('@/views/FeaturesView.vue') },
        { path: 'pricing', name: 'pricing', component: () => import('@/views/PricingView.vue') },
        { path: 'about', name: 'about', component: () => import('@/views/AboutView.vue') },
        { path: 'examples', name: 'examples', component: () => import('@/views/ExamplesView.vue') },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        { path: '', name: 'dashboard', component: () => import('@/views/dashboard/DashboardView.vue') },
        { path: 'analytics', name: 'analytics', component: () => import('@/views/dashboard/AnalyticsView.vue') },
        { path: 'users', name: 'users', component: () => import('@/views/dashboard/UsersView.vue') },
        { path: 'reports', name: 'reports', component: () => import('@/views/dashboard/ReportsView.vue') },
        { path: 'notifications', name: 'notifications', component: () => import('@/views/dashboard/NotificationsView.vue') },
        { path: 'settings', name: 'settings', component: () => import('@/views/dashboard/SettingsView.vue') },
        { path: 'help', name: 'help', component: () => import('@/views/dashboard/HelpView.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
