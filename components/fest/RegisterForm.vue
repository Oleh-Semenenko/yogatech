<template>
  <div class="register-form section blue">
    <div class="container">
      <div class="register-form__inner">
        <h2>Реєстрація та оплата</h2>

        <form class="form">
          <div class="form__item">
            <label for="name">Ім’я</label>
            <input v-model="name" type="text" id="name" />
          </div>
          <div class="form__item">
            <label for="surname">Прізвище</label>
            <input v-model="surname" type="text" id="surname" />
          </div>
          <div class="form__item">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" />
          </div>
          <div class="form__item">
            <label for="phone">Номер телефону</label>
            <input v-model="phone" type="tel" id="phone" />
          </div>

          <BaseButton
            type="submit"
            class="form__btn"
            @click.prevent="handleFormSubmit"
          >
            Зареєструватись та перейти до оплати
          </BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  name,
  surname,
  email,
  phone,
  clearForm
} = useForm()
// const name = ref('')
// const surname = ref('')
// const phone = ref('')
// const email = ref('')

const handleFormSubmit = () => {
  const data = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    phone: phone.value
  }

  console.log(data)
  clearForm()
}
</script>

<style lang="sass" scoped>
.form
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(3, 1fr)
  gap: 52px
  width: 1060px
  margin: 0 auto
  background-color: #fff
  padding: 60px 140px
  border: 1px solid #000

.form__item
  display: flex
  flex-direction: column
  gap: 4px

  & label
    font-size: 28px

  & input
    border: 1px solid #000
    padding: 8px 12px

.form__btn
  grid-column: 1 / -1
  justify-self: center
</style>
