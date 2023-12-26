import { useTheme } from "app/providers/ThemeProvider";
import cls from './ThemeSwitcher.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import DarcIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";
;




interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();
    const { className, ...otherProps } = props;

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [])}
            theme= {ThemeButton.CLEAR}
            {...otherProps}
        >
            {theme === Theme.DARK ? <DarcIcon/> : <LightIcon />}
        </Button>
    )
}

