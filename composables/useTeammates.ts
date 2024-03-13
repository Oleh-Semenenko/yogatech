import type { ITeammate } from '~/types'

export default function useTeammates() {
  const teammates: Ref<ITeammate[]> = useState('teammates', () => [
    {
      id: 1,
      img: '/images/miha.png',
      name: 'Михайло Ахекян',
      description:
        'засновник YogaTech, голова наукового відділу асоціації, лектор, викладач йоги, ментор',
      instagramLink: 'https://www.instagram.com/mikeyogatech/',
      slug: 'miha'
    },
    {
      id: 2,
      img: '/images/mirka.png',
      name: 'Міріам Хмарська',
      description:
        'голова культурного відділу асоціацї,  викладачка йоги, менеджер',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'mirka'
    },
    {
      id: 3,
      img: '/images/kate.png',
      name: 'Катерина Ковальчук',
      description: 'голова відділу маркетингу асоціації, бізнес-коуч, ментор',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'kate'
    },
    {
      id: 4,
      img: '/images/banda.png',
      name: 'Дарт Вейдер',
      description: 'орцукпук окцапшукопшу пткоашоукопщук плдоукшоауко',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'dart'
    },
    {
      id: 5,
      img: '/images/miha.png',
      name: 'Михайло Ахекян',
      description:
        'засновник YogaTech, голова наукового відділу асоціації, лектор, викладач йоги, ментор',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'miha'
    },
    {
      id: 6,
      img: '/images/mirka.png',
      name: 'Міріам Хмарська',
      description:
        'голова культурного відділу асоціацї,  викладачка йоги, менеджер',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'mirka'
    },
    {
      id: 7,
      img: '/images/miha.png',
      name: 'Катерина Ковальчук',
      description: 'голова відділу маркетингу асоціації, бізнес-коуч, ментор',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'kate'
    },
    {
      id: 8,
      img: '/images/miha.png',
      name: 'Дарт Вейдер',
      description: 'орцукпук окцапшукопшу пткоашоукопщук плдоукшоауко',
      instagramLink: 'https://www.instagram.com/miriam_khmarska_yogini/',
      slug: 'dart'
    }
  ])

  const getOneTeammate = (slug: string) =>
    teammates.value.filter((teammate) => teammate.slug === slug)[0]

  const getTeammatesExceptCurrent = (slug: string) => teammates.value.filter((teammate) => teammate.slug !== slug)

  return {
    teammates,
    getOneTeammate,
    getTeammatesExceptCurrent
  }
}
