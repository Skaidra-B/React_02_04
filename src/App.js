import './App.css';
import AddPhoto from "./components/AddPhoto";
import ShowPhoto from "./components/ShowPhoto";

function App() {

    return (
        <div className="d-flex column">
            <AddPhoto/>
            <ShowPhoto/>
        </div>
    );
}

export default App;
