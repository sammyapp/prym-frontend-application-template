const getFormFields = () => ([
  {
    field: 'lastname',
    label: 'Last Name',
    type: 'text',
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    field: 'firstname',
    label: 'First Name',
    type: 'text',
    validation: {
      required: true,
      minLength: 2,
    }
  },
  {
    field: 'nickname',
    label: 'Nickname',
    type: 'text',
    validation: {}
  },
  {
    field: 'email',
    label: 'Email',
    type: 'email',
    validation: {
      required: true,
      email: true,
    }
  },
  {
    field: 'password',
    label: 'Password',
    type: 'password',
    validation: {
      required: true,
      password: true,
      passwordMatch: true,
    }
  },
  {
    field: 'repeatPassword',
    label: 'Repeat Password',
    type: 'password',
    validation: {
      required: true,
      password: true,
      passwordMatch: true,
    }
  },
  {
    field: 'showAddress',
    label: 'Show Address',
    type: 'checkbox',
    validation: {}
  },
  {
    field: 'street',
    label: 'Street',
    type: 'text',
    validation: {
      required: true,
      minLength: 4,
    }
  },
  {
    field: 'house',
    label: 'House/Apartment',
    type: 'text',
    validation: {}
  },
  {
    field: 'zip',
    label: 'Zip',
    type: 'number',
    validation: {
      required: true,
      zipCode: true,
    }
  },
  {
    field: 'city',
    label: 'City',
    type: 'text',
    validation: {
      required: true,
      minLength: 4,
    }
  },
  {
    field: 'additionalInfo',
    label: 'Additional Information',
    type: 'textarea',
    validation: {}
  }
]);

export default getFormFields;