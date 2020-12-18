export default [
    {
        id: 'userName',
        title: 'Username',
        type: 'text',
        name: 'user_name',
        placeholder: 'Type here your username...',
        errorMessage: {
            invalid: 'Username can not be shorter then 3 characters!',
            missing: 'Username is missing!'
        },
        isRequired: true
    },
    {
        id: 'firstName',
        title: 'First Name',
        type: 'text',
        name: 'first_name',
        placeholder: 'Your first name here...',
        errorMessage: {
            invalid: 'First name can not be shorter then 3 characters!',
            missing: 'First name is missing!'
        },
        isRequired: true
    },
    {
        id: 'lastName',
        title: 'Last Name',
        type: 'text',
        name: 'last_name',
        placeholder: 'Your Last Name here...',
        errorMessage: {
            invalid: 'Last name can not be shorter then 3 characters!',
            missing: 'Last name is missing!'
        },
        isRequired: true
    },
    {
        id: 'email',
        title: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Add your email...',
        errorMessage: {
            invalid: 'Invalid email!',
            missing: 'Email is missing!'
        },
        isRequired: true
    },
    {
        id: 'address',
        title: 'Address',
        type: 'text',
        name: 'address',
        placeholder: 'Type your address...',
        isRequired: false
    },
    {
        id: 'password',
        title: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Please give a secure password.',
        errorMessage: {
            invalid: 'Password is too weak!',
            missing: 'You have to add a password!'
        },
        isRequired: true
    }
]
