# Mern-Stack-TravelDiaries

Welcome to **Mern-Stack-TravelDiaries** — a full-stack travel diary application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project enables users to share, explore, and manage travel experiences in a modern, responsive web app.

## Features

- **User Authentication:** Secure registration and login system.
- **Diary Creation:** Users can create, edit, and delete travel diaries with rich media support.
- **Interactive Map:** Visualize travel locations using interactive maps.
- **Commenting & Likes:** Engage with other users’ diaries through comments and likes.
- **Responsive Design:** Optimized for all devices.
- **RESTful API:** Robust backend for managing user and diary data.

## Technologies Used

- **Frontend:** React, Redux, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt
- **Deployment:** (e.g., Heroku, Vercel, or your choice)

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KingPraise/Mern-Stack-TravelDiaries.git
   cd Mern-Stack-TravelDiaries
   ```

2. **Install dependencies:**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the backend directory.
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application:**
   - Start backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start frontend client:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the App:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
Mern-Stack-TravelDiaries/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to open an issue or contact [KingPraise](https://github.com/KingPraise).

---

**Mern-Stack-TravelDiaries** — Share your journeys, inspire others!