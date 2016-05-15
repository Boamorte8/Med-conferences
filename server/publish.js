import Conferences from '../shared/collections'

Meteor.publish('GetConferences', function(options, searchString) {
    console.log(options)
    console.log(searchString)
    if (!searchString || searchString == null) {
        searchString = '';
    }
    
    let regexExpression = { '$regex': '.*' + searchString || '' + '.*', '$options': 'i' };    
    let selector = { 
        $or:
        [
            { name:         regexExpression }
        ]
        
     }
    
    return Conferences.find(selector, options);
})


Meteor.methods({
    'Conferences.Insert' (conference) {
        Conferences.insert({
            name : conference.name.toLowerCase(),
            createdAt : new Date()
        })
    }
    
})