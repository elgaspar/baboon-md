import axios from "axios";
import {saveAs} from "file-saver";

const FILENAME = "BaboonMD.pdf";

export default async function saveAsPdf(markdown) {
    const backendUrl = import.meta.env.VITE_API_URL + '/convert';

    const {data} = await axios.post(
        backendUrl,
        {markdown},
        {responseType: "blob"}
    );
    saveAs(data, FILENAME);
}