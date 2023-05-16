import "@/styles/globals.css";
import { NavbarSimpleColored } from "@/components/sidebar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export default function App({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      <Provider store={store}>
        <NavbarSimpleColored />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
