
import { NavLink } from 'react-router-dom';
import './style.css';

const Landing = () => {
    return (
        <>
            <div>
                <h1>Converter</h1>
                <button type="submit" className="btnStyle"><NavLink to="/csvtojson">CSV TO JSON</NavLink></button>
                <button type="submit" className="btnStyle" ><NavLink to="/jsontocsv">JSON TO CSV</NavLink></button>
                <button type="submit" className="btnStyle" ><NavLink to="/xlsxtojson">XLS TO JSON</NavLink></button>
                <button type="submit" className="btnStyle" ><NavLink to="/jsontoxls">JSON TO XLS</NavLink></button>
            </div>
        </>
    )
}

export default Landing;