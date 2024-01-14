export default function useForm() {
  const name = useState('name', () => '')
  const surname = useState('surname', () => '')
  const phone = useState('phone', () => '')
  const email = useState('email', () => '')

  const clearForm = () => {
    name.value = ''
    surname.value = ''
    phone.value = ''
    email.value = ''
  }
  return {
    name,
    surname,
    email,
    phone,

    clearForm
  }
}
