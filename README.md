# JSON2XML
Convert JSON to XML

## Simple Convert
```js
const {json2xml} = require('@pedroentringer/json2xml')

const json = { people: {name: "Pedro", age: 'XX' } }

const xml = json2xml(json)
```
Result:
```xml
<?xml version='1.0' encoding='utf-8'?>
<people>
  <name>Pedro</name>
  <age>XX</age>
</people>
```



## Simple Convert With Attributes
```js
const {json2xml} = require('@pedroentringer/json2xml')

const json = { 
  people: { 
    name: {
      attrs: {
        encode: 'utf8',
        isFullName: true
      },
      value: 'Pedro Entringer'
    }, 
    age: 'XX'
  }
}

const xml = json2xml(json)
```
Result:
```xml
<?xml version='1.0' encoding='utf-8'?>
<people>
    <name encode="utf8" isFullName="true" >Pedro Entringer</name>
    <age>XX</age>
</people>
```

## Object Convert
```js
const {json2xml} = require('@pedroentringer/json2xml')

const json = { 
  people: { 
    name: {
      attrs: {
        encode: 'utf8',
        isFullName: true
      },
      value: 'Pedro Entringer'
    }, 
    age: 'XX',
    mother: {
      name: {
        attrs: {
          encode: 'utf8',
          isFullName: true
        },
        value: 'Juliana Entringer'
      },
      age: 'XX'
    }
  }
}

const xml = json2xml(json)
```
Result:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<people>
   <name encode="utf8" isFullName="true">Pedro Entringer</name>
   <age>XX</age>
   <mother>
      <name encode="utf8" isFullName="true">Juliana Entringer</name>
      <age>XX</age>
   </mother>
</people>
```

## Simple Array Convert
```js
const {json2xml} = require('@pedroentringer/json2xml')

const json = { 
  people: { 
    name: {
      attrs: {
        encode: 'utf8',
        isFullName: true
      },
      value: 'Pedro Entringer'
    }, 
    age: XX,
    mother: {
      name: {
        attrs: {
          encode: 'utf8',
          isFullName: true
        },
        value: 'Pedro Entringer'
      },
      age: XX
    },
    brothers:{
      brother: [
        {
          attrs: {
            id: 1
          },
          value: "Nome"
        },
        {
          attrs: {
            id: 2
          },
          value: "Nome"
        }
      ]
    }
  }
}

const xml = json2xml(json)
```
Result:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<people>
   <name encode="utf8" isFullName="true">Pedro Entringer</name>
   <age>XX</age>
   <mother>
      <name encode="utf8" isFullName="true">Pedro Entringer</name>
      <age>XX</age>
   </mother>
   <brothers>
      <brother id="1">Nome</brother>
      <brother id="2">Nome</brother>
   </brothers>
</people>
```

## Complex Array Convert
```js
const {json2xml} = require('@pedroentringer/json2xml')

const json = { 
  people: { 
    name: {
      attrs: {
        encode: 'utf8',
        isFullName: true
      },
      value: 'Pedro Entringer'
    }, 
    age: XX,
    mother: {
      name: {
        attrs: {
          encode: 'utf8',
          isFullName: true
        },
        value: 'Pedro Entringer'
      },
      age: XX
    },
    brothers:{
      brother: [
        {
          attrs: {
            id: 1
          },
          value: {
              name: "Brother Name",
              age: 'XX',
              hobbies: {
                  hobbie: [
                    {value: 'Hobbie 1'},
                    {value: 'Hobbie 2'},
                  ]
              }
          }
        },
        {
          attrs: {
            id: 2
          },
          value: {
              name: "Brother Name",
              age: 'XX',
              hobbies: {
                  hobbie: [
                    {value: 'Hobbie 1'},
                    {value: 'Hobbie 2'},
                  ]
              }
          }
        }
      ]
    }
  }
}

const xml = json2xml(json)
```
Result:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<people>
   <name encode="utf8" isFullName="true">Pedro Entringer</name>
   <age>XX</age>
   <mother>
      <name encode="utf8" isFullName="true">Pedro Entringer</name>
      <age>XX</age>
   </mother>
   <brothers>
      <brother id="1">
         <name>Brother Name</name>
         <age>XX</age>
         <hobbies>
            <hobbie>Hobbie 1</hobbie>
            <hobbie>Hobbie 2</hobbie>
         </hobbies>
      </brother>
      <brother id="2">
         <name>Brother Name</name>
         <age>XX</age>
         <hobbies>
            <hobbie>Hobbie 1</hobbie>
            <hobbie>Hobbie 2</hobbie>
         </hobbies>
      </brother>
   </brothers>
</people>
```