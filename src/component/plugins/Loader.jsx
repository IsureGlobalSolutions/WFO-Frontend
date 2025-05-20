import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <>
    <RotatingLines
  visible={true}
  height="56"
  width="56"
  top="200"
  color="grey"
  strokeWidth="5"
  strokeColor='#4880FF'
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </>
  )
}

export default Loader