# Hostel316 Server

## Description

Hostel316 is a Hostel Management system designed for university administrators to efficiently manage student meals and food reviews. This server-side application handles various functionalities such as user management, meal management, payment processing, and more. [client repo](https://github.com/shaishabcoding/hostel-elite-client.git)

## Admin Credentials

- **Username:** admin@gmail.com
- **Password:** admin123

## Live Site URL

[Hostel316 Server Live Site](https://hostel316.vercel.app)

## Features

1. **User Management**: Manage user accounts with roles and permissions.
2. **Meal Management**: Add, edit, and delete meals with details such as title, likes, reviews, and distributor.
3. **Review System**: Allow users to leave reviews for meals.
4. **Authorization**: Implement role-based access control for admin-specific functionalities.
5. **Search and Filter**: Easily search and filter meals based on various criteria such as category, price, and title.
6. **Pagination**: Implement pagination for displaying a limited number of meals at a time.
7. **Stripe Integration**: Enable secure payment processing using the Stripe API for purchasing meal packages.
8. **Token-based Authentication**: Implement token-based authentication for user authorization and access control.
9. **Admin Dashboard**: Provide an intuitive dashboard interface for admins to monitor and manage meals, users, and payments.
10. **Responsive Design**: Ensure compatibility across devices with a responsive user interface.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shaishabcoding/hostel316-server.git
cd hostel316-server
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables: Create a `.env` file and define the following variables:

```
PORT=3000
DB_URL=mongodb://localhost:27017/mealDB
NODE_ENV=development
BCRYPT_SALT_ROUNDS=10
JWT_ACCESS_TOKEN_SECRET=
JWT_REFRESH_TOKEN_SECRET=
JWT_ACCESS_TOKEN_EXPIRE=1h
JWT_REFRESH_TOKEN_EXPIRE=15d
MAIL_PASS=mail_pass
MAIL=shaishab316@gmail.com
RESET_PASS_UI_LINK=http://localhost:3000
SUPER_ADMIN_EMAIL=admin@gmail.com
SUPER_ADMIN_PASS=admin123
STRIPE_SK_KEY=
```

4. Start the server:

```bash
npm run dev
```

## API Documentation

[Postman docs](https://documenter.getpostman.com/view/34549363/2sAYBbdUEx)

## Dependencies

- `cors`: ^2.8.5,
- `dotenv`: ^16.4.5,
- `express`: ^4.19.2,
- `jsonwebtoken`: ^9.0.2,
- `mongoose`: ^8.8.3,
- `zod`: ^3.23.8,
- `stripe`: ^15.9.0

## License

[MIT](LICENSE)

---

Feel free to customize it further to fit your project's specific details and requirements!
