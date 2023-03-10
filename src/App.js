import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router/router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
 
function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, [])

  return (
    <div className="App">
      <RouterProvider
        router={router}
      ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}


export default App;
