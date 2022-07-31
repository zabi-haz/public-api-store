import axios from "axios";
import { useEffect, useState } from "react";
import "./style/style.css";
import { Link } from "react-router-dom";
export default function App() {
  const [data, setData] = useState(null);
  const apiurl = "https://api.publicapis.org/entries";
  const Fetching = async () => {
    const data = await axios
      .get(apiurl)
      .then((data) => setData(data.data.entries));
  };
  useEffect(() => {
    Fetching();
  }, []);
  if (!data) {
    return <div className="main">loading</div>;
  } else {
    console.log(data);
    return (
      <div className="main_app">
        <nav className="navigation">
          <h2 className="apies">
            API<span> store</span>
          </h2>
        </nav>
        <div className="main_api_entries">
          {data &&
            data.map((singleApi) => (
              <div className="main_single_api_container">
                <h3 className="name">name: {singleApi.API}</h3>
                <h3 className="auth">req auth: {singleApi.Auth}</h3>
                <h3 className="category">category: {singleApi.Category}</h3>
                <h3 className="discription">
                  discription: {singleApi.Description}
                </h3>
                <h3 className="http">http? :{singleApi.HTTPS}</h3>
                <a href={singleApi.Link}>go to the webiste</a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
