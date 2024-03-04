import logo from "./logo.svg";
import "./App.css";
import ChartWrapper from "./components/ChartWrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WidgetWrapper from "./components/WidgetWrapper";
function App() {
  return (
    <div className="App">
      <Header />
      <WidgetWrapper />
      <ChartWrapper />
      <Footer />
    </div>
  );
}

export default App;
