import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <>

      <div className="flex flex-col bg-slatfe-300 h-screen">
        <Navbar />
        <Body />
        <Footer />
      </div>

    </>
  )
}

export default App;