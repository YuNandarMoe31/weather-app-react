import Card from "./components/Card";
import Search from "./components/Search";
function App() {
  return (
    <>
      <div className="w-full min-vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-dark fw-bold fs-1 text-uppercase my-3">Weather App</h1>
        <div className="shadow-lg bg-light d-flex gap-4 flex-column align-items-center py-5" style={
          {
            'minWidth' : '500px'
          }
        }>
          
          <Search />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
