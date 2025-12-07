import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
// import ModalForrm from "./components/ModalForm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      setTableData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpen = (mode, client) => {
    // console.log(mode);
    setClientData(client);
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          newClientData
        );
        console.log("client added", response.data);
        setTableData((prevData) => [...prevData, response.data]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("modal mode edit");
      console.log("updating client id", clientData.id);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          newClientData
        );
        console.log("client added", response.data);
        setTableData((prevData) =>
          prevData.map((client) =>
            client.id === clientData.id ? response.data : client
          )
        );
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList
        tableData={tableData}
        setTableData={setTableData}
        handleOpen={handleOpen}
        searchTerm={searchTerm}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        onSubmit={handleSubmit}
        clientData={clientData}
      />
    </>
  );
}

export default App;
