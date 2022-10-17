import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppWrapper } from "../context/appWrapper";

function MyApp({ Component, pageProps, users }) {
  console.log(users);
  return (
    <AppWrapper>
      <Component {...pageProps} />;
    </AppWrapper>
  );
}
export default MyApp;
