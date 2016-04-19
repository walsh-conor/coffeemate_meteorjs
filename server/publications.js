
Meteor.publish('coffees', function() {
  return Coffees.find({owner: this.userId}, {sort: {rating: -1}});
});