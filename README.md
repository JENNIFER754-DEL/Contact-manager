# Project
# 📞 Contact Manager

A simple React-based contact management application that allows users to **add, search, and display contacts**. It uses **JSON Server** for mock backend API operations.

# BY Craig kibera,Jennifer Wanjiru,Lucky Mamati,Kipngetich Kosgei

## 🚀 Features
- Add new contacts (Name, Email, Mobile Number)
- Search contacts by name, email, or mobile number
- Display a list of contacts
- Real-time filtering of contacts
- Uses `useState` and `useEffect` for state management
- Fetches data from a mock API (`db.json`)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/contact-manager.git
cd contact-manager```

2. Install Dependencies
bash
Copy
npm install
or if you are using Yarn:

bash
Copy
yarn install
3. Set Up JSON Server
For this app, we use JSON Server to simulate a backend API. To get started:

Install JSON Server globally (if not already installed):
```bash
Copy
npm install -g json-server
Start the mock API server. You’ll need a db.json file in the root directory (this contains the data for the mock API).```

```bash
Copy
json-server --watch db.json --port 5000
The mock API will now be running at http://localhost:5000/contacts.```

4. Run the React App
Start the React development server:

```bash
Copy
npm start
or with Yarn:
```

```bash
Copy
yarn start
The app will now be running at http://localhost:3000.```

📂 Project Structure
```bash
Copy
/contact-management-app
├── /public
│   └── index.html               # The HTML template
├── /src
│   ├── /components              # React components for the app
│   ├── App.js                   # Main component where app logic is handled
│   ├── App.css                  # Styles for the app
│   └── index.js                 # Entry point for React
├── db.json                      # Mock database for JSON Server
├── package.json                 # Project metadata and dependencies
└── README.md                    # This README file
```

### How to Use
Adding a Contact
In the app, you can add new contacts by entering the contact's Name, Email, and Mobile Number in the input fields. Click on the "Add Contact" button to save the contact.

#### Searching Contacts
Use the search bar at the top to filter contacts in real-time. You can search by Name, Email, or Mobile Number. The displayed list of contacts will update dynamically as you type.

##### Viewing Contacts
The contact list will display all saved contacts, showing each contact's name, email, and mobile number.

#### Notes
This project is for learning and demonstration purposes. The data is stored in-memory using JSON Server, so the data will not persist if the server is stopped.
If you want to persist data between sessions, consider setting up a real backend database.
##### Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Open a pull request.
##### License
This project is licensed under the MIT License – see the LICENSE file for details.

Feel free to adjust any part of the README to fit your actual project structure or additional features!




