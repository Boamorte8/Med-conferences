import Conferences from '../shared/collections'

Meteor.startup(() => {
  const data = [
     {
      name: 'Conference 1'
    },
    {
      name: 'Conference 2'
    },
    {
      name: 'Conference 3'
    },
    {
      name: 'Conference 4'
    }
  ]
  if (Conferences.find().count() === 0) {
    data.forEach((name) => {
      Conferences.insert(name)
    })
  }
})
