import useNavigationContext from "../hooks/use-navigation-context";
import classNames from "classnames";

export default function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigationContext();

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    )

    function handleClick(evt) {
        if (evt.ctrlKey || evt.metaKey) return;
        evt.preventDefault();
        navigate(to);
    }
    return (
        <a
            className={classes}
            href={to}
            onClick={handleClick}
        >
            {children}
        </a>
    )
}