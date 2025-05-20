import React from 'react'

const Pagetoolbar = () => {
  return (
    <div class="mt-2 " style={{      background: "#f9f4f4"    }}>
          <div class="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
      <div class="container-fluid">
        <div class="row g-3 mb-3 align-items-center">
          <div class="row pt-3 " style={{fontSize:'15px'}}>
            <div >
              <span class="breadcrumb-it"><a class="text-secondary" >Home</a></span>
              <span class="breadcrumb-it"><a class="text-secondary" > /</a></span>

              <span class="breadcrumb-it ps-1" >Dashboard</span>
            </div>
          </div>
        </div> 
        <div class="row align-items-center">
          <div class="col" style={{  fontSize:'15px'   }}>
            <h1 class="fs-5 color-900  mb-00" style={{  fontSize:'10px'   }}>Welcome back, Allie!</h1>
            <small class="text-muted">You have 12 new messages and 7 new notifications.</small>
          </div>
          <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-12 mt-2 mt-md-0">
            <div class="input-group">
              <input class="form-control" type="text" name="daterange"/>
              <button class="btn btn-secondary" type="button" data-bs-toggle="tooltip" title="Send Report"><i class="fa fa-envelope"></i></button>
              <button class="btn btn-secondary" type="button" data-bs-toggle="tooltip" title="Download Reports"><i class="fa fa-download"></i></button>
              <button class="btn btn-secondary" type="button" data-bs-toggle="tooltip" title="Generate PDF"><i class="fa fa-file-pdf-o"></i></button>
              <button class="btn btn-secondary" type="button" data-bs-toggle="tooltip" title="Share Dashboard"><i class="fa fa-share-alt"></i></button>
            </div>
            <script src="../assets/js/bundle/daterangepicker.bundle.js"></script>
            <script>
            
              {/* $(function() {
                $('input[name="daterange"]').daterangepicker({
                  opens: 'left'
                }, function(start, end, label) {
                  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
                });
              }) */}
            </script>
          </div>
        </div> 
      </div>
    </div>
    </div>
  )
}

export default Pagetoolbar