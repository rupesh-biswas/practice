import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";




export default function App() {


  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="col-span-5">
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/accordian'>
          <AccordionPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
