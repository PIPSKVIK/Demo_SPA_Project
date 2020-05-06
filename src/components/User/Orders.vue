<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
<!-- ------------------------------ -->
    <v-list>
      <h1 class="">Orders</h1>
        <v-list-item
          v-for="order of orders"
          :key="order.id"
        >
          <v-list-item-action>
            <v-checkbox
            :input-value="order.done"
              color="success"
              @change="markDone(order)"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{order.name}}</v-list-item-title>
            <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-btn
           color="success"
           :to="'/ad/' + order.adId"
          >Open</v-btn>
        </v-list-item>
    </v-list>
<!-- ---------------------------------- -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '1',
          name: 'Alexander',
          phone: '8-909-633-89-89',
          adId: '123',
          done: false
        },
        {
          id: '2',
          name: 'Vova',
          phone: '8-999-633-89-89',
          adId: '1234',
          done: false
        },
        {
          id: '3',
          name: 'Tolik',
          phone: '8-909-633-89-89',
          adId: '12345',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
