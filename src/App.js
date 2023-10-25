import './App.css';
import ListTour from "./ListTour";
import CreateTour from "./CreateTour";
import UpdateTour from "./UpdateTour";
import {Route, Routes} from "react-router-dom";
import Datill from "./Datill";
import DeleteTour from "./DeleteTour";



function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<ListTour/>}></Route>
          <Route path={'/create'} element={<CreateTour/>}></Route>
          <Route path={'/update/:id'} element={<UpdateTour/>}></Route>
          <Route path={'/datill/:id'} element={<Datill/>}></Route>
          <Route path={'/delete/:id'} element={<DeleteTour/>}></Route>
        </Routes>
      </>
  );
}

export default App;
