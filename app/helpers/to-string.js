import Ember from 'ember';

export function toString([func]/*, hash*/) {
    return func.toString();
}

export default Ember.Helper.helper(toString);
