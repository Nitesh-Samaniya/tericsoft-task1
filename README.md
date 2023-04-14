# tericsoft-task1

#### <a href="https://employee-kappa.vercel.app/">Click to see Live Demo</a>

### `About the Assignment`

This assignment is a CRUD (Create, Read, Update, Delete) operation for an Employee with six fields: 
name, email, phone, date of birth (dob), gender, and hobbies. The name, email, and phone fields are input boxes,
while the dob field is a date picker. The gender field is a set of radio buttons, and the hobbies field is a set of checkboxes.

This project uses Material UI Form Controls to build the form, a Data Table to display data, and Modals to add and edit employees. 
Additionally, the project integrates with a fake backend server.

The goal of this project is to create a user-friendly interface for managing employee data that allows users to add, edit, and delete employees. 
This project aims to provide a clean and modern interface that is easy to use and understand.

<br />

### Backend API Reference

| Request            | Route     | Links   |
| :------------------- | :------- | :------------ |
| `GET`           | `Get all employee records` | **https://tericsoft-fake-backend.onrender.com/employee**. |
| `POST`              | `To create new emp. data`  | **https://tericsoft-fake-backend.onrender.com/employee**. |
| `PATCH`        | `To update a employee's profile` | **https://tericsoft-fake-backend.onrender.com/employee/:id**. |
| `DELETE` | `To delete a employee's record` | **https://tericsoft-fake-backend.onrender.com/employee/:id**. |

<br />

### `Tech Stack`

**Frontend:** `React, Material-UI`

**Backend:** `Fake JSON Backend Server deployed on Render`

<br />
## Run Locally

Clone the project

```bash
  git clone https://github.com/Nitesh-Samaniya/tericsoft-task1.git
```

Go to the project directory

```bash
  cd task1
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
