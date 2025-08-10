from flask import Blueprint, request, jsonify
from flask_cors import CORS 
from services.n8n_service import send_data_to_n8n

project_bp = Blueprint('project', __name__)
CORS(project_bp)
@project_bp.route('/submit-project', methods=['POST'])
def submit_project():

    if not request.is_json:
        return jsonify({"message": "Task should be JSON."}), 400

    data = request.get_json()
    employees = data.get('employees')
    goals = data.get('goals')

    if not employees:
        return jsonify({"message": " No data about employees."}), 400

    for g in goals:
     if not g.get('name') or not g.get('deadline'):
        return jsonify({"message": " No deadline or goal name."}), 400

    for emp in employees:
        if not all(k in emp for k in ['firstName', 'lastName', 'position', 'experience']):
            return jsonify({"message": "Employee data not filled."}), 400

    try:
        n8n_response = send_data_to_n8n(data)
        return jsonify({
            "message": "Send to n8n!",
            "n8n_response": n8n_response
        }), 200
    except ValueError as ve:
        return jsonify({"message": f"Error: {str(ve)}"}), 500
    except Exception as e:
        print(f"An error occurred during project submission: {e}")
        return jsonify({"message": f"Error of a server: {str(e)}"}), 500