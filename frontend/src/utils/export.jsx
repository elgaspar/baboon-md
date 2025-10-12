import axios from "axios";
import {saveAs} from "file-saver";

const FILENAME = "BaboonMD.pdf";

export default async function saveAsPdf(markdown) {
    const backendUrl = import.meta.env.VITE_API_URL + '/convert';

    const response = await axios.post(
        backendUrl,
        {markdown},
        {responseType: "blob"}
    );

    const contentType = response.headers["content-type"];

    if (contentType !== "application/pdf") {
        console.error("Backend did not return a PDF"); //TODO: remove me
        throw new Error("Backend did not return a PDF");
    }

    saveAs(response.data, FILENAME);
}