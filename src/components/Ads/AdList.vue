<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-3">My ads</h1>

        <v-card
            class="mx-auto mb-8"
            max-width="344"
            v-for="ad of myAds"
            :key="ad.id"
            elevation="12"
          >
            <v-img
              :src="ad.imageSrc"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ ad.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ ad.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="purple"
                text
                :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>
            </v-card-actions>
          </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
