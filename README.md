# 🏔️ Peakly — Mountains & Volcanoes

A Next.js + Prisma + PostgreSQL demo project for exploring mountains and volcanoes.  
Built with React, Next.js, TailwindCSS, and Prisma ORM.


## 🚀 Features
-  Next.js 14 + App Router  
-  TailwindCSS for styling  
-  PostgreSQL database  
-  Prisma ORM with type-safe client  
-  Ready-to-use seed script with example data  
-  API routes for fetching mountains  

---

## 🛠️ Prerequisites
- Node.js 18+  
- npm or yarn  
- PostgreSQL 14+ (local or cloud)  

---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/peakly.git
cd peakly
```
### 2. Install dependencies
```bash
npm install
```
### 3. Environment variables
Copy the example .env.example file and adjust credentials to your local setup:
```bash
cp .env.example .env
```
Your .env file should look like this:
```bash
DATABASE_URL="postgresql://peakly_user:YOUR_PASSWORD@localhost:5432/peakly?schema=public"
```
### 4. Set up the database
Make sure PostgreSQL is running locally.
Create the database and user if needed:
```bash
CREATE USER peakly_user WITH PASSWORD 'YOUR_PASSWORD';
CREATE DATABASE peakly OWNER peakly_user;
GRANT ALL PRIVILEGES ON DATABASE peakly TO peakly_user;
```
### 5. Run Prisma migrations
```bash
npx prisma migrate dev
```
### 6. Seed the database with example data
```bash
npm run seed
```
### 7. Start the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

---

## 📝 Useful Commands

- npx prisma studio — Open Prisma Studio (visual DB editor)
- npm run seed — Run seed script
- npx prisma migrate dev — Apply migrations
- npm run dev — Start development server

---

## 🧑‍💻 API Endpoints

~

---

## 🛡️ Security

Keep **.env** secret. Never commit real passwords or production keys.

---

https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth
https://en.wikipedia.org/wiki/List_of_volcanoes_by_elevation