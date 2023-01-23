/* eslint-disable import/no-anonymous-default-export */
import unitSelect from './unitSelect'

export default {
    name: 'szerk',
    type: 'document',
    title: 'Szerk. Regisztráció',
    fields: [
        {
            title: 'Felhasználónév',
            name: 'userName',
            type: 'string',
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
            name: 'unitselect',
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