import axios from "axios";
import {saveAs} from "file-saver";

const FILENAME = "BaboonMD.pdf";

export default async function saveAsPdf(markdown) {
    const backendUrl = import.meta.env.VITE_API_URL + '/convert';

    try {
        const {data} = await axios.post(
            backendUrl,
            {markdown},
            {responseType: "blob"}
        );
        saveAs(data, FILENAME);
    } catch (err) {
        console.error(err);
        alert("Failed to export PDF. Please try again later."); //TODO
    }
}