import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { api, appId } from "./api";

function App() {

  const [city, setCity] = useState("Gunma")
  const [data, setData] = useState({})

  const fetchData = async () => {
    const res = await api.get(`/weather?q=${city}&appId=${appId}&units=metric`)

    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="w-full min-vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-dark fw-bold fs-1 text-uppercase my-3">Weather App</h1>
        <div className="shadow-lg bg-light d-flex gap-4 flex-column align-items-center py-5" style={
          {
            'minWidth': '500px'
          }
        }>

          <Search />
          <Card data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
