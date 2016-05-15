import Conferences from '../../../shared/collections'

class ConferencesController {

  constructor ($scope, $reactive) {
    var vm =  this;
    $reactive(this).attach($scope);
    
    vm.searchText  = '';

    vm.subscribe('GetConferences', () => {
        return [            
            vm.getReactively('searchText')
        ]
    });

    vm.helpers({
      conferences: () => {
        return Conferences.find({});
      }
    })
  }
}

ConferencesController.$inject = ['$scope', '$reactive']

export default ConferencesController
