import React from 'react'
export default function Feature({Icon,title,caption}) {
  return (
    <div className='bg-white dark:bg-[#111C44] rounded-4xl w-full py-6 px-5 flex items-center gap-5'>
        <div className='rounded-[50%] bg-[#F4F7FE] dark:bg-[#1F294F] px-4 py-3.5'>
                <Icon className='text-[#422AFB] dark:text-white text-[large]'/>
        </div>
        <div className='flex flex-col '>
                <span className='text-gray-300'>{title}</span>
                <span className='text-black dark:text-white font-medium text-2xl'>{caption}</span>
        </div>
    </div>
  )
}
 