# URL Summarizer

Welcome to the URL Summarizer project! This is a handy web application that lets you quickly summarize the content of any website. Just paste in a URL, and our AI-powered tool will fetch the page's text, generate a concise summary, and even provide 5 key points at the end. It's perfect for getting the gist of articles, blogs, or any web page without reading through everything.

The project is split into two main parts: a backend built with Flask (Python) that handles the heavy lifting like web scraping and AI summarization, and a frontend built with React (JavaScript) that gives you a simple, user-friendly interface to interact with.

## Features
- **Easy URL Input**: Enter any website URL and get a summary in seconds.
- **AI-Powered Summaries**: Uses Google's Gemini AI to create smart, readable summaries.
- **Markdown Rendering**: Summaries are displayed in a clean, formatted way.

## Prerequisites
Before you get started, make sure you have these installed on your machine:
- **Python 3.8+**: For running the backend Flask server.
- **Node.js and npm**: For the frontend React app.
- **Google Gemini API Key**: You'll need a free API key from Google AI Studio to enable the summarization feature.

## Getting Started

### 1. Clone or Download the Project
If you haven't already, get the project files into a folder on your computer.

### 2. Set Up the Backend (Flask)
The backend is the brain of the operation—it scrapes websites and talks to the AI.

1. Open a terminal and navigate to the `backend` folder:
   ```
   cd backend
   ```

2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
   (Note: If you're on Windows, you might need to use `pip3` instead of `pip`.)

3. Get your Google Gemini API key:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey) and create a free API key.
   - Open `backend/app.py` in a text editor.
   - Find the line `API_KEY = "API_KEY"` and replace the placeholder with your actual API key.

4. Run the Flask server:
   ```
   python app.py
   ```
   You should see something like "Running on http://127.0.0.1:5000/". Keep this terminal open—the backend needs to be running for the frontend to work.

### 3. Set Up the Frontend (React)
The frontend is the friendly face that lets you use the app in your browser.

1. Open a new terminal (keep the backend one running) and navigate to the `frontend` folder:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   This will open your browser to something like "http://localhost:5173/" where you can use the app!

## How to Use
1. With both servers running, go to the frontend URL in your browser.
2. Enter a website URL in the input box (e.g., https://en.wikipedia.org/wiki/India).
3. Click "Generate" and wait for the magic to happen.
4. Your summary will appear below, complete with key points.

## Troubleshooting
- **Backend not starting?** Make sure Python is installed and your API key is correct.
- **Frontend not loading?** Ensure the backend is running first, and check that Node.js is up to date.
- **Summarization failing?** Double-check your API key and internet connection.
- If you run into CORS issues, the Flask app has CORS enabled, but let us know if problems persist.

## Contributing
Feel free to improve this project! If you spot bugs or have ideas, open an issue or submit a pull request.

Enjoy summarizing the web! 🚀
