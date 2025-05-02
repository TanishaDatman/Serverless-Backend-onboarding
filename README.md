# Serverless Backend Project (Offline Mode)

This is a serverless backend project built using the Serverless Framework, Node.js, and AWS as the provider. The backend runs **locally (offline)** for development and testing purposes. The project includes request validation using **Joi**.

## 🚀 Features

- ⚙️ Serverless framework for simplified deployment and local development
- 🟢 Node.js runtime
- 🌩️ AWS Lambda functions (offline using serverless-offline plugin)
- ✅ Input validation using Joi
- 📂 Structured handler-based API endpoints

---

## 📦 Tech Stack

- Serverless Framework
- Node.js
- AWS Lambda (via serverless-offline)
- Joi (for input validation)
- Local development only (no deployment to AWS)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Run Offline

```bash
npm install -g serverless
serverless offline
```
