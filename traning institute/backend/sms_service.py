import requests

FAST2SMS_API_KEY = "YOUR_REAL_FAST2SMS_API_KEY"

def send_sms(phone, message):
    try:
        url = "https://www.fast2sms.com/dev/bulkV2"

        payload = {
            "route": "v3",
            "sender_id": "TXTIND",
            "message": message,
            "numbers": phone
        }

        headers = {
            "authorization": FAST2SMS_API_KEY,
            "Content-Type": "application/json"
        }

        response = requests.post(url, json=payload, headers=headers)

        print("📱 SMS STATUS:", response.status_code)
        print("📱 SMS RESPONSE:", response.json())

    except Exception as e:
        print("❌ SMS ERROR:", e)