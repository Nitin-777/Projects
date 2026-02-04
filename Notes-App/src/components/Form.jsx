import React from 'react'

const Form = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <div>
      <h1 className='uppercase text-4xl m-3 font-bold mt-5'> My Notes</h1>
      <form >
        <input className='mt-5' type="text" placeholder='Type your Name' />
        <textarea name="" id=""></textarea>
      </form>
      </div>
      
    </div>
  )
}

export default Form
