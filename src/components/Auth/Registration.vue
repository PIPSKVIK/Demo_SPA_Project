<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-15">
          <v-toolbar color="deep-purple accent-4" dark flat>
            <v-toolbar-title>Registration form</v-toolbar-title>
          <v-spacer />
          <v-icon>mdi-call-split</v-icon>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                label="e-mail"
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
                prepend-icon="mdi-key"
                type="password"
                color="deep-purple accent-4"
                v-model="password"
                :counter="20"
                :rules="passwordRules"
              />

              <v-text-field
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="confirmPasswordRules"
                :type="show3 ? 'text' : 'password'"
                name="confirmPassword"
                label="Confirm passvord"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="show3 = !show3"
                color="deep-purple accent-4"
                prepend-icon="mdi-key-change"
                v-model="confirmPassword"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="pl-5 pr-5"
              color="primary"
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading"
            >Create Account</v-btn>
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
      confirmPassword: '',
      valid: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      emailRules: [
        v => !!v || 'Заполните e-mail',
        v => /.+@.+\..+/.test(v) || 'Не корректная запись e-mail'
      ],
      passwordRules: [
        v => !!v || 'Заполните пароль',
        v => (v && v.length <= 20) || 'Пароль должно быть не более 8 символов'
      ],
      confirmPasswordRules: [
        v => !!v || 'Заполните пароль',
        v => v === this.password || 'Пароль не совпадает'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/') // головрим что мы хотим вернутся на строницу главную
          })
          .catch(() => {}) // Временно на случай ошибки (Оставим пустую функцию)
          // Но эти блоки нужны, что делать маршрутизацию
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
