import type { NOTION_BLOCK_TYPES, NOTION_COLORS } from './notion.constants'

export type BlockType = typeof NOTION_BLOCK_TYPES[number]
export type Block = {
    id: string
    type: BlockType
    [key: string]: any
}

export type NotionColorFg = typeof NOTION_COLORS[number]
export type NotionColorBg = `${NotionColorFg}_background`
export type NotionColor = NotionColorFg | NotionColorBg


export type BlockRichText = {
    text: {
        content: string,
        link: null | { url: string }
    },
    annotations: {
        bold: boolean,
        italic: boolean,
        strikethrough: boolean,
        underline: boolean,
        code: boolean,
        color: NotionColor
    }
}
