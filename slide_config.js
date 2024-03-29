var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Title Goes Here<br>Up To Two Lines',
    subtitle: 'Subtitle Goes Here',
    eventInfo: {
     title: 'Event Title',
     date: '6/23/2013'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['io2013'] // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: '<b>First Last</b>',
    company: 'Job Title ',
    email: 'email@email.com'
  }, {
    name: '<b>Third Name</b>',
    company: 'Job Title<br>Company',
    email: 'email@email.com'
  }]
};

