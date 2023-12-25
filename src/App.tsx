import { Routes, Route, Link } from "react-router-dom";
import './styles/index.scss';
import { MainPageLazy } from "./pages/MainPage/MainPage.async";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [`${theme}`])}>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О нас
            </Link>
            <button onClick = {toggleTheme}>Сменить тему</button>

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