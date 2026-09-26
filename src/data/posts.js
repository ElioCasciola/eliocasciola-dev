import helloWorldContent from '../content/blog/hello-world.md?raw'

const blogPosts = [
    {
        slug: 'hello-world',
        title: 'Hello, World!',
        date: '2026-09-26',
        formattedDate: '26 settembre 2026',
        excerpt:
            'Perché ho creato questo blog e cosa racconterò durante il mio percorso nello sviluppo software.',
        content: helloWorldContent,
    },
]

export const posts = [...blogPosts].sort(
    (firstPost, secondPost) =>
        new Date(secondPost.date) - new Date(firstPost.date),
)
