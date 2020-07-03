export interface NodeValue {
  [key: string]: string | number | boolean | object
}

export interface NodeObject {
  [key: string]: NodeValue | string | number | boolean | NodeObject | Array<NodeValue> | Array<NodeObject>
}