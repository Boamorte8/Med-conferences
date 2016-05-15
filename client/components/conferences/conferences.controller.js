import Conferences from '../../../shared/collections'

class ConferencesController {

  constructor ($scope, $reactive) {
    $reactive(this).attach($scope)

    this.helpers({
      conferences: () => {
        return Conferences.find({})
      }
    })
  }
}

ConferencesController.$inject = ['$scope', '$reactive']

export default ConferencesController
