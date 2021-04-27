import express from 'express';
const Route = express.Router();

import UserController from '../controllers/users';

Route
.get('/users', UserController.getUsers)
.get('/userId', UserController.getUsersByEmail)
.post('/create', UserController.createUser)
.patch('/update', UserController.updateUser)
.post('/delete/:email', UserController.deleteUser)

export default Route;
