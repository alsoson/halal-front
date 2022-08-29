import MainLayout from 'layouts/MainLayout.vue'
import HomePage from 'pages/front/HomePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
        meta: {
          title: 'Hello ! Halal ',
          login: false,
          admin: false
        }
      },
      {
        path: 'introduction',
        name: 'introduction',
        component: () => import('src/pages/front/IntroductionPage.vue'),
        meta: {
          title: 'Hello ! Halal | Introduction',
          login: false,
          admin: false
        }
      },
      {
        path: 'restaurant',
        name: 'restaurant',
        component: () => import('src/pages/front/HalalRestaurantPage.vue'),
        meta: {
          title: 'Hello ! Halal | Restaurant',
          login: false,
          admin: false
        }
      },
      {
        path: 'attraction',
        name: 'attraction',
        component: () => import('src/pages/front/HalalAttractionPage.vue'),
        meta: {
          title: 'Hello ! Halal | Attraction',
          login: false,
          admin: false
        }
      },
      {
        path: 'accommodation',
        name: 'accommodation',
        component: () => import('src/pages/front/HalalAccommodationPage.vue'),
        meta: {
          title: 'Hello ! Halal | Accommodation',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('src/pages/front/LoginPage.vue'),
        meta: {
          title: 'Hello ! Halal | Login',
          login: false,
          admin: false
        }
      },
      {
        path: 'connectus',
        name: 'connectus',
        component: () => import('src/pages/front/ConnectUs.vue'),
        meta: {
          title: 'Hello ! Halal | Connect Us',
          login: false,
          admin: false
        }
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('src/pages/front/ProductPage.vue'),
        meta: {
          title: 'Hello ! Halal | Product',
          login: false,
          admin: false
        }
      },
      {
        path: 'itinerary',
        name: 'itinerary',
        component: () => import('src/pages/front/ItineraryPage.vue'),
        meta: {
          title: 'Hello ! Halal | Itinerary',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('src/pages/front/CartPage.vue'),
        meta: {
          title: 'Hello ! Halal | Cart',
          login: true,
          admin: false
        }
      },
      {
        path: 'collection',
        name: 'collection',
        component: () => import('src/pages/front/CollectionPage.vue'),
        meta: {
          title: 'Hello ! Halal | Collection',
          login: true,
          admin: false
        }
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('src/pages/front/MemberProfilePage.vue'),
        meta: {
          title: 'Hello ! Halal | Member',
          login: true,
          admin: false
        }
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('src/pages/front/OrderHistoryPage.vue'),
        meta: {
          title: 'Hello ! Halal | History',
          login: true,
          admin: false
        }
      },
      {
        path: 'progress',
        name: 'progress',
        component: () => import('src/pages/front/OrderProgressPage.vue'),
        meta: {
          title: 'Hello ! Halal | Progress',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'Admin-Home',
        component: () => import('src/pages/admin/AdminPage.vue'),
        meta: {
          title: 'Admin',
          login: true,
          admin: true
        }
      },
      {
        path: 'itinerary',
        name: 'Admin-itinerary',
        component: () => import('src/pages/admin/ItineraryManagementPage.vue'),
        meta: {
          title: 'Admin | Itinerary',
          login: true,
          admin: true
        }
      },
      {
        path: 'order',
        name: 'Admin-order',
        component: () => import('src/pages/admin/OrderManagementPage.vue'),
        meta: {
          title: 'Admin | Order',
          login: true,
          admin: true
        }
      },
      {
        path: 'member',
        name: 'Admin-member',
        component: () => import('src/pages/admin/MemberManagementPage.vue'),
        meta: {
          title: 'Admin | Member',
          login: true,
          admin: true
        }
      },
      {
        path: 'message',
        name: 'Admin-message',
        component: () => import('src/pages/admin/MessagePage.vue'),
        meta: {
          title: 'Admin | Message',
          login: true,
          admin: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/front/ErrorNotFound.vue'),
    meta: {
      title: 'Hello ! Halal | 404',
      login: false,
      admin: false
    }
  }
]

export default routes
