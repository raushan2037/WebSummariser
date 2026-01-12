from google import genai
import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def fetch_url(url):
    headers = {
        "User-Agent": "Chrome/119.0.0.0"
    }
    response = requests.get(url, headers = headers)
    if response.status_code != 200:
        print("Error in loading page", response.status_code)
        return None

    soup = BeautifulSoup(response.content, "html.parser")

    text = soup.get_text(strip=True)
    return text



def generate_summary(url):
    API_KEY = "AIzaSyBglTlrnOC5w3P6KPHfpSOBNOrEroShIWY"

    client = genai.Client(api_key = API_KEY)

    website_text = fetch_url(url)

    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=f"""
            Summarize the content : {website_text}
            At the the end give 5 summarized points
        """,
    )

    return response.text

# text = generate_summary("https://intglobal.com/")
# print(text)

@app.post('/get-summary')
def Summary():
    data = request.get_json()
    target_url = data.get("url")
    
    if not target_url:
        return jsonify({"error": "No URL provided"}), 400

    extracted_text = generate_summary(target_url)

    if extracted_text:
        return jsonify({
            "url": target_url,
            "text": extracted_text
        }), 200
    else:
        return jsonify({"error": "Failed to generate Summary"}), 500

if __name__ == "__main__":
    app.run(debug=True)