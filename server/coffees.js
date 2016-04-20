 Meteor.methods({
  addCoffee: function (name, price, shop) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
 
    Coffees.insert({
        name: name,
        price: price,
        shop: shop,
        rating: 1,
        favourite: false,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });
  },
  deleteCoffee: function (coffeeId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    Coffees.remove(coffeeId);
  },
  editCoffee: function (coffeeId, name,price,shop,rating) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    if (rating != null) {
      Coffees.update(coffeeId, {$set: {name: name, price: price, shop: shop, rating:rating} });
    }
    else {
      Coffees.update(coffeeId, {$set: {name: name, price: price, shop: shop} });
    }
    
  },
  favouriteCoffee: function (coffeeId, favourite) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    
      Coffees.update(coffeeId, {$set: {favourite: favourite} });
    
  }
});