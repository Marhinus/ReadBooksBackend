var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings


mobileApp.tables.add('Clients'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Tracks'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Bikes'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Bookings');
mobileApp.tables.add('SignedTracks');
mobileApp.tables.add('Pricing');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
