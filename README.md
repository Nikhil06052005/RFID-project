# 🔍 AI-Powered RFID Lost & Found System

A smart, scalable solution to track and recover lost items in real-time using **RFID, AI, and Cloud integration**.

## 🚨 Problem

Millions of items are lost annually in public places like airports, metros, and hotels, causing **stress, time loss, and security issues**. Traditional lost-and-found systems are manual, slow, and depend heavily on human effort.

## 🚀 Our Solution

An **AI-powered RFID system** that automates the item recovery process:

- RFID tags on items for unique identification
- ESP32 microcontroller and RFID scanner for real-time tracking
- Firebase for secure cloud storage and real-time data sync
- Web-based dashboard for instant alerts and status
- Scalable to smart campuses, public transport, malls, airports, and more

---

## 🌟 Features

- 🎯 Real-time item detection and logging
- 📲 Instant notifications via Web Portal
- 📡 ESP32 + RFID + Firebase integration
- 💻 Clean and responsive UI
- ⚡ Fast, automated, and reliable

---

## 🧩 Dependencies

### 🔧 Software & Web Technologies

| Dependency           | Version / Info        | Purpose                               |
|----------------------|------------------------|----------------------------------------|
| **Arduino IDE**      | 2.2.1+                 | Programming ESP32 microcontroller      |
| **Firebase**         | Latest                 | Cloud database & real-time storage     |
| **HTML / CSS / JS**  | Standard               | Frontend for the web portal            |
| **Bootstrap**        | 5.3                    | UI design and responsiveness           |

### 📚 Arduino Libraries

| Library Name       | Purpose                                  |
|--------------------|-------------------------------------------|
| `MFRC522`          | To interface with RFID RC522 module       |
| `SPI`              | SPI communication between ESP32 and RFID  |
| `WiFi`             | ESP32 WiFi connectivity                   |
| `HTTPClient`       | Send data to Firebase or external server  |

### ⚙️ Hardware Components

| Component                | Purpose                                 |
|--------------------------|------------------------------------------|
| **ESP32**                | Core controller and processor            |
| **RFID Scanner (RC522)** | Detects RFID-tagged items                |
| **RFID Tags**            | Attached to items                        |
| **Jumper Wires**         | Circuit connections                      |
| **Breadboard**           | Hardware prototyping platform            |

---

## 🛠️ Setup Instructions

1️⃣ Clone the repository git clone https://github.com/Nikhil06052005/CodeForge.gitcd

2️⃣ Open the frontend
Open index.html in your browser to run the web app.

3️⃣ Hardware Setup
Open the Arduino code in Arduino IDE.

Select ESP32 board from the board manager.

Connect the RFID scanner, RFID tag, and ESP32 microcontroller on a breadboard as per the circuit diagram.

Upload the Arduino code to the ESP32.

4️⃣ Firebase Setup
Replace the Firebase config in the code with your own Firebase project credentials (both in Arduino code and website if required).

Ensure Firebase Realtime Database is enabled.

5️⃣ You're ready to go! 🚀

🖼️ Screenshots 

📊 Dashboard and 🔑Login Page https://drive.google.com/drive/folders/1GEwAj8k6PxM7n1XuxAKo1ssfxcFo3m4T?usp=drive_link

🎥 Demo Video
Watch the Video https://youtube.com/shorts/fNc4tfdzuwY?feature=share

👥 Team Members

Harshvardhan – Hardware & Cloud Integration

Nikhil – Website Developer

Sneha – UI Designer & Frontend Support

Shivam Tripathi – Project Lead, Media, Hardware Support & Integration

🧠 Future Plans

📍 GPS-based lost-item alerts

🎥 Use computer vision to identify objects via CCTV

📱 Build a mobile app version for wider accessibility

📜 License

This project is licensed under the MIT License.

Made with ❤️ by Team Hackerworld_Geeks for the CodeForge Hackathon
