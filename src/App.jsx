import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import TheApp from './Pages/TheApp';
import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import BusinessSolution from './Pages/BusinessSolution';

// Define Routes inside useRoutes
const SiteRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/theApp', element: <TheApp /> },
        { path: '/businessSolution', element: <BusinessSolution /> },
        { path: '/aboutUs', element: <AboutUs /> },
    ]);
    return routes;
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <SiteRoutes />  {/* Routes are rendered here */}
            <Footer />
        </Router>
    );
};

export default App;

