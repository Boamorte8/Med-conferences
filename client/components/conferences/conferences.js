import angular from 'angular'
import conferencesComponent from './conferences.component'

let conferencesModule = angular.module('conferences',[])

.component('conferences', conferencesComponent)

export default conferencesModule