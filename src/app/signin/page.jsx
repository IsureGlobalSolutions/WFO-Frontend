import React from "react";
// import { useClient } from 'next/data-client';
import { Provider } from 'react-redux';
import {store} from '../../redux/store/store';
// import SimpleHeader from "@/component/Header/SimpleHeader";
import SigninCom from "../../component/signin";
import { Toaster } from 'react-hot-toast';

// import Three from "@/Three";

function Signin() {
  // useClient(); // Mark this component as a client component

  return (
    <>
      {/* <SimpleHeader /> */}
      {/* <SimpleHeader/> */}
      <Provider store={store} > 
     <SigninCom />
     <Toaster />

      {/* Other components in your app */}
    </Provider>
    
      
    </>
  );
}

export default Signin;
