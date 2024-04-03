import './App.css';
import Landing from './landing';
import CsvtoJson from './pages/csvtojson';
import JsonToCsv from './pages/jsontocsv';
import JsonToXls from './pages/jsontoxls';
import XlsToJson from './pages/xlstojson';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/csvtojson" element={<CsvtoJson />} />
            <Route path="/jsontocsv" element={<JsonToCsv />} />
            <Route path="/xlsxtojson" element={<XlsToJson />} />
            <Route path="/jsontoxls" element={<JsonToXls />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
