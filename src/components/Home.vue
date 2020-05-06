<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad of promoAds"
             :key="ad.id"
             :src="ad.imageSrc"
             >
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
             </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrapp>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title>
              </v-card-title>
            </v-img>
            <v-card-subtitle class="headline pb-0">{{ad.title}}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ad.description}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="deep-purple accent-4" text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn class="primary" text>Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style lang="sass" scoped>
  .car-link
    position: absolute
    bottom: 50px
    background: rgba(0, 0, 0, .3)
    left: 50%
    transform: translateX(-50%)
    padding: 10px 20px
    border-radius: 5px
</style>
