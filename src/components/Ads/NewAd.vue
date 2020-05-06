<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-3">Create new ad</h1>
        <v-form ref="form" validation v-model="valid" class="mb-3">
          <v-text-field
            v-model="title"
            label="Ad title"
            name="title"
            type="text"
            color="deep-purple accent-4"
            required
            :rules="[v => !!v || 'title is required']"
          />
          <v-textarea
            v-model="description"
            color="deep-purple accent-4"
            :rules="[v => !!v || 'Description is required']"
            label="Ad description"
            name="description"
            type="text"
            rows="2"
          >
            <template v-slot:label>
              <div>
                Ad
                <small>(description)</small>
              </div>
            </template>
          </v-textarea>
        </v-form>
        <v-layout row wrap>
          <v-flex xs12 mb-3>
            <v-btn
              class="warning"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-switch
              v-model="promo"
              label="Add to promo?"
              color="success"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="createAd"
              :disabled="!valid"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () { // Проверяем, валидна ли форма
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://jetruby.com/ru/blog/wp-content/uploads/2017/08/vue.js-e1503668330344.png'
        }
        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
