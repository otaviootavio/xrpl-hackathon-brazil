# PennyPass
Demo video: [Click here!](https://drive.google.com/file/d/1YiKfa2iLOTz2nxDa38giCTIWLIYVoxs3/view?usp=sharing)

This platform is designed for avid readers who wish to access a wide range of articles, paying only for the time they spend reading.
## How It Works
User Flow
- **User Registration and Login**: Users start by creating an account and logging in to access the articles.
- **Sending XRP to Server Wallet**: Users send Ripple (XRP) to the designated server wallet. This transaction is the initial step to load credits into their account.
- **Credit Storage and Time Tracking**: Once the XRP is received, the server stores these as credits in the user's account. Our system then tracks the user's reading time, deducting from the credits at a rate based on screen time.
- **Reading and Charging**: Users are charged based on the amount of time they spend reading articles. This charge is calculated every 2 seconds of screen time.

## Technical Details
**Server-Side Implementation**
- **Full-Stack Server Using Express**: Our server is built using Express, a flexible Node.js web application framework. This backend setup efficiently handles requests, manages user data, and interacts with the Ripple blockchain.
- **Use of xrpl.js Client**: We utilize xrpl.js, a Ripple Client for Node.js. It's responsible for two main functions:
- **Receiving Payments**: The xrpl.js client listens for incoming XRP transactions to the server wallet.
- **Transaction Verification**: After receiving a transaction, the client verifies both the amount and the destination of the XRP. This ensures that the credits are accurately allocated to the user's account.

## User Experience
- **Real-Time Credit Updates**: As users read, their credit balance updates in real time, reflecting the deduction based on their reading time.
- **Transparent and Fair Charging**: Users are only charged for the time they actively spend on a page, ensuring a fair billing system.

## FAQs
### How do I load credits into my account?
Simply send XRP to the provided server wallet address. Your account will be credited once the transaction is verified.

### How is my reading time calculated?
Your reading time is tracked from the moment an article is opened until it is closed, with charges accruing every 2 seconds of screen time.


### What if I close an article mid-reading?
Charges cease the moment you close an article, ensuring you only pay for the time you actually spent reading.

### Is my XRP safe?
Yes, transactions are secured through the Ripple blockchain, and our platform employs robust security measures to protect your assets and personal data.

------

## How to Run the Code

To get your reading website with Ripple micropayments up and running, follow these steps. This guide assumes you have a basic understanding of Docker, Node.js, and TypeScript.
Prerequisites

- Docker installed on your machine.
- Node.js (preferably the latest stable version).

# Project Structure

Your project is structured as follows:
```bash.
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── prisma
│   └── schema.prisma
├── public
│   └── styles.css
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── paymentController.ts
│   │   └── userController.ts
│   ├── index.ts
│   ├── middleware
│   │   ├── isAuthenticated.ts
│   │   └── paymentRequired.ts
│   ├── passportConfig.ts
│   ├── routes
│   │   ├── authRoutes.ts
│   │   ├── paymentRoutes.ts
│   │   └── userRoutes.ts
│   ├── services
│   │   ├── authService.ts
│   │   └── paymentService.ts
│   └── views
│       ├── articles
│       │   ├── article1_full.ejs
│       │   ├── article1_preview.ejs
│       │   ├── article2_full.ejs
│       │   ├── article2_preview.ejs
│       │   ├── article3_full.ejs
│       │   └── article3_preview.ejs
│       ├── error.ejs
│       ├── home.ejs
│       ├── login.ejs
│       ├── partials
│       │   ├── _articleList.ejs
│       │   └── _navbar.ejs
│       ├── payment.ejs
│       ├── register.ejs
│       └── template.ejs
└── tsconfig.json
```

## Steps to Run

### Build and Run Docker Containers
Navigate to the root directory of the project where docker-compose.yml is located.

Run the following command to build and start the containers:

```bash
docker-compose up --build
```

    This command will set up the necessary environment for your application, including the Node.js server and any other services defined in your docker-compose.yml.

### Installing Dependencies
Your package.json list all the necessary dependencies.
Normally, Docker would handle this for you. However, if you need to manually install them for any reason, run:

```bash
npm install
```

### Running the Application
To run the application in development mode, use the script defined in your package.json:

```bash
npm run dev
```
This will start the server using nodemon and ts-node, enabling hot reloading for development.

### Building for Production
To compile TypeScript to JavaScript for production, run:
```bash
npm run build
```

Then, to start the production server, use:
```bash
npm start
```

### Accessing the Application
Once the server is running, you can access your application via the browser at the address provided by Docker (usually localhost with the port defined in your Docker configuration).

### Additional Notes:
- Ensure your .env file or equivalent is correctly set up with necessary environment variables, especially for XRPL client and database configurations.
- Regularly update dependencies and check for any compatibility issues.
- Make sure to test the application thoroughly, particularly the payment handling and user authentication flows.
- For any complex issues related to Docker or specific dependencies, refer to the official documentation or community forums for those technologies.
