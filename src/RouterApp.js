import { Route, Routes } from 'react-router-dom';
import App from './App.js';
import Esempio from './Component/Path/Pagina';
import Word from './Component/Spazio/Space';
import Main from './Component/List/Body';
import Trattino from './Component/SenzaTrattino/Body';

function RouteApp() {
    return (
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/esempio" element={<Esempio />} />

            <Route path="/spazio" element={<Word />} />

            <Route path="/lista" element={<Main />} />

            <Route path="/trattino" element={<Trattino />} />

        </Routes>
    );
}
export default RouteApp;