import React from 'react'
import img10 from "../assets/img11.jpg"



const Tailwind = () => {
  return (
    <div className="grid grid-cols-4 col-start-1 gap-16 bg-blue-800">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <div className="grid grid-cols-subgrid col-span-3">
    <div className="col-start-2">6</div>
  </div>            
</div>
  )
}

export default Tailwind