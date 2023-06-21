import { useContext } from "react";
import NavigationContext from "../context/navigation";


export default function useNavigationContext() {

    return useContext(NavigationContext);
}