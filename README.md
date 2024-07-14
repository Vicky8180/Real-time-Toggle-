# Real-Time Toggle Website

A real-time toggle website that leverages modern web technologies including Socket.io, React, Node.js, and Express.

# Live https://real-time-toggle.vercel.app/

![15 07 2024_01 01 37_REC](https://github.com/user-attachments/assets/2c3f6960-bd38-4d62-aff6-7c117fb581d0)


https://github.com/user-attachments/assets/d9dd99cc-09da-4fa5-a3d8-7093b8edda51


## Features

- Real-time updates using WebSockets.
- Backend API using Node.js and Express.
- Responsive and interactive UI built with React.

## Technology Stack

- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **WebSockets**: Socket.io
- **State Management**: Redux , MOngodb

## Installation

1. Clone the repository:

    ```bash
    git clone [https://github.com/your-username/realtime-toggle-website.git](https://github.com/Vicky8180/Real-time-Toggle-)
    cd realtime-toggle-website
    ```

2. Install dependencies:

    ```bash
    # For backend
    cd server
    npm install

    # For frontend
    cd ../client
    npm install
    ```

3. Start the development server:

    ```bash
    # Start backend
    cd server
    npm start

    # Start frontend
    cd ../client
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to view the frontend.
2. The backend API will be running on `http://localhost:5000`.

## Project Structure

```plaintext
realtime-toggle-website/
├── client/                # React frontend
│   ├── public/            # Public assets
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── store/         # Redux store configuration
│   │   ├── App.js         # Main App component
