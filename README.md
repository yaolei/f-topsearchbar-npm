# React Search Bar modal window Component

This component is create by use React + TS.
Use the debounce method to control the input times.You could set the how long is the input active by your like.
Use the Tailwinds css even then you could also install the frame-motion library.
It's could easy to expend css && style and function.

Currently, createPortal component is better is show the Pop modal :
- [createPortal/react-dom]


- Demo UI

![](https://github.com/yaoleidl/f-topsearchbar-npm/raw/main/assets/demo.png) 

## Install 
```js
  npm i f-topsearchbar-npm
``` 
or use yarn 

```js
  yarn add f-topsearchbar-npm
```
## How to use and configure 

- Just include the components in your project:
```js
    <SearchBar />
```

- Code Examples:

```js
  import {SearchBar} from 'f-topsearchbar-npm'
  import { useState } from 'react'
  import {createPortal} from 'react-dom'
  const Demo = () => {
    const [showModel, setShowModel] = useState(false)
    const [searchDatas, setSearchDatas] = useState([])
    const closeViewAction = () => {
        // notice to f-searchbar to close the modal window.
        setShowModel(false)
        // when close the model, clear the results data array.
        // would remove this code and merge to component next version.
        setSearchDatas([])
    }
    const handleGetVal = (v) => {
      // start the search wether the input value > 2
      if (v.length > 2) {
        //  fetch the requested from res api or json files 
        searchDatas([])
      }
      
    }
    return (
        <div onClick={() => setShowModel(true)}>Search...</div>
         {showModel && createPortal(
            <SearchBar 
                    isOpen={showModel} 
                    isActiveFunc={closeViewAction}  
                    valuCallFunc={handleGetVal}
                    resDatas={searchDatas}
                    />
              ,document.body)
          }
    )
  }
```
- more `attributes` in here:
  - valuCallFunc: Get the input value for fetch dats | default: (v) => v
  - placeHolder: inuput element palcehodler | default :`Search...`,
  - extendStyle: Extends the new Class and style | default : '',
  - maxlength: How many charts could be allow to input | default : 20
  - minlength: How less charts could be allow to input | default : 2,
  - value:input default value | default '',
  - delayTime: How ofen debounce method delay time | default: 500,
  - resDatas: Display the search results, | default: []
  - isOpen: Show the modal winow | default: false,
  - isActiveFunc: Current modal status and control the close modal window method | 
      default: (v) => `close`,
- Response Datas:
```js
   interface DemoDatas {
    index:React.Key,
    subContent:String,
    content: String,
    statue?: Boolean,
  }
```

