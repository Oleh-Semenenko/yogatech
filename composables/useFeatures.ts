export default function useFeatures() {
  const yogatechFeatures = useState('yogatech-features', () => [
    {
      id: 1,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--orange)'
    },
    {
      id: 2,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--blue-color)'
    },
    {
      id: 3,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--gray-color)'
    }
  ])

  const festFeatures = useState('fest-features', () => [
    {
      id: 1,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--orange)'
    },
    {
      id: 2,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--blue-color)'
    },
    {
      id: 3,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--gray-color)'
    },
    {
      id: 4,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--orange)'
    },
    {
      id: 5,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--blue-color)'
    },
    {
      id: 6,
      title: 'Пізнавай філософію',
      text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
      color: 'var(--gray-color)'
    }
  ])

  return {
    yogatechFeatures,
    festFeatures
  }
}
