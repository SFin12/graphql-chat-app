import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Auth0Provider
    domain="dev-tvcya2mowk7sijop.us.auth0.com"
    clientId="S7ihxXkGMqH5QE5pb0xJxDYDOQSzeeRI"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
 );

