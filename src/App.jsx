import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Routes to each pages */}
          <Route index element={<Home />} />
          <Route index path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
