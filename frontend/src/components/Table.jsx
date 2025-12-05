import React from "react";

const Table = () => {
  const clients = [
    {
      name: "Sohel",
      email: "sohel@gmail.com",
      job: "Electrical",
      rate: "100",
      isActive: true,
    },
    {
      name: "Adil",
      email: "adil@gmail.com",
      job: "Mechanical",
      rate: "150",
      isActive: true,
    },
    {
      name: "Shahid",
      email: "shahid@gmail.com",
      job: "Plumbing",
      rate: "200",
      isActive: false,
    },
  ];
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody className="hover:bg-base-300">
          {/* row 1 */}
          {clients.map((client, id) => {
            return (
              <tr key={id}>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
