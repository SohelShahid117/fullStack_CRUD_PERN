import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const TableList = ({ handleOpen, searchTerm }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        setTableData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  console.log(error, tableData);

  console.log(handleOpen);

  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*
  const clients = [
    {
      id: 1,
      name: "Sohel",
      email: "sohel@gmail.com",
      job: "Electrical",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "Adil",
      email: "adil@gmail.com",
      job: "Mechanical",
      rate: "150",
      isActive: true,
    },
    {
      id: 3,
      name: "Shahid",
      email: "shahid@gmail.com",
      job: "Plumbing",
      rate: "200",
      isActive: false,
    },
  ];
  */
  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {/* {clients.map((client, id) => { */}
            {/* {tableData.map((client, id) => { */}
            {filteredData.map((client, id) => {
              return (
                <tr key={id}>
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.job}</td>
                  <td>{client.rate}</td>

                  <td>
                    <button
                      className={`btn rounded-full w-20 ${
                        client.isactive
                          ? "btn-primary"
                          : "btn-outline btn-primary"
                      }`}
                    >
                      {client.isactive ? "Active" : "InActive"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpen("edit")}
                      className="btn btn-secondary"
                    >
                      Update
                    </button>
                    {/* <button onClick={onOpen} className="btn btn-secondary">
                    Update
                  </button> */}
                  </td>
                  <td>
                    <button className="btn btn-accent">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
