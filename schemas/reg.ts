/* eslint-disable import/no-anonymous-default-export */
import unitSelect from './unitSelect'

export default {
    name: 'register',
    type: 'document',
    title: 'User Regisztráció',
    fields: [
        {
            name: 'userName',
            type: 'string',
            title: 'Felhasználónév',
            rows: 1
        },
        {
            name: 'email',
            type: 'string',
            title: 'Emailcím',
            rows: 1
        },
        {
            name: 'password',
            type: 'string',
            title: 'Jelszó',
            rows: 1
        },
        {
            title: 'Kiválasztott Egység',
            name: 'unitSelect',
            type: 'string',
            options: {
                list: [
                    ...unitSelect
                ]
            }
        },
        {
            name: 'upload',
            type: 'image',
            title: 'Kép',
        }
    ]
}