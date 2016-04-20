this.Coffees = new Mongo.Collection('coffees'),
  CoffeesIndex = new EasySearch.Index({
    collection: Coffees,
    fields: ['name', 'shop'],
    engine: new EasySearch.Minimongo()
  });
