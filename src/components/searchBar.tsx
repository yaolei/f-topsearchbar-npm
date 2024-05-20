import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {ModelContent} from './modelContent'

interface SearchBarArgs  {
    placeHolder?:string,
    extendStyle?:string,
    maxlength?:number,
    minlength?:number,
    value?:string,
    delayTime?:number,
    resDatas?:DemoDatas[],
    isOpen:Boolean,
    isActiveFunc:(v:String) => String,
}

interface DemoDatas {
    index: React.Key,
    subContent:String,
    content: String,
    datastate?: Boolean;
}

export const SearchBar = (props:SearchBarArgs) => {
    const [showModel, setShowModel] = useState<Boolean>(props.isOpen)
    const handleGetVal = (v:String) => {
        console.log(v)
        return v
    }
    const closeView = () => {
        setShowModel(false)
        props.isActiveFunc("close")
    }
    useEffect(() => {
        setShowModel(props.isOpen)
    },[props.isOpen])

    // const d:DemoDatas[] = [
    //     {
    //         index:"1",
    //         subContent: "This is sub context",
    //         content: "test content"
    //     },
    //     {
    //         index:"2",
    //         subContent: "This is sub context",
    //         content: "test content2"
    //     },
    //     {
    //         index:"3",
    //         subContent: "This is sub context",
    //         content: "test content2"
    //     },
    // ]

  return (
    <>
        {
            showModel &&
            <div className='flex flex-col justify-start items-center' style={{
                position: "fixed",
                overflow: "hidden",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                }}>
                <div className='flex relative  flex-col w-[50vw]  m-[20px] mt-[40px] min-h-[50vh]  rounded shadow-md bg-[#1e293b]'>
                    <motion.div className=' absolute right-[20px] cursor-pointer  bg-[#1e293b]  text-white hover:bg-[#243042] w-[30px] h-[30px] m-2 mt-[20px] rounded-[20px] text-center leading-8'
                        whileTap={{scale:0.8}}
                        title='Close This Modal View.'
                        onClick={closeView}>X</motion.div>
                    <div className='border border-zinc-500 absolute mt-[60px] left-0 right-0'></div>
                    <ModelContent  valuCallFunc={(v:String) => handleGetVal(v)} {...props}/>
                    <div className='border border-zinc-500 '></div>
                   
                </div>
            </div>
        }
    </>
  )
}

