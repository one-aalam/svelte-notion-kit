
export const appConfig = {
    notion: {
        token: String(import.meta.env.VITE_NOTION_TOKEN || process['env']['NOTION_TOKEN'] ),
        databaseId: String(import.meta.env.VITE_NOTION_DATABASE_ID || process['env']['NOTION_DATABASE_ID'])
    },
    baseUrl: String(import.meta.env.VITE_APP_URL || process['env']['APP_URL'] || ''),
    properties: {
        title: 'title',
        summary: 'summary',
        tags: 'tags',
        published: 'published',
        author: 'author'
    }
}
