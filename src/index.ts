import {NodeObject} from './utils/interfaces'
import {createNode} from './utils/createNode'

export const json2xml = (root: String, json: NodeObject) => {

    if(!root) throw new Error('Root is required')
    if(!json) throw new Error('JSON is required')
  
    let xml = `<?xml version='1.0' encoding='utf-8'?><${root}>{{xmlContent}}</${root}>`
    let xmlContent = ''
  
    Object.keys(json).map( key => {

      const node = json[key] as NodeObject
      xmlContent += createNode(key, node)

    })

    xml = xml.replace('{{xmlContent}}', xmlContent)
    return xml;
  }