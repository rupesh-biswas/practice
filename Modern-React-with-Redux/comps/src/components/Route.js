import useNavigationContext from "../hooks/use-navigation-context";

export default function Route({ path, children }) {
    const { currentPath } = useNavigationContext();

    if (path === currentPath) {
        return children
    }
    return null;
}