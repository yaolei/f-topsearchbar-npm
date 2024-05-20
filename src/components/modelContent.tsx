import React, {useState, useEffect, useRef} from 'react'
import searchIcon from '../assets/search-icon.svg';
import removeIcon from '../assets/remove-icon.svg';
import smileIcon from '../assets/smile-icon.svg';
import selectedIcon from '../assets/arrow-right-bold.svg';
import {motion} from 'framer-motion'

interface SearchBarArgs  {
    placeHolder?:string,
    extendStyle?:string,
    maxlength?:number,
    minlength?:number,
    value?:string,
    delayTime?:number,
    resDatas?:DemoDatas[],
    valuCallFunc:(v:String) => String,
}

interface DemoDatas {
    index:React.Key,
    subContent:String,
    content: String,
    statue?: Boolean,
}
export const ModelContent = (props:SearchBarArgs) => {
    const {maxlength, minlength, placeHolder,value, delayTime, resDatas, valuCallFunc}  = props
    const [removeIconActive, setRemoveIconActive] = useState<Boolean>(false);
    const [searchVal, setSearchVal] = useState(value?value:"");
    const inuputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        inuputRef.current?.focus();
    },[])

    useEffect(() =>{
        const timer = setTimeout(() =>{
            valuCallFunc(searchVal)
        }, delayTime?delayTime:500);
        return () => clearTimeout(timer)
    },[searchVal])

    const handleSearchBarInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.value.length > 0) {
            setSearchVal(e.target.value);
            setRemoveIconActive(true);
        } else {
            handleClearInputText()
        }
    }
    const handleClearInputText = () => {
        setSearchVal("")
        setRemoveIconActive(false);
    }
  return (
    <>
        <div className='flex  m-5 mt-[80px] mb-0  h-[40px] rounded-sm cursor-pointer '>
            <div className=' bg-[#243042] '><img src={searchIcon} className='w-[20px] h-[20px] mt-2 mx-2 '/></div>
            <input type="text" className='w-full text-white outline-none pl-[5px] text-[16px] bg-[#243042]'
                maxLength={maxlength? maxlength: 20}
                minLength={minlength? minlength:2}
                ref = {inuputRef as React.RefObject<HTMLInputElement>}
                placeholder={placeHolder?placeHolder:"Search..."}
                value={searchVal}
                onChange={handleSearchBarInput}/>
            {removeIconActive && 
                <motion.div className=' bg-[#243042] hover:bg-[#222c49]'
                    whileTap={{scale:0.8}}
                    onClick={handleClearInputText}>
                    <img src={removeIcon} className='w-[20px] h-[20px] mt-2 mx-2 '/>
                </motion.div>
            }
            <motion.div className=' bg-[#243042] hover:hover:bg-[#222c49] '
                whileTap={{scale:0.8}}>
                <img src={smileIcon} className='w-[20px] h-[20px] mt-2 mx-2'/>
            </motion.div>
        </div>
        <div>
            <ul className='m-5 mt-0 '>
                <li className='leading-10'>
                    <h2 className='text-white mx-5 text-1xl'>Get Start</h2>
                </li>
                {resDatas && resDatas.length > 0 ?
                    [...resDatas].map((d:DemoDatas) => (
                        <li key={d.index} className='w-full flex bg-[#243042] border-0 border-solid border-[#1e293b] rounded-md  mb-5 text-[#047bba] hover:bg-[#0284c7] hover:text-white leading-10 cursor-pointer'>
                            <div className=' basis-1/6 flex justify-center items-center'>
                                <div className='bg-[#334155]  w-[24px] h-[24px] leading-[24px] text-center rounded'>#</div>
                            </div>
                            <div className='basis-4/6 flex flex-col justify-center items-start'>
                                <div className='w-[200px] leading-[20px] bg-[#334155] text-center rounded-[10px] mt-2'>
                                    {d.subContent}
                                </div>
                                <div className=''>
                                    {(d.content)}
                                </div>
                            </div>
                            <div className='basis-1/6 flex flex-col justify-center items-end mr-2'>
                                <img src={selectedIcon} className='w-[20px] h-[20px] '/>
                            </div>
                        </li>
                    )): <div className=' text-center font-bold text-2xl m-8'>No Date Find.</div>
                }
            </ul>
        </div>
    </>
  )
}