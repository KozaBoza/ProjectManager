import os #zmienne srodowiskowe
import requests #zapytania http 
from typing import Dict, Any #funkcja bedzie przyjmowac i zwracac slowniki o dowolnej zaw

def send_data_to_n8n(payload: Dict[str, Any]) -> Dict[str, Any]:
    n8n_webhook_url = os.getenv('N8N_WEBHOOK_URL')

    if not n8n_webhook_url:
        raise ValueError("N8N_WEBHOOK_URL environment variable is not set.")

    print(f"Sending data to n8n webhook: {n8n_webhook_url}")
    print(f"Payload: {payload}")

    headers = {'Content-Type': 'application/json'}

    try:
        response = requests.post(n8n_webhook_url, json=payload, headers=headers, timeout=10)
        response.raise_for_status()  

        print(f"Successfully sent data to n8n. Status: {response.status_code}")
        return response.json() if response.content else {"message": "Request successful, but no JSON response from n8n."}
    except requests.exceptions.Timeout:
        raise requests.exceptions.RequestException("Request to n8n webhook timed out.")
    except requests.exceptions.ConnectionError:
        raise requests.exceptions.RequestException("Could not connect to n8n webhook URL. Is n8n running and accessible?")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error from n8n: {e.response.status_code} - {e.response.text}")
        raise requests.exceptions.RequestException(f"n8n webhook returned an error: {e.response.text}")
    except Exception as e:
        print(f"An unexpected error occurred while sending to n8n: {e}")
        raise requests.exceptions.RequestException(f"An unexpected error occurred: {str(e)}")