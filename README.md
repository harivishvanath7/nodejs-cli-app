# 📝 Task Tracker CLI (Node.js)

A simple **Command Line Interface (CLI)** application built using **pure Node.js** to manage your daily tasks directly from your terminal.  
You can add, update, delete, and mark tasks as done or in progress — all saved locally in a JSON file.  
No external libraries or frameworks are used.

---

## 🚀 Features

- ➕ Add new tasks  
- ✏️ Update existing tasks  
- ❌ Delete tasks  
- ⚙️ Mark tasks as **todo**, **in-progress**, or **done**  
- 📋 List all tasks or filter by status  
- 💾 Persistent storage in `tasks.json`  
- 🧱 Built with **Node.js core modules (`fs`, `path`)**  
- 🧩 No external dependencies — lightweight and portable  

---

## 📂 Project Structure

```
task-tracker/
├── task-cli.js       # Main CLI script
├── tasks.json        # Auto-created data file (stores tasks)
├── package.json      # NPM configuration
└── README.md         # Project documentation
```

---

## ⚙️ Setup Instructions

### Create and Open the Project Folder
```bash
mkdir task-tracker
cd task-tracker
```

### Initialize Node.js
```bash
npm init -y
```

---

### Create the CLI File
Create a file named **task-cli.js** and paste the complete Node.js script inside it.

---

## ▶️ How to Use

Run all commands using Node.js in your terminal.

### ➕ Add a new task
```bash
node task-cli.js add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

### ✏️ Update a task
```bash
node task-cli.js update 1 "Buy groceries and cook dinner"
# Output: Task updated successfully (ID: 1)
```

### ❌ Delete a task
```bash
node task-cli.js delete 1
# Output: Task deleted successfully (ID: 1)
```

### ⚙️ Mark a task as in-progress or done
```bash
node task-cli.js mark-in-progress 2
node task-cli.js mark-done 2
# Output: Task (ID: 2) marked as done
```

### 📋 List all tasks
```bash
node task-cli.js list
```

### 🔍 List tasks by status
```bash
node task-cli.js list done
node task-cli.js list todo
node task-cli.js list in-progress
```

---

## 🧠 Task Data Format

Each task in **tasks.json** follows this structure:

```json
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2025-10-16T10:00:00.000Z",
  "updatedAt": "2025-10-16T10:00:00.000Z"
}
```

---

## 💻 Example Session

```bash
node task-cli.js add "Buy groceries"
node task-cli.js add "Complete homework"
node task-cli.js list

node task-cli.js mark-in-progress 1
node task-cli.js list in-progress

node task-cli.js mark-done 2
node task-cli.js list done

node task-cli.js update 1 "Buy groceries and cook dinner"
node task-cli.js delete 2
```

---

## 🧰 Built With

- **Node.js** – for running JavaScript in terminal  
- **fs module** – for file operations  
- **path module** – for handling file paths  

---

## 🏗️ Future Enhancements

- 🎨 Add colored output and formatted tables  
- 📊 Show progress summary (e.g. “3/10 tasks done”)  
- 🔄 Sort tasks by date or status  
- 💾 Backup or sync tasks to cloud storage  
- ⚡ Interactive mode (add/update without arguments)  

---

## 🛡️ Requirements

- Node.js v14 or above  
- Any OS terminal (Windows, macOS, or Linux)  

---

## 👨‍💻 Author

**Hari Vishvanath**
