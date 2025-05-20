import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const PublicLayout = ({ children }) => {
  return (
    <>
       <div className=''>
       <div>
          <Header  className="pe-4" />
         </div>
         <div className=''>
         {children}
            </div>
            <div>
            <Footer />

            </div>
       </div>
    </>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
