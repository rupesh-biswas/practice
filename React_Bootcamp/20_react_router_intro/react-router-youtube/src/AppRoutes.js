import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Mainheader from './Mainheader';


function AppRoutes(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Mainheader />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;