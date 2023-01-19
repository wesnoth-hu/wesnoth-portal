/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'gallery',
    type: 'document',
    title: 'Galéria',
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