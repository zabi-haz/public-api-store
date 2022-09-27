import axios from "axios";
import { useEffect, useState } from "react";
import "./style/style.css";
export default function App() {
  const [data, setData] = useState(null);
  const [Searched , setSearched ] = useState("")
  const apiurl = "https://api.publicapis.org/entries";
  const Fetching = async () => {
    await axios
      .get(apiurl)
      .then((data) => setData(data.data.entries));
  };
  useEffect(() => {
    Fetching();
  }, []);
  if (!data) {
    return (
       <div className="loading_container">
        <h2 className="loading_animation">
          loading ...
        </h2>
      </div>
    );
  } else {
    return (
      <div className="main_app">
        <nav className="navigation">
          <h2 className="apies">
            API<span> store</span>
          </h2>
          <input placeholder="search ----" className="search_input" type="text" onChange={(e) => setSearched(e.target.value)} />
        </nav>
        <div className="main_api_entries">
          {
          data && 
           data.filter((item) => {
             if (Searched === ""){
                return item
              }else if(item.Category.toLowerCase().includes(Searched.toLowerCase()))
                {
                return item
              }
           }).map((singleApi) =>(
                <div key={singleApi.Link} className="main_single_api_container">
                <h3 className="name">name: {singleApi.API}</h3>
                <h3 className="auth">req auth: {singleApi.Auth}</h3>
                <h3 className="category">category: {singleApi.Category}</h3>
                <h3 className="discription">
                  discription: {singleApi.Description}
                </h3>
                <h3 className="http">http? :{singleApi.HTTPS}</h3>
                <a href={singleApi.Link}>visit</a>
              </div>
           ) )
        }
        </div>
      </div>
    );
  }
}
