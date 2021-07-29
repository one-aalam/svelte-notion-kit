import { notionConfig } from './notion.config'

export const isEmptyParagraph = (block) => block.type === 'paragraph' && block.paragraph.text && block.paragraph.text.length === 0
export const getSupportedBlocks = (result) => result.filter(block => block.type !== 'unsupported')
export const getNonEmptyParagraphs = (result) => result.filter(block => block.type !== 'paragraph' || !isEmptyParagraph(block))

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
