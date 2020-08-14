import TYPE from '../enum/type';

export const type = TYPE

export const getTypeNode = (node:any) => {
  const type = typeof node
  
  if(type === 'undefined') return TYPE.UNDEFINED
  if(type === 'boolean') return TYPE.SINGLE
  if(type === 'number') return TYPE.SINGLE
  if(type === 'string') return TYPE.SINGLE
  if(type === 'object') {

    if(Array.isArray(node)) return TYPE.ARRAY

    return TYPE.OBJECT
  }
  
  throw new Error(`Type ${type} not supported`)
}