import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppWrapper } from "../context/appWrapper";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps, users }) {
  console.log(users);
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
export default MyApp;
