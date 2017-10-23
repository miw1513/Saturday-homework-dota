import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
<<<<<<< HEAD
import Rittiphon from '@/components/Rittiphon'
=======
>>>>>>> 7721e905983c82e1439a81b67d6c891371c1428e

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nati',
      name: 'Nati',
      component: Nati
<<<<<<< HEAD
    },
    {
      path: '/rittiphon',
      name: 'Rittiphon',
      component: Rittiphon
=======
>>>>>>> 7721e905983c82e1439a81b67d6c891371c1428e
    }
  ]
})
