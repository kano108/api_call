import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function Images() {
  const new_list = useSelector(
    (state) => state && state.imageReducer && state.imageReducer.list
  );
  console.log("++++++kishan_Patel New_data", new_list);

  return (
    <div className="selected_imaged_2">
      <h1>SELECTED_IMAGE</h1>
      {new_list.map((item) => {
        return (
          <div>
            <img src={item.data} className="selected_image" />
          </div>
        );
      })}
      
      {/* <div>
        <button onClick={()=>home_page()}>Home</button>
      </div> */}

      <div>
        <li>
          <NavLink to="/" type="button" className="new_account">
              Home Page
          </NavLink>

        </li>
      </div>
    </div>
  );
}

export default Images;
