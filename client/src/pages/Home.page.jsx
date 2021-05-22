import { useContext, useEffect, useState } from "react";
import Info from "../components/Info.component";
import Map from "../components/Map.component";
import Search from "../components/Search.component";
import { UserContext } from "../context/UserContext";
import { getIpDetails } from "../helper";

function Home() {
  const {user} = useContext(UserContext)

  const [info, setInfo] = useState(null);
  const [ipInput, setIpInput] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getIpDetails(ipInput).then((data) => {
      setInfo(data);
      setIpInput(data.ip)
      setLoading(false)
    })
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!(/^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(ipInput))){
      return setInfo(null)
    } 
    
    setSearch(!search);
  }

  return (
    <div>
      {
        loading && <div className="loader" />
      }
      <div className="container">
        <h1 style={{ color: "#fff" }}>IP Address Tracker</h1>
        <Search ipInput={ipInput} setIpInput={setIpInput} handleSubmit={handleSubmit} />
        <Info info={info} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {info && (
          <Map location={[info.location.lat, info.location.lng]} />
        )}
      </div>
    </div>
  );
}

export default Home;
