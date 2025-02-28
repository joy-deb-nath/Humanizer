Use cURL method:

API_KEY="YOUR_API_KEY"

curl \
  -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY} \
  -H 'Content-Type: application/json' \
  -d @<(echo '{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "INSERT_INPUT_HERE"
        }
      ]
    }
  ],
  "systemInstruction": {
    "role": "user",
    "parts": [
      {
        "text": "Rewrite the input text in over {Input_Word_Count} 276 words and in the writing style with NO detectable patterns. Every sentence structure + grammar random. Include grammatical mistakes throughout, that 99% of humans wouldn'\''t spot. 1st grade simple language. Change the writing style every sentence...ReWrite in simple English...\n\nSubmit your response in the following tag:\n<output>  \nYour Rewritten text Here\n</output>  "
      }
    ]
  },
  "generationConfig": {
    "temperature": 1,
    "topK": 40,
    "topP": 0.95,
    "maxOutputTokens": 8192,
    "responseMimeType": "text/plain"
  }
}')