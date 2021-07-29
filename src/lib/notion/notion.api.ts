import { Client } from '@notionhq/client'

/**
 * Initialize the Notion client
 */
export const notionClient = new Client({
    auth: String(import.meta.env.VITE_NOTION_TOKEN),
})


/**
 * Notion's DB to pull
 * @param databaseId
 * @returns
 */
export const getDatabase = async (databaseId = String(import.meta.env.VITE_NOTION_DATABASE_ID)) => {
    const { results } = await notionClient.databases.query({
      database_id: databaseId,
    })
    return results
}

/**
 *
 * @param pageId PageId of the Notion page you'd like to retrieve
 * @returns
 */
export const getPage = async (pageId) => await notionClient.pages.retrieve({ page_id: pageId })

/**
 *
 * @param blockId Block id of the Notion block you'd like to retrieve
 * @returns
 */
export const getBlocks = async (blockId) => {
    const { results } = await notionClient.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    return results
}
