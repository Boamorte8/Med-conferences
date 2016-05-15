import Conferences from '../../../shared/collections'

class ConferencesController {

    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.searchText = '';
        this.sort = { name: 1 }

        this.subscribe('GetConferences', () => {
            return [
                {
                    sort: this.sort
                },
                this.getReactively('searchText')
            ]
        });

        this.helpers({
            conferences: () => {
                return Conferences.find({}, {
                    sort: this.sort
                });
            }
        })
    }

    addConference(newConference) {
        // Insert a task into the collection
        Meteor.call('Conferences.Insert', newConference);

        // Clear form
        this.newConference = {};
    }
}

ConferencesController.$inject = ['$scope', '$reactive']

export default ConferencesController
