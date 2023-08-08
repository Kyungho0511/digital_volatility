const config = {    
  accessToken: 'pk.eyJ1Ijoia2xlZTA1MTEiLCJhIjoiY2xrYnFibnNjMGV4cjNrbzRqdGg1d21sYiJ9.nN0pE1qocGhTLnD_xPuYdg',
  style: 'mapbox://styles/klee0511/cll1kf5on00vw01p7aiwn31m9',
  theme: 'light',
  alignment: 'left',
  title: 'The Geographical Distribution of Subway Usage Decrease Due to COVID-19',
  description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
  footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
  footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
  chapters: [
      {
          id: 'priceData',
          title: 'Gyeonglidan-gil, Development of the commercial alley',
          image: 'images/Gyeonlidan_gil.jpg',
          description: 'The large part of the city has evolved organically without extensive centralized urban planning. Instead, it has been growing based on the natural actions and decisions of its inhabitants. In result, dynamic and flexible urban fabric became one of the characteristics of Seoul. villas, high density low-rise residential blocks, is the most common building type in spontaneous urban fabric and today they take up almost 40% area of Seoul. So a balanced approach combining spontaneous growth and thoughtful urban planning can lead to a more sustainable and inclusive city. Collaborating with local communities is essential to understand their needs and guide development accordingly. Then what are the driving forces?',
          location: {
              center: [126.98957897888896, 37.54035898378337],
              zoom: 15.5,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [],
          onChapterExit: []
      }
  ]
};