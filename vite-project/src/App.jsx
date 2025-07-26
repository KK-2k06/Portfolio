import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/PF-Home";
import { NotFound } from "./pages/PF-NotFound";
import {Toaster,toast} from 'react-hot-toast';


function App(){
  return(
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}
export default App
