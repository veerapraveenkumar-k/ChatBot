ChatBot using Gemini API:
A conversational AI chatbot built with a modern full-stack architecture, integrating the Gemini API for natural language understanding. This project demonstrates a client-server model using JavaScript technologies.

Features:
1.Conversational AI: Engages users in dynamic conversations using the Gemini API.
2.Full-Stack Architecture: Structured with separate client and server directories for modular development.
3.Modern JavaScript: Utilizes contemporary JavaScript practices for both frontend and backend.

Project Structure:
ChatBot/
├── client/        # Frontend application
└── server/        # Backend application

Prerequisites:
* Node.js: Ensure you have Node.js installed. You can download it from here.
* Gemini API Key: Obtain an API key from the Gemini API provider.

Installation:
1.Clone the Repository:
git clone https://github.com/veerapraveenkumar-k/ChatBot.git
cd ChatBot

2.Install Dependencies:
Client: 
cd client
npm install

Server:
cd ../server
npm install

3.Configure Environment Variables:
Create a .env file in the server directory and add your Gemini API key:
GEMINI_API_KEY=your_api_key_here

Usage:
1.Start the Server:
cd server
nodemon app.js

2.Start the Client:
cd ../client/chatbot
npm start

Access the Application:
Open your browser and navigate to http://localhost:3000 to interact with the chatbot.

Technologies Used:
* Frontend: JavaScript (details depend on the specific framework or library used)
* Backend: Node.js, Express.js
* API Integration: Gemini API for natural language processing

Contact:
For any inquiries or feedback, please contact veerapraveenkumar-k.
