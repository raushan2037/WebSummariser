import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown';
import CircularProgress from '@mui/material/CircularProgress';
import { getSummary } from './API/api';

function App() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const response = await getSummary(url);

    try {
      const data = response.data;
      console.log(response);

      if (response.statusText == "OK") {
        console.log("ok check");
        setResult(data.text);
      } else {
        setError(data.error || 'Something went wrong');
      }

    } catch (e) {
      console.log("Error getting Summary", e)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Website Summariser</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="url"
          placeholder="Enter URL (e.g. https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Generate'}
        </button>
      </form>


      <hr style={{ width: "100%" }} />

      <h3>Generated Summary: </h3>
      {
        loading && (
          <CircularProgress size="100px" style={{marginTop: "50px"}}/>
          
        )
      }


      {
        result && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#f4f4f4', borderRadius: '8px', textAlign: 'left'}}>

            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )
      }

      {
        error && (
          <div>
            {error}
          </div>
        )
      }
    </>


  )
}

export default App
