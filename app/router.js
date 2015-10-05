import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('arrays');
  this.route('functions');
  this.route('js-assessment');
});

export default Router;
