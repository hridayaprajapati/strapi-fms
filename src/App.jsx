import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";

import AuthProvider from "./hooks/AuthProvider";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Toaster expand={true} richColors position="top-center" />
        <BrowserRouter>
          <AuthProvider>
            <MainContent />
          </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
