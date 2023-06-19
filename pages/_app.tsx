import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/global.css";
import { studentLanding } from "@/static/common/links";
import { Provider } from "react-redux";
import store from "../features/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      // Redirect to another page
      router.push(studentLanding + "/home");
    }
  }, [router]);

  // persistor를 생성하여 스토어의 지속성 유지 설정
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
