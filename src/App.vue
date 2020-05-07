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
        <!-- ссылка на logout -->
        <v-list-item
          color="deep-purple accent-4"
          @click="onLogout"
          v-if="isUserLoggIn"
        >
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- ссылка на logout -->
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

          <!-- ссылка logOut -->
          <v-btn
            class="pt-2 pb-2"
            outlined
            @click="onLogout"
            v-if="isUserLoggIn"
          >
            <v-icon left>mdi-exit-to-app</v-icon>
            logout
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
      drawer: false // Убирем отсюда Link массив
    }
  },
  computed: {
    error () { // мы обращаемся к getters из shared, если есть какая-то ошибка будем ее здесь получать!
      return this.$store.getters.error
    },
    isUserLoggIn () {
      return this.$store.getters.isUserLoggIn
    }, // Как нам изменить меню, в зависимости от этой переменной links?
    links () { // и тут будем проверять, если у нас пользователь залогинен - вернем один массив если не сработает то другой массив. (Изииии)
      if (this.isUserLoggIn) {
        return [ // когда пользователь зареган
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
      return [ // когда пользователь не зареган
        {
          title: 'Login',
          icon: 'mdi-lock',
          url: '/login'
        },
        {
          title: 'Registration',
          icon: 'mdi-account-multiple-plus-outline',
          url: '/registration'
        }
      ]
    }
  }, // Нужно завести еще одно computed свойство links - как и называется в поле date
  methods: {
    closeError () { // обращаемся к стору и Диспачим action cliarError (По сути, просто будем очишать ошибку и Она не должна показыватся)
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
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
