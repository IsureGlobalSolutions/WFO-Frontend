
import {  Suspense , useEffect} from "react";
import {ErrorBoundary} from "react-error-boundary"
import { AuthProvider } from './context/AuthProvider'
import Router from './router';
import Loader from "./component/plugins/Loader";
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store/store';
import { EstimationProvider } from './context/EstimationContext'; // Import the EstimationProvider
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from "react-hot-toast";
const App = () => {
  useEffect(() => {
    const handleChunkError = (event) => {
      if (event?.reason?.name === 'ChunkLoadError') {
        console.error("Chunk failed, reloading...");
        if (!window.location.href.includes('chunk_retry')) {
          window.location.href = window.location.href + '?chunk_retry=1';
          console.log("24868484");

        } else {
          window.location.reload(true);
          console.log("24868484");
                  }
      }
    };
    window.addEventListener('unhandledrejection', handleChunkError);
    return () => window.removeEventListener('unhandledrejection', handleChunkError);
  }, []);
  return (
    <ErrorBoundary fallback={<><p>error</p></>}>
 <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <Loader/>
          </div>}>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
          <EstimationProvider> {/* Wrap with EstimationProvider */}
              <Router />
            </EstimationProvider>
          </AuthProvider>
          </PersistGate>
          </Provider>
          <Toaster/>
          </Suspense>    
          </ErrorBoundary>
  )
}

export default App