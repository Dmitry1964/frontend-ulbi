import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { lstat } from 'fs';
import { compileFunction } from 'vm';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to}
            className={classNames(cls.link, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link >
    )
}

