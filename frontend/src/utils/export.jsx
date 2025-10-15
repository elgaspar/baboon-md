import axios from 'axios';
import { saveAs } from 'file-saver';

const FILENAME = 'BaboonMD.pdf';

export default async function saveAsPdf(markdown) {
    const apiBase = import.meta.env.VITE_API_URL;

    if (!apiBase) {
        throw new Error('❌ Backend base URL is not defined.');
    }

    const backendUrl = `${apiBase}/convert`;

    const response = await axios.post(backendUrl, { markdown }, { responseType: 'blob' });

    const contentType = response.headers['content-type'];

    if (contentType !== 'application/pdf') {
        console.error('Backend did not return a PDF');
        throw new Error('Backend did not return a PDF');
    }

    saveAs(response.data, FILENAME);
}
