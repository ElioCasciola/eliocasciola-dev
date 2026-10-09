import helloWorldContent from '../content/blog/hello-world.md?raw'
import fallenZenithContent from '../content/blog/fallen-zenith-ricominciare-da-zero.md?raw'

const blogPosts = [
    {
        slug: 'fallen-zenith-ricominciare-da-zero',
        title: '«Intanto scrivo il codice, poi si vedrà»: la prima lezione di Fallen Zenith',
        date: '2026-10-09',
        formattedDate: '9 ottobre 2026',
        excerpt:
            'Dallo sviluppo senza un piano a un MVP testuale in C#: perché ho deciso di ripartire dalle fondamenta di Fallen Zenith.',
        content: fallenZenithContent,
    },
    {
        slug: 'hello-world',
        title: 'Hello, World!',
        date: '2026-09-26',
        formattedDate: '26 settembre 2026',
        excerpt:
            'Perché ho creato questi Logs e cosa racconterò durante il mio percorso nello sviluppo software.',
        content: helloWorldContent,
    },
]

export const posts = [...blogPosts].sort(
    (firstPost, secondPost) =>
        new Date(secondPost.date) - new Date(firstPost.date),
)
