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
            title: 'Kiválasztott Egység',
            name: 'unitSelect',
            type: 'string',
            options: {
                list: [
                    ...unitSelect
                ]
            },
            readonly: false
        }
    ]
}