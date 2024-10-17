import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Provider store={appStore}>
          <Header />
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </Provider>
      </div>
    </>
  );
};

export default App;
