import validate from 'validate.js';
import userModels from '../models/users';
import wrapper from '../helpers/helpers';


const controllers = {
  // Using Callback
  getUsers: (_req:any, res:any) => {
    userModels.getUsers((err: Error, result:any) => {
      if (err) console.log(err)

      wrapper.response(res, result, 200)
    })
  },

  getUsersByEmail: (req:any, res:any) => {
    userModels.getUsersByEmail({email: req.body.email})
      .then((result) => {
        wrapper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  createUser: async (req:any, res:any) => {

    const email = await userModels.getUsersByEmail({email: req.body.email});

    if (!validate.isEmpty(email)) {
      wrapper.response(res, 'email already taken', 400, true)
    } else {
      const data = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
      }
      userModels.createUsers(data)
        .then(() => {
          wrapper.response(res, data, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  updateUser: async (req:any, res:any) => {

    const email = await userModels.getUsersByEmail({email: req.body.email});

    if (validate.isEmpty(email)) {
      wrapper.response(res, 'user not found', 404, true)
    } else {
      const data = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
      }

      userModels.updateUsers(data)
        .then(() => {
          wrapper.response(res, data, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  deleteUser: async (req:any, res:any) => {

    const email = await userModels.getUsersByEmail({email: req.params.email});

    if (validate.isEmpty(email)) {
      wrapper.response(res, 'user not found', 404, true)
    } else {
      const data = {
        email: req.params.email,
      }

      userModels.deleteUsers(data)
        .then(() => {
          wrapper.response(res, 'success', 200)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}

export default controllers;
