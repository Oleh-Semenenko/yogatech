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

          <button
            type="submit"
            class="form__btn btn"
            @click.prevent="handleFormSubmit"
          >
            <span class="long">Зареєструватись та перейти до оплати</span>
            <span class="short">Зареєструватись</span>
          </button>
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
  max-width: 1060px
  margin: 0 auto
  background-color: var(--white)
  padding: 60px 140px
  border: 1px solid #000

  @include xxl
    max-width: 800px
    padding-right: 100px
    padding-left: 100px
    gap: 40px
  @include xl
    padding-right: 80px
    padding-left: 80px
  @include l
    gap: 32px
    padding: 40px 60px
    width: 100%
    grid-template-columns: 100%
    grid-template-rows: repeat(5, 1fr)
  @include ms
    gap: 24px
    padding-right: 32px
    padding-left: 32px

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

  & .short
    display: none
    @include l
      display: block
  & .long
    display: block
    @include l
      display: none
</style>
