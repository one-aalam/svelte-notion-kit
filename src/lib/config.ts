export const appConfig = {
    baseUrl: import.meta.env.VITE_APP_URL ? String(import.meta.env.VITE_APP_URL) : 'http://localhost:3001' ,
    properties: {
        title: 'title',
        summary: 'summary',
        tags: 'tags',
        published: 'published',
        author: 'author'
    }
}
