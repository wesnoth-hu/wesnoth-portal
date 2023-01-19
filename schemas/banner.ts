/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'banner',
    type: 'document',
    title: 'Banner',
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