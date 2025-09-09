import React, { useCallback, useEffect, useState } from 'react'

const PasswordGenerator = () => {
       
  const [length,setlength]=useState(8);
  const [numbers,setnumbers]=useState(false);
  const [characters, setcharacters]=useState(false);
  const [password, setpassword]=useState("");

      const Password= useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+[]{}<>?/~|";

          for(let i=1; i<=length; i++){
                  let char=str[ Math.floor(Math.random() * (str.length))];
                  pass+=char;
          }

          setpassword(pass);

      },[numbers,characters,length]);

       const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  useEffect(() => {
     Password();
  },[length,characters,numbers,Password]);

  return (
    <div className='bg-black absolute text-white h-screen w-full '>

        <center className='py-[10px] bg-green-500 mt-[40px] relative ml-[25vw] w-[50vw] h-[17vw] border-2 rounded-4xl '>
            <h1 className='uppercase text-4xl text-white font-serif'> Password-Generator</h1>
            <hr className='w-[30vw] h-[5px] border-2'/>
            <div className='py-[20px]'>
             <input className='text-black rounded-full px-3 w-[35vw] h-[3vw] bg-white read-only:' type="text" value={password} placeholder='your Password' input />
             <button onClick={copyPassword} className='bg-blue-600 ml-[4px] h-[3vw] w-[4vw] rounded-full cursor-pointer'>copy</button>
             </div>
            <div className='mr-3 w-[35vw] flex text-red-500 font-bold'>
               <input onChange ={(e) => setlength(e.target.value)} min={0} max={100} type='range' />
               <label className='text-red-500 px-3 font-bold mr-2' htmlFor="">length:{length}</label>
               <input onChange={() => setnumbers((e) => !e)}      checked={numbers} className='mr-1' type="checkbox" />
               <label className='mr-3' htmlFor="">numbers</label>
               <input onChange={() => setcharacters((e) => !e)}  checked={characters} className='mr-1 px-4' type="checkbox" />
               <label  htmlFor="">characters</label>
            </div>
        </center>
              
    </div>
  )
}

export default PasswordGenerator
