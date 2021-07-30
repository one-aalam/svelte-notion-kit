export const appConfig = {
    notion: {
        token: String(import.meta.env.VITE_NOTION_TOKEN),
        databaseId: String(import.meta.env.VITE_NOTION_DATABASE_ID)
    },
    baseUrl: import.meta.env.VITE_APP_URL ? String(import.meta.env.VITE_APP_URL) : 'http://localhost:3001' ,
    properties: {
        title: 'title',
        summary: 'summary',
        tags: 'tags',
        published: 'published',
        author: 'author'
    }
}
