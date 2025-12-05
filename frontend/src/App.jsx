import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForrm from "./components/ModalForrm";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const handleOpen = (mode) => {
    console.log(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableList />
      <ModalForrm />
    </>
  );
}

export default App;
