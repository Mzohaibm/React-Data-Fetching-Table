import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
const Data = () => {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [error, setError] = useState({ err: null });
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const api =
      "https://hub.dummyapis.com/employee?noofRecords=3&idStarts=1001";
    const getData = async () => {
      try {
        setLoader(true);
        const response = await fetch(api);
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        setError({ err: error });
      } finally {
        setLoader(false);
        console.log("You can see the results");
      }
    };

    if (fetchData) {
      getData();
      setFetchData(false);
    }
  }, [fetchData]);

  return (
    <div>
      {loader ? (
        <div className="text-dark text-center">
          <ColorRing height="120" width="120" />
          <p>Loading Please Wait...</p>
        </div>
      ) : (
        <div className="d-flex justify-content-center container text-center">
          <div className=" text-white ">
            <table>
              <tbody>
                {data.map((result) => (
                  <React.Fragment key={result.id}>
                    <tr className="text-white bg-dark">
                      <th className="p-2">FirtsName: {result.firstName}</th>
                      <th className="p-2">LastName: {result.lastName}</th>
                    </tr>
                    <tr className="bg-primary ">
                      <td className="p-1">Adress: {result.address}</td>
                      <td className="p-1">Age: {result.age}</td>
                    </tr>
                    <tr className="bg-secondary">
                      <td className="p-1">Email: {result.email}</td>
                      <td className="p-1">Salary: {result.salary}</td>
                    </tr>
                    {/* <br /> */}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <button
              className="mt-3 py-2 px-3 bg-success border-0 rounded text-white text-center"
              onClick={() => setFetchData(true)}
            >
              Click here to Fetch Data
            </button>
            <h2 className="bg-danger text-white">
              {error.err && error.err.message}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
