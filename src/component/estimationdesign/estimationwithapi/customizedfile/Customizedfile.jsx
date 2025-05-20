import React from 'react'
import Custommizedfiledata from './Custommizedfiledata'

const Customizedfile = ({Veiwdata , Filename}) => {
  return (
    <div id="divCustomTable d-flex">
    <div className="d-flex pt-2 pb-2">
      <div className="d-flex  mt-0 pt-0 col-8 pe-2">
        <button
          onclick="AddJob();"
          type="button"
          className="btn btn-primary border lift"
        >
          Add Job
        </button>
        <button
          onclick="SaveFile();"
          type="button"
          className="btn btn-primary border lift"
        >
          Save
        </button>
        <button
          onclick="AddRow();"
          type="button"
          className="btn btn-primary border lift"
        >
          Add Row
        </button>
      </div>
      <div className='d-flex'> 
          <h5>Note: </h5>
        <p
          style={{
            color: "black",
            fontSize: "larger",
            marginLeft: '10px'
          }}
        >
          Blue color Input fields are editable
        </p></div>
    </div>
    <div>
      <Custommizedfiledata
        Veiwdata={Veiwdata}
        Filename ={Filename }
      />
    </div>

    
  </div>  )
}

export default Customizedfile