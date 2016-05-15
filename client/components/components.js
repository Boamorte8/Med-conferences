import angular from 'angular';
import Conferences from './conferences/conferences'

let componentsModule = angular.module('app.components',[
    Conferences.name
])

export default componentsModule