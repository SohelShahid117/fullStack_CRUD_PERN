import React, { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit, clientData }) => {
  console.log({ isOpen, onClose, mode, onSubmit, clientData });

  const [name, setName] = useState(""); // State for Name
  const [email, setEmail] = useState(""); // State for Email
  const [job, setJob] = useState(""); // State for Job
  const [rate, setRate] = useState("");
  // const [status, setStatus] = useState(""); // State for Status
  const [status, setStatus] = useState(false); // State for Status

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(e);
    try {
      const clientData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status,
      };
      console.log("client data r", clientData);
      await onSubmit(clientData);
    } catch (err) {
      console.error(err);
    }
    onClose();
  };

  // useEffect(() => {
  //   if (mode === "edit" && clientData) {
  //     setName(clientData.name);
  //     setEmail(clientData.email);
  //     setJob(clientData.job);
  //     setRate(clientData.rate);
  //     setStatus(clientData.isactive);
  //   } else {
  //     setName("");
  //     setEmail("");
  //     setJob("");
  //     setRate("");
  //     setStatus(false);
  //   }
  // }, [mode, clientData]);

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setName(clientData.name || "");
      setEmail(clientData.email || "");
      setJob(clientData.job || "");
      setRate(clientData.rate || "");
      setStatus(clientData.isactive || false);
    }

    if (mode === "add") {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setStatus(false);
    }
  }, [mode, clientData]);

  console.log(name, email, job, rate, status);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex items-center my-4 gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Job
              <input
                type="text"
                className="grow"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>
            <div className="flex mb-4 justify-between">
              <label className="input input-bordered flex mr-4 items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>

              <select
                value={status ? "Active" : "Inactive"}
                className="select select-bordered w-full max-w-xs"
                // onChange={(e) => setStatus(e.target.value)}
                onChange={handleStatusChange}
              >
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
