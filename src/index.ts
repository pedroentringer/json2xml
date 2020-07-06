import {NodeObject} from './utils/interfaces'
import {createNode} from './utils/createNode'

export const json2xml = (json: NodeObject) => {
  
    if(!json) throw new Error('JSON is required')
  
    let xml = `<?xml version='1.0' encoding='utf-8'?>{{xmlContent}}`
    let xmlContent = ''
  
    const keys = Object.keys(json);

    if(keys.length != 1){
      throw new Error('A root tag is required')
    }

    keys.map( key => {

      const node = json[key] as NodeObject
      xmlContent += createNode(key, node)

    })

    xml = xml.replace('{{xmlContent}}', xmlContent)
    return xml;
  }