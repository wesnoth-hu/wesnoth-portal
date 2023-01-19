/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'races',
    type: 'document',
    title: 'Fajok',
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Leírás'
      },
      {
        name: 'upload',
        type: 'image',
        title: 'Feltöltés',
      }
    ]
  }