<script>
import { RouterLink, RouterView } from 'vue-router' 
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app';
export default {
  components: {
    Navbar,
    Sidebar,

  },
  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<template>
  <!-- <AddVehicle/> -->
  <!-- <AddRequest/> -->
  <!-- <TableVehicle/> -->
  <Navbar v-if="isLogin === true" />
  <Sidebar v-if="isLogin === true" />
  <!-- <Login/>
    <Register/> -->


  <RouterView />
</template>
