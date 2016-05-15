import Conferences from '../shared/collections'

Meteor.publish('GetConferences', function(searchString) {
    if (!searchString || searchString == null) {
        searchString = '';
    }
    
    let regexExpression = { '$regex': '.*' + searchString || '' + '.*', '$options': 'i' };    
    let selector = { name: regexExpression };
    
    return Conferences.find(selector);
})