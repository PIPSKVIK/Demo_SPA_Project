<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-15">
          <v-toolbar color="deep-purple accent-4" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer />
          <v-icon>mdi-call-split</v-icon>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              validation
            >
              <v-text-field
                label="email"
                name="email"
                prepend-icon="mdi-login-variant"
                type="email"
                color="deep-purple accent-4"
                v-model="email"
                :rules="emailRules"
                required
              />

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock-question"
                type="password"
                color="deep-purple accent-4"
                v-model="password"
                :counter="20"
                :rules="passwordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="pl-5 pr-5"
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'Заполните e-mail',
        v => /.+@.+\..+/.test(v) || 'Не корректная запись e-mail'
      ],
      passwordRules: [
        v => !!v || 'Заполните пароль',
        v => (v && v.length <= 20) || 'Пароль должно быть не более 8 символов'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        console.log(user)
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
