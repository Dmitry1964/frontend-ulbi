import { Routes, Route, Link } from "react-router-dom";
import './index.scss';
import { MainPageLazy } from "./pages/MainPage/MainPage.async";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О нас
            </Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>

        </div>

    )
}

export default App