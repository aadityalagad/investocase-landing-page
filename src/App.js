import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Panel from "./Panel";
import Wrapper from "./Wrapper";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            {/* <div className="temp">Update your Portfolio anytime</div> */}
            <Panel />
            <Wrapper />
        </div>
    );
}

export default App;
