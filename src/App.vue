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
    <!-- тут мы будем показывать Snackbar -->
    <!-- в input, будем вызывать метод closeError, который позволит при клике закрыть данный snackBar -->
    <template
      v-if="error"
    >
    <!-- Показываем этот snackBar, токлько когда будет какой-то error(true) (Обернули все в template)-->
      <v-snackbar
        :color="error"
        :multi-line="true"
        :timeout="10000"
        @input="closeError"
        :value="true"
      >
      <!-- Тут буем показывать переменную что описали в computed свойстве -->
      {{error}}
        <v-btn
          dark
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
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
  },
  computed: {
    error () { // мы обращаемся к getters из shared, если есть какая-то ошибка будем ее здесь получать!
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () { // обращаемся к стору и Диспачим action cliarError (По сути, просто будем очишать ошибку и Она не должна показыватся)
      this.$store.dispatch('clearError')
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
