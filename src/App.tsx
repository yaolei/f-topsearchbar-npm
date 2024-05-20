import {SearchBar} from './components/'
import {useState, useEffect} from 'react'
import './index.css'
 const App = (props:any) => {
    const [showOpen, setShowOpen] = useState<Boolean>(props.isOpen?props.isOpen:false)
    useEffect(() =>{
        setShowOpen(props.isOpen)
    },[props.isOpen])
    const isActiveView = (s:string) => s
  return (
    <>
        <SearchBar isOpen= {showOpen} {...props} isActiveFunc={isActiveView}/>
    </>
  )
}


export default App