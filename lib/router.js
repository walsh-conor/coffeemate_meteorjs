
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('loginCheck');
  } else {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home'
});

Router.route('/coffees/', {
  name: 'coffees',
  template: 'coffees'
    // ,data: function(){
    //   templateData = {  Coffees: Coffees.findOne({}, {sort: {rating: -1}})   };
    // return templateData;
    // }
});

Router.route('/addCoffee/', {
  name: 'addCoffee'
});


Router.route('/about/', {
  name: 'about'
});


Router.route('/coffee/:_id', {
    template: 'editCoffee',
    data: function(){
        var currentCoffee = this.params._id;
        return Coffees.findOne({ _id: currentCoffee });
    }
});