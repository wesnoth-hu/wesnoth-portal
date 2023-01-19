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
            title: 'Kiválasztott Egység',
            name: 'unitselect',
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