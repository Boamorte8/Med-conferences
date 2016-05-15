import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Components from './components/components';

angular.module('simple-todos', [
  angularMeteor,
  Components.name
]);