import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoomsProvider from './components/RoomProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoomsProvider>

      <App />

    </RoomsProvider>
  </BrowserRouter>

)
