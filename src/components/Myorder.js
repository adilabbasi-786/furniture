import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Myorder() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState([]);
  const getData = async () => {
    let req = await fetch(`http://localhost:1337/api/orders`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    let res = await req.json();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteBooking = async (id) => {
    await fetch(`http://localhost:1337/api/orders`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    getData();
  };
  return (
    <>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="col-lg-8">
            <div class="breadcrumb_iner">
              <div class="breadcrumb_iner_item">
                <h2>My orders</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {auth.token && (
        <div style={{ margin: "25px" }}>
          <h1>my orders</h1>
          <div style={{ marginTop: "20px" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phonenumber</th>
                  <th scope="col">Address</th>
                  <th scope="col">items</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  {/* <th scope="col">Paid Status</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item?.attributes?.firstName}</td>
                    <td>{item?.attributes?.lastName}</td>
                    <td>{item?.attributes?.email}</td>
                    <td>{item?.attributes?.phoneNumber}</td>
                    <td>{item?.attributes?.address}</td>
                    {/* <td>{getPaymentBox(item?.Status, item.id, item.reviews)}</td> */}
                    <td>
                      {item?.attributes?.Status === "pending" && (
                        <button onClick={() => deleteBooking(item.id)}>
                          <i
                            class="fas fa-trash"
                            style={{ color: "#d91c1c" }}
                          ></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Myorder;
