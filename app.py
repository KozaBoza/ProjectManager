import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
from routes.project_routes import project_bp #blueprint = zestaw tras

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3001"}}) #zapytania z innych domen
app.register_blueprint(project_bp) #rejestrujemy bp

@app.route('/') #definicja prostej trasy; GET, gdy ktos otworzy strone glowna --> /
def home():
    return jsonify({"message": "Backend dziala"})

if __name__ == '__main__': #pobieramy z env
    debug_mode = os.getenv('FLASK_DEBUG', 'True').lower() in ('true', '1', 't')
    host = os.getenv('FLASK_HOST', '0.0.0.0') #na jakim hoscie
    port = int(os.getenv('FLASK_PORT', 5000)) #info o porcie

    print(f"Flask app running on http://{host}:{port} with DEBUG={debug_mode}")
    app.run(debug=debug_mode, host=host, port=port) #uruchomienie serwera