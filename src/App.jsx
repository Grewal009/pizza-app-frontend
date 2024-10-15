import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
