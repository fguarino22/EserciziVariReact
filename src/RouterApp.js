import { Route, Routes } from 'react-router-dom';
import App from './App.js';
import Esempio from './Component/Path/Pagina';
import Word from './Component/Spazio/Space';
import Main from './Component/List/Home Page/Body';
import Trattino from './Component/SenzaTrattino/Body';
import Checkout from './Component/List/Carrello/Checkout';
import Summary from './Component/List/Payment/Riepilogo.js';
import Pay from './Component/List/Payment/Pagamento.js';
import Login from './Component/List/Enter/Login.js';
import SignUp from './Component/List/Enter/Register.js';

function RouteApp() {
    return (
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/esempio" element={<Esempio />} />

            <Route path="/spazio" element={<Word />} />

            <Route path="/lista" element={<Main />} />

            <Route path="/trattino" element={<Trattino />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/ordine" element={<Summary />} />

            <Route path="/pagamento" element={<Pay />} />

            <Route path="/login" element={<Login />} />

            <Route path="/registrazione" element={<SignUp />} />



        </Routes>
    );
}
export default RouteApp;