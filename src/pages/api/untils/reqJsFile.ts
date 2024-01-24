import axios from 'axios';

async function fetchJsFile(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchJsFile;
