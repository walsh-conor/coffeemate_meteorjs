Template.coffees.helpers({
  coffees: Coffees.find({}, {sort: {rating: -1}})
});


Template.addCoffee.events({
    "submit .new-coffee": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
  	  var price = event.target.price.value;
  	  var shop = event.target.shop.value;

	  // Insert a coffee into the collection
	   Meteor.call("addCoffee", name, price, shop);
 
      // Clear form
      event.target.name.value = "";
  	  event.target.price.value = "";
  	  event.target.shop.value = "";
      Router.go('coffees');
    }
  });

Template.editCoffee.events({
    "submit .edit-coffee": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      coffeeToEdit = this._id;
      // Get value from form element
      var name = event.target.name.value;
      var price = event.target.price.value;
      var shop = event.target.shop.value;

      var rating = document.getElementById('rating');
      var starrating = $('#rating').data('userrating');


      var map = document.getElementById('map');
      var marker = $('#map').data('latLng');

      console.log(marker)

    // Insert a coffee into the collection
     Meteor.call("editCoffee", coffeeToEdit, name, price, shop, starrating);
 
      // Clear form
      event.target.name.value = "";
      event.target.price.value = "";
      event.target.shop.value = "";
      Router.go('coffees');
    }
  });
  
  Template.coffees.events({
   "click .delete": function () {
    coffeeToDelete = this._id;
    new Confirmation({
        message: "Are you sure?",
        title: "Delete This Coffee",
        cancelText: "Cancel",
        okText: "Delete",
        success: true // wether the button should be green or red
      }, function (ok) {
         if(ok)
         {
          Meteor.call("deleteCoffee", coffeeToDelete);
          Router.go('coffees');
         }
      });      
    }
  });



 