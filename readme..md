# React Monorepo

## 🚀 Overview
This is a **React Monorepo** containing multiple React Vite applications under a single repository. The monorepo structure allows for better dependency management, code sharing, and streamlined development across multiple projects.

## 📂 Project Structure
```
React-Monorepo/
├── apps/
│   ├── 01-app/      # for understanding the structure and jsx
│   ├── 02-hello-ts/   # using typescript for static type checking
│   ├── 03customReact/      # writing my own custom rendering logic
│   ├── 04vite-react/      # using vite bundler instaed of create-react-app
│   ├── 05_hooks/      # learning about useState and useEffect
│   ├── 06_Tic_Tac_Toe/      # building a tic-tac-toe game using hooks for state management
│   ├── 07_api_calling/      # using fecth and axios library to fetch data from server and rendering it dynamically
├── package.json   # Root package.json with workspaces
├── node_modules/  # Shared dependencies
├── README.md      # Project documentation
└── .gitignore     # Git ignore file
```

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/aroraritik108/React-Monorepo.git
cd React-Monorepo
```

### 2️⃣ Install Dependencies
Using npm workspaces, install all dependencies at the root level:
```sh
npm install
```

### 3️⃣ Run Individual Applications
To start a specific application, navigate to its directory and run:
```sh
npm run --prefix apps/05_Tic_Tac_Toe dev
```
Replace `05_Tic_Tac_Toe` with `app1` or `app2` to start other applications.

### 4️⃣ Run All Apps Simultaneously
You can use `concurrently` to run all applications at once:
```sh
npm install -g concurrently
npm run dev
```
Add this script in the root `package.json`:
```json
"scripts": {
    "dev": "concurrently \"npm run --prefix apps/app1 dev\" \"npm run --prefix apps/app2 dev\" \"npm run --prefix apps/app3 dev\""
}
```

## 🔧 Build Applications
To build an application:
```sh
npm run --prefix apps/app1 build
```

## 🏗️ Adding a New Application
To add a new React Vite app, follow these steps:
```sh
cd apps
npx create-vite@latest new-app --template react
```
Then, add it to the `package.json` workspaces:
```json
"workspaces": [
    "apps/*"
]
```

## 🛠️ Common Issues & Fixes
- **Error: Module Not Found?** Try running:
    ```sh
    rm -rf node_modules package-lock.json && npm install
    ```

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## 📜 License
This project is licensed under the MIT License.

## ⭐ Acknowledgments
Thanks to all contributors and the open-source community for making this possible!

---
### Made with ❤️ for scalable React development 🚀