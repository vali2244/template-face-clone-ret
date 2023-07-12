import React from 'react'

const Header = () => {
  return (
    <>

<nav class="bg-[#1876f2] border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
  <span className='font-bold text-2xl text-white'>
    not FaceBook
    </span> </a>
   
   <div className='h-12 flex w-1/2 justify-end items-center'>
    <span className='relative flex h-full items-center  w-2/3'>
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 absolute top-3 left-3 text-gray-400 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

<input type="text" placeholder='search here ' className=' pl-10 outline-none w-3/4 rounded-2xl h-3/4 bg-gray-200' />

    </span>
    <div class="relative">
    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
   </div>
  </div>
</nav>

    
    </>
  )
}

export default Header