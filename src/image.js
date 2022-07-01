import { useEffect, useState } from "react";
import { image_display } from "./action/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import imageReducer from "./reducers/imageReducer";
import "./App.css";

const Image = () => {
  const [apiData, setApiData] = useState([]);
  const [seed, setSeed] = useState("");
  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setApiData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const changeHandler = () => {
    // const data1 = Math.floor(Math.random() * 5000);
    // console.log("+++++++++++++data1", data1);
    // setSeed(data1);
  //};
  return (
    <>
      <div className="App">
        <h1>Image Display</h1>
        <button className="btn btn-success" onClick={() => changeHandler()}>
          Refresh
        </button>
        <div className="main_api_images">
          {
          apiData.map((item) => {
            return (
              <div className="api_images" key={item.id}>
                <img
                  type="button"
                  src={item.url}
                  onClick={() =>
                    dispatch(image_display(item), navigate("/images"))
                  }
                  className=" images"
                  alt="images"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Image;
