import {NodeObject, Options} from './utils/interfaces'
import {createNode} from './utils/createNode'

export const json2xml = (json: NodeObject, options?: Options) => {
  
    if(!json) throw new Error('JSON is required')

    const keys = Object.keys(json);

    if(keys.length != 1){
      throw new Error('A root tag is required')
    }

    let xmlContent = ''

    keys.map( key => {
      const node = json[key] as NodeObject
      xmlContent += createNode(key, node)
    })

    if(options?.includeHeader) {
      let xml = `<?xml version='1.0' encoding='utf-8'?>{{xmlContent}}`
      return xml.replace('{{xmlContent}}', xmlContent)
    }

    return xmlContent;
  }