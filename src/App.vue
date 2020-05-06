<template>
  <v-app>
<!-- Drawer - start -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list rounder>
        <v-list-item
          color="deep-purple accent-4"
          v-for="link of links"
          :key="link.item"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon> {{link.icon}} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text='link.title'></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- app-bar start -->
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark height="80px">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        >
        </v-app-bar-nav-icon>

        <router-link
          to="/"
          tag="span"
          class="pointer"
        >Ad application</router-link>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn
            class="ma-2 pa-5"
            outlined
            v-for="link in links"
            :key="link.btn"
            :to="link.url"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
        </div>
      </v-app-bar>
    </div>
<!-- content start -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          title: 'Login',
          icon: 'mdi-lock',
          url: '/login'
        },
        {
          title: 'Registration',
          icon: 'mdi-account-multiple-plus-outline',
          url: '/registration'
        },
        {
          title: 'Orders',
          icon: 'mdi-bookmark-outline',
          url: '/orders'
        },
        {
          title: 'New ad',
          icon: 'mdi-plus-circle-outline',
          url: '/new'
        },
        {
          title: 'My ads',
          icon: 'mdi-format-list-bulleted-square',
          url: '/list'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
    font-size: 25px;
    line-height: 1;
      &:hover {
        color: rgb(44, 33, 54);
        text-decoration: underline;
      }
      &:active {
        color: rgb(74, 47, 99);
      }
  }
</style>
