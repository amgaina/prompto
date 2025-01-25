# Prompto

**Discover and Share AI-Powered Prompts**

Prompto is an innovative AI-driven platform designed to help you explore, create, and share imaginative prompts with ease. Built with Next.js, Tailwind CSS, GPT-4, MongoDB, Mongoose, and NextAuth, Prompto delivers a seamless and secure user experience.

## Features

- **Explore Prompts**: Browse through a variety of AI-powered prompts shared by the community.
- **Create Prompts**: Use GPT-4 assistance to craft your own unique prompts.
- **Share Prompts**: Publish and showcase your creations with others.
- **Authentication**: Secure user authentication with NextAuth.
- **Responsive Design**: A fully responsive interface built with Tailwind CSS.
- **Database Integration**: Reliable data management using MongoDB and Mongoose.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, GPT-4 integration
- **Database**: MongoDB, Mongoose
- **Authentication**: NextAuth

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](v16 or higher)
- [npm]
- [MongoDB]
- [next-auth]
- [mongoose]

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amgaina/prompto.git
   cd prompto
   ```
2. Install dependencies
  ```bash
  npm install
  ```
3. Configure Environment variables
  ```bash
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=your_nextauth_secret
  
  MONGODB_URI=your_mongodb_connection_string
  
  GPT_API_KEY=your_gpt_api_key
  ```
4. Start the development server
  ```bash
npm run dev
```
Follow your hosting provider's deployment guide (e.g., Vercel, Netlify) to deploy Prompto.

