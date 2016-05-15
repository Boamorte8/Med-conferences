import Conferences from '../shared/collections'

Meteor.startup(() => {
    const data = [
        {
            name: 'conference 1',
            createdAt: new Date('01/01/2015')
        },
        {
            name: 'conference 2',
            createdAt: new Date('02/02/2015')
        },
        {
            name: 'conference 3',
            createdAt: new Date('03/04/2015')
        },
        {
            name: 'conference 4',
            createdAt: new Date('04/05/2015')
        }
    ]
    if (Conferences.find().count() === 0) {
        data.forEach((name) => {
            Conferences.insert(name)
        })
    }
})
