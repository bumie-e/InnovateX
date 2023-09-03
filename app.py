from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = 'API key'

@app.route("/")
def index():
    return render_template('chat.html')

@app.route("/get", methods=["POST"])
def chat():
    user_input = request.form.get("msg")
    response = generate_response(user_input)
    return jsonify({"response": response})

def generate_response(user_input):
    # Use the OpenAI GPT-3 API to generate a response
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"User: {user_input}\nAI:",
        max_tokens=50  # Adjust this based on your desired response length
    )
    return response.choices[0].text.strip()

if __name__ == "__main__":
    app.run()
