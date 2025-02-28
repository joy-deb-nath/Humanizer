### **App Flow / User Flow**  

1. **Landing on the Web App**  
   - The user visits the web app.  
   - The interface displays an input box for text entry, action buttons, and an initially hidden AI detection result section.  

2. **Entering or Pasting Text**  
   - The user can either:  
     - Manually type text into the input box.  
     - Paste copied text.  
     - Click **"Try A Sample"** to auto-fill sample text.  

3. **Checking for AI-Generated Content** *(Optional Step)*  
   - The user clicks the **"Check for AI"** button.  
   - The AI detection component becomes visible.  
   - A loading animation appears for **3 seconds** while the text is analyzed.  
   - The result is displayed as either:  
     - **"This text is AI-generated"** (if the content is detected as AI-written).  
     - **"This text is human-written"** (if the content is considered human-like).  

4. **Humanizing AI-Generated Text**  
   - The user clicks the **"Humanize"** button.  
   - The AI processes the text and generates a humanized version.  
   - A loading animation appears while processing.  
   - After completion, the **Humanized Output** is displayed in the adjacent output box.  

5. **Verifying the Humanized Text** *(Optional Step)*  
   - The AI detection component appears again.  
   - A loading animation runs for **3 seconds**.  
   - The result confirms the text is now **"Human-written"**.  

6. **Copying the Humanized Text**  
   - The user clicks the **Copy** icon to copy the transformed text.  

7. **Resetting the Input & Output** *(Optional Step)*  
   - The user can clear the text boxes to start a new session.  

8. **User Exit or Further Interaction**  
   - The user may repeat the process with different text.  
   - They may explore pricing, features, or other sections of the web app.