/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'statical',
    type: 'document',
    title: 'Statikus',
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