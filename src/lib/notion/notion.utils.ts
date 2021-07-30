import { notionConfig } from './notion.config'

/**
 *
 * @param block the block to check
 * @returns true if the provided paragraph is empty
 */
export const isEmptyParagraph = (block) => block.type === 'paragraph' && block.paragraph.text && block.paragraph.text.length === 0

/**
 *
 * @param result Notion APIs response -> result
 * @returns filtered supported blocks
 */
export const getSupportedBlocks = (result) => result.filter(block => block.type !== 'unsupported')

/**
 *
 * @param result Notion APIs response -> result
 * @returns non-empty paragraphs
 */
export const getNonEmptyParagraphs = (result) => result.filter(block => block.type !== 'paragraph' || !isEmptyParagraph(block))

/**
 *
 * @param result Notion APIs response -> result
 * @returns the very same result, with consideration of blocks that make sense as siblings under one root block/first sibling, rather than independent blocks. The blocks that are indentified as siblings, their index gets eaten up, and they get added to the first of their type as siblings.
 */
export const getAsSensiblyStructuredBlocks = (result) => {
    let ret = [result[0]]
    for(let blockIndex = 1; blockIndex < result.length ; blockIndex++) {
        if(notionConfig.couldBeNonSequencedTypes.includes(result[blockIndex].type) && !isEmptyParagraph(result[blockIndex - 1]) && result[blockIndex].type === result[blockIndex - 1].type) {
            if(!ret[ret.length -1].siblings) ret[ret.length -1].siblings = []
            ret[ret.length -1].siblings.push(result[blockIndex])
        } else {
            ret.push(result[blockIndex])
        }
    }
    return ret
}
