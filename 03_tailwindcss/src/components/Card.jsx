import React from "react";

function Card({name, btnText}){
  console.log("props", name)
  return (
     <div className=' relative w-100 overflow-hidden rounded-lg flex justify-center items-center h-screen'>
  <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" className='w-100 h-full object-cover' alt="nature"/>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-black/40 text-white text-center p-3 rounded">
    <h1 className='text-xl font-bold'>
      {name}
    </h1>
    <p className='text-sm'>This is a simple image card with text on image.</p>
    <button className=" mt-2 bg-amber-700 p-3" >{btnText}</button>
  </div>
</div>
  )

}

export default Card