import {NodeObject, NodeValue} from './interfaces'

import {getTypeNode, type} from './typeNode'

export const createNode = (name: string, node:NodeObject | string | number | boolean | Array<NodeObject>): string => {
  const nodeType = getTypeNode(node)
  if(nodeType === type.SINGLE) return singleNode(name, node as string)
  if(nodeType === type.OBJECT) return objectNode(name, node as NodeObject)
  if(nodeType === type.ARRAY) return arrayNode(name, node as NodeObject[])
   
  return ''
}

export const initWithAttributes = (name: string, node: NodeObject) => {
  let attrs: string = ''

  const attributes = node['attrs'] as NodeValue

  if(attributes){
    Object.keys(attributes).map( (attr: string)  => {
      const nodeValue = attributes[attr]
  
      attrs += `${attr}="${nodeValue}"`
    })
  }

  return `<${name} ${attrs}>{{xmlContent}}</${name}>`
}

export const arrayNode = (name: string, nodes: NodeObject[]) :string => {
  let xml = ''

  for(const node of nodes){
    const nodeType = getTypeNode(node.value)

    let tempXML = ''

    if(nodeType === type.SINGLE) {
      tempXML = initWithAttributes(name, node)
      tempXML = tempXML.replace('{{xmlContent}}', node.value as string)
    }

    if(nodeType === type.OBJECT) {
      tempXML = objectNode(name, node)
    }

    xml += tempXML
  }

  return xml
}

export const singleNode = (name:string, value:String) :string => {
  return `<${name}>${value}</${name}>`
}

export const objectNode = (name: string, node:NodeObject) :string  => {
  let xml = initWithAttributes(name, node)
  let xmlContent = ''
  
  let nodeValue = node.value

  if(!nodeValue) nodeValue = node

  const nodeType = getTypeNode(nodeValue)
  
  if(nodeType === type.SINGLE) xmlContent += nodeValue

  if(nodeType === type.OBJECT) {

    const newNode = nodeValue as NodeObject

    Object.keys(nodeValue).map( key => {
      const newValue = newNode[key]
      
      const nodeType = getTypeNode(newValue)
      if(nodeType === type.SINGLE) xmlContent += singleNode(key, newValue as string)
      if(nodeType === type.OBJECT) xmlContent += objectNode(key, newValue as NodeObject)
      if(nodeType === type.ARRAY) xmlContent += arrayNode(key, newValue as NodeObject[])
    })
  }

  if(nodeType === type.ARRAY) xmlContent += arrayNode(name, nodeValue as NodeObject[])
  

  return xml.replace('{{xmlContent}}', xmlContent)
}