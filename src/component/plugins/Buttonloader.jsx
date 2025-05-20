import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Buttonloader = () => {
  return (
    <RotatingLines
    visible={true}
    width="30"
   
    top="200"
    color="white"
    strokeWidth="6"
    strokeColor='white'
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Buttonloader