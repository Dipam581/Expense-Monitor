import React, { useEffect, useState } from 'react'

function Github() {
const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Dipam581')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-4xl'>Github says Hello : {data.followers} </div>
  )
}

export default Github