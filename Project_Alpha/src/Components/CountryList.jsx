import React, {useEffect, useState} from "react";
const CountryList = ({data, handleEditingData, smalP}) => {
  return (
    <>
      <div id="top-section-wrapper">
        <div id="top-section">
          <span>Brand list</span>
          <div id="top-last-section">
            <button>Add Brand</button>
            <button>Import</button>
            <button>Export to excel</button>
          </div>
        </div>
        <table>
          <tr>
            <th style={{width: "40%"}} onClick={() => smalP()}>
              Brand
            </th>
            <th style={{width: "40%"}}>Category</th>
            <th style={{width: "40%"}}>Actions</th>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Search Brand Name" autoComplete="off" />
            </td>
            <td>
              <input type="text" placeholder="Search Category Name" autoComplete="off" />
            </td>
            <td>
              <button id="se">Search</button>
            </td>
          </tr>
          {data !== undefined &&
            data.map((d, i) => {
              return (
                <tr key={d.id}>
                  <td>{d.brand}</td>
                  <td>{d.category}</td>
                  <td>
                    <span id="edit" onClick={() => handleEditingData(d.brand, d.category)}>
                      Edit
                    </span>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default CountryList;
