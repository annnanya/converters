import Papa from 'papaparse';
import { useState } from "react";
import '../style.css';
const CsvtoJson = () => {
    const [csvContent, setCsvContent] = useState("")
    const [jsonContent, setJsonContent] = useState("")

    const onChange = (event) => {
        setCsvContent(event.target.value)
    }

    const onSubmit = (event) => {
        let jsonResponse = Papa.parse(csvContent, {
            header: true
        })
        setJsonContent(jsonResponse.data);
        console.log("jsonResponse", jsonResponse)
        // const CsvFileName = event.currentTarget.form[0].files[0].name;
        // Papa.parse(CsvFileName, {
        //     complete: function (results) {
        //         debugger
        //         console.log("results", results.data);
        //         setCsvFile(results.data[0])
        //     },
        //     error: (error) => {
        //         console.error('Error:', error);
        //     }
        // });
    }

    return (
        <>
            <div >
                <textarea id="csv" className="textStyle" rows="40" cols="60" onChange={(event) => onChange(event)} />
                <button type="submit" className="btnStyle" onClick={(event) => onSubmit(event)}>CSV - JSON</button>
                <textarea id="json" className="textStyle" rows="40" cols="60" value={JSON.stringify(jsonContent, null, 2)} readOnly />
                {/* <input type="file" onClick={(event) => onChange(event)} /> */}
            </div>
        </>
    )
}
export default CsvtoJson;