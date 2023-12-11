import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Thankyou from "./components/Thankyou";

import { BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {
  return (
    <>

      <div className="flex flex-col bg-slatfe-300 h-screen">











        <Navbar />
        {/* <Body /> */}

        <BrowserRouter>
          <Routes>

            <Route index element={<Body />} />

            <Route path="thankyou" element={<Thankyou />} />
            {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>
        </BrowserRouter>
        {/* <Thankyou/> */}
        <Footer />
      </div>

    </>
  )
}



export default App;