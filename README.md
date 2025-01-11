git clone https://github.com/<your-github-username>/cdp-support-chatbot.git
cd cdp-support-chatbot

Backend Setup
cd src/main/java/com/cdp/chatbot
mvn clean install
mvn spring-boot:run
http://localhost:8080

Frontend Setup
cd frontend
npm install
npm start
http://localhost:3000
