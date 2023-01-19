/* eslint-disable import/no-anonymous-default-export */
import admins from './admins'

export default {
    name: 'post',
    type: 'document',
    title: 'Poszt',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Cím'
        },
        {
            title: 'Író',
            name: 'author',
            type: 'string',
            options: {
                list: [
                    ...admins
                ],
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Tartalom',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
  }