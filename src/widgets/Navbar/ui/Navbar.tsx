import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div>Logo</div>
            <div className={classNames(cls.links)}>
                <AppLink to={'/'}>
                    Главнейшая
                </AppLink>
                <AppLink
                 to={'/about'}
                 theme={AppLinkTheme.SECONDARY}   
                >
                    Самомнение
                </AppLink>
            </div>
        </div>
    )
}
