/* Neighborhood pin coordinates */
let pinCoords = {
  "Allston": [42.361467,  -71.129131],
  "Back Bay": [42.349809, -71.081955],
  "Bay Village": [42.348891, -71.069162],
  "Beacon Hill": [42.358536, -71.067123],
  "Brighton": [42.344574, -71.154160],
  "Charlestown": [42.376404, -71.058939],
  "Chinatown": [42.349680, -71.062172],
  "Dorchester": [42.298196, -71.059216],
  "Downtown": [42.358892, -71.057391],
  "East Boston": [42.373178, -71.021223],
  "Fenway": [42.342428, -71.097818],
  "Hyde Park": [42.254955, -71.123762],
  "Jamaica Plain": [42.312955, -71.113073],
  "Leather District": [42.351037, -71.057969],
  "Longwood": [42.343164, -71.109866],
  "Mattapan": [42.279452, -71.090034],
  "Mission Hill": [42.330838, -71.104064],
  "North End": [42.365072, -71.054029],
  "Roslindale": [42.285806, -71.125367],
  "Roxbury": [42.314846, -71.085598],
  "South Boston": [42.331939, -71.048553],
  "South End": [42.338364, -71.075239],
  "Waterfront": [42.356838, -71.050353],
  "West End": [42.364064, -71.066151],
  "West Roxbury": [42.281590, -71.161605]
};

let viewCoords = {
  "Allston": [42.3573433,-71.115378,14.16],
  "Back Bay": [42.3493055,-71.0905478,15],
  "Bay Village": [42.3498003,-71.0691917,15.88],
  "Beacon Hill": [42.3573336,-71.0702341,15.54],
  "Brighton": [42.3491099,-71.1427447,14],
  "Charlestown": [42.3720147,-71.0663173,14.22],
  "Chinatown": [42.3508449,-71.0628745,15.48],
  "Dorchester": [42.3067704,-71.0890839,13],
  "Downtown": [42.3572237,-71.0699231,14.58],
  "East Boston": [42.3648645,-71.0595724,13.62],
  "Fenway": [42.3424981,-71.0973112,14.27],
  "Hyde Park": [42.2663539,-71.1217779,13.1],
  "Jamaica Plain": [42.3167339,-71.1060353,14],
  "Leather District": [42.3510546,-71.0580252,16.31],
  "Longwood": [42.3425579,-71.110806,15.04],
  "Mattapan": [42.300259,-71.1107408,13.16],
  "Mission Hill": [42.3338358,-71.1080123,15],
  "North End": [42.3638109,-71.0573227,15.46],
  "Roslindale": [42.2979365,-71.1281171,13],
  "Roxbury": [42.3241464,-71.1017691,13.29],
  "South Boston": [42.3381886,-71.0547324,14],
  "South End": [42.3419025,-71.0751679,14.38],
  "Waterfront": [42.35731,-71.0554735,15.17],
  "West End": [42.3619161,-71.0655493,15.3],
  "West Roxbury": [42.2916903,-71.1631525,13]
};

/* HTML for info of neighborhoods to be displayed in popups */
let popupInfo = {
  "Allston": "<p>Allston is a popular destination for students of nearby Northeastern University, Boston University or Harvard. In 2008, the term 'Allston Christmas' was added to Urban Dictionary. The phrase refers to a special date in the neighborhood, September 1, or 'moving day' when students leave their no longer needed furniture that couldn’t fit into their apartment or moving truck on the pavement for anyone to take.</p>",
  "Back Bay": "<p>Back Bay is one if not the wealthiest neighborhood in Boston. Here, you’ll find rows of Victorian style brick homes or apartment buildings. The life expectancy of its residence is up to 90.9. Living here, you are close to an upscale shopping neighborhood with the Prudential center and Newbury Street. If you are not too interested in shopping, head to the Charles river Esplanade for a walk along one side the water and the other side beautiful Victorian homes. </p>",
  "Bay Village": "<p>Info about Back Bay.</p>",
  "Beacon Hill": "<p>Beacon Hill is famous for its charming brick houses situated on top of the Hill. It is an expensive neighborhood with affluent residents and is safe compared to other neighborhoods of Boston. The Red Line, Orange Line and Green Line all cater to the neighborhood so you need not worry about transportation, what you should really worry about is the sky high rent and the walk uphill to your apartment.Beacon Hill is also home to the most Instagrammed street in Boston, Acorn street. It is basically the last cobblestone street in Boston. Residents of the neighborhood retained ownership and control over the private alley road to prevent it from being paved by the City of Boston in the 80s.</p>",
  "Brighton": "<p>Brighton</p>",
  "Charlestown": "<p>Charlestown</p>",
  "Chinatown": "<p>Chinatown</p>",
  "Dorchester": "<p>Dorchester</p>",
  "Downtown": "<p>Downtown</p>",
  "East Boston": "<p>East Boston</p>",
  "Fenway": "<p>Fenway</p>",
  "Hyde Park": "<p>Hyde Park</p>",
  "Jamaica Plain": "<p>Jamaica Plain</p>",
  "Leather District": "<p>Leather District.</p>",
  "Longwood": "<p>Longwood</p>",
  "Mattapan": "<p>Mattapan</p>",
  "Mission Hill": "<p>Mission Hill</p>",
  "North End": "<p>North End</p>",
  "Roslindale": "<p>Roslindale</p>",
  "Roxbury": "<p>Roxbury</p>",
  "South Boston": "<p>South Boston</p>",
  "South End": "<p>South End</p>",
  "Waterfront": "<p>Waterfront</p>",
  "West End": "<p>West End</p>",
  "West Roxbury": "<p>West Roxbury</p>"
};

let neighborhoodRoutes = {
  "Allston": ["Boston College (B)"],
  "Back Bay": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line"],
  "Bay Village": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line"],
  "Beacon Hill": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line", "Blue Line", "Braintree", "Mattapan"],
  "Brighton": ["Boston College (B)"],
  "Charlestown": ["Orange Line"],
  "Chinatown": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line", "Braintree", "Mattapan", "Airport Terminals", "Boston Marine Industrial Park", "Washington St."],
  "Dorchester": ["Braintree", "Mattapan"],
  "Downtown": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line", "Blue Line", "Braintree", "Mattapan", "Airport Terminals", "Boston Marine Industrial Park"],
  "East Boston": ["Blue Line", "Airport Terminals"],
  "Fenway": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line"],
  "Hyde Park": [],
  "Jamaica Plain": ["Heath St. (E)", "Orange Line"],
  "Leather District": ["Orange Line", "Braintree", "Mattapan", "Airport Terminals", "Boston Marine Industrial Park", "Washington St."],
  "Longwood": ["Cleveland Circle (C)", "Riverside (D)"],
  "Mattapan": ["Mattapan"],
  "Mission Hill": ["Heath St. (E)", "Orange Line"],
  "North End": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line", "Blue Line"],
  "Roslindale": ["Orange Line"],
  "Roxbury": ["Orange Line"],
  "South Boston": ["Braintree", "Mattapan", "Airport Terminals", "Boston Marine Industrial Park"],
  "South End": ["Orange Line", "Washington St."],
  "Waterfront": ["Blue Line"],
  "West End": ["Boston College (B)", "Cleveland Circle (C)", "Riverside (D)", "Heath St. (E)", "Orange Line", "Braintree", "Mattapan"],
  "West Roxbury": ["Orange Line"]
}

let colorByRoute = {
  "Boston College (B)": "#1D7535",
  "Cleveland Circle (C)": "#1D7535",
  "Riverside (D)": "#1D7535",
  "Heath St. (E)": "#1D7535",
  "Orange Line": "#FFAA00",
  "Blue Line": "#092FED",
  "Braintree": "#E31010",
  "Mattapan": "#E31010",
  "Airport Terminals": "#969696",
  "Boston Marine Industrial Park": "#969696",
  "Washington St.": "#969696"
};

let logoByRoute = {
  "Boston College (B)": "photo/greenline.png",
  "Cleveland Circle (C)": "photo/greenline.png",
  "Riverside (D)": "photo/greenline.png",
  "Heath St. (E)": "photo/greenline.png",
  "Orange Line": "photo/orangeline.png",
  "Blue Line": "photo/mbta.png",
  "Braintree": "photo/redline.png",
  "Mattapan": "photo/redline.png",
  "Airport Terminals": "photo/mbta.png",
  "Boston Marine Industrial Park": "photo/mbta.png",
  "Washington St.": "photo/mbta.png"
}

/* Neighborhood ranks for each category */
let rankings = {
  "Allston":           { "Rent": 9, "Safety": 7, "Transportation": 10, "Schools": 3, "Population": 7, "Diversity": 3, "Food": 2 },
  "Back Bay":         { "Rent": 22, "Safety": 8, "Transportation": 6, "Schools": 3, "Population": 8, "Diversity": 0, "Food": 3 },
  "Bay Village":      { "Rent": 19, "Safety": 5, "Transportation": 6, "Schools": 6, "Population": 8, "Diversity": 0, "Food": 2 },
  "Beacon Hill":      { "Rent": 15, "Safety": 4, "Transportation": 3, "Schools": 6, "Population": 9, "Diversity": 0, "Food": 1 },
  "Brighton":          { "Rent": 8, "Safety": 7, "Transportation": 10, "Schools": 4, "Population": 5, "Diversity": 0, "Food": 1 },
  "Charlestown":      { "Rent": 11, "Safety": 2, "Transportation": 10, "Schools": 0, "Population": 7, "Diversity": 0, "Food": 4 },
  "Chinatown":        { "Rent": 20, "Safety": 8, "Transportation": 1, "Schools": 6, "Population": 5, "Diversity": 0, "Food": 2 },
  "Dorchester":        { "Rent": 6, "Safety": 6, "Transportation": 10, "Schools": 6, "Population": 2, "Diversity": 0, "Food": 4 },
  "Downtown":         { "Rent": 18, "Safety": 7, "Transportation": 2, "Schools": 6, "Population": 12, "Diversity": 2, "Food": 2 },
  "East Boston":       { "Rent": 7, "Safety": 4, "Transportation": 10, "Schools": 8, "Population": 5, "Diversity": 1, "Food": 5 },
  "Fenway":           { "Rent": 13, "Safety": 10, "Transportation": 6, "Schools": 1, "Population": 2, "Diversity": 0, "Food": 1 },
  "Hyde Park":         { "Rent": 1, "Safety": 5, "Transportation": 20, "Schools": 15, "Population": 9, "Diversity": 0, "Food": 8 },
  "Jamaica Plain":    { "Rent": 10, "Safety": 3, "Transportation": 8, "Schools": 2, "Population": 2, "Diversity": 0, "Food": 1 },
  "Leather District": { "Rent": 21, "Safety": 8, "Transportation": 4, "Schools": 6, "Population": 6, "Diversity": 0, "Food": 4 },
  "Longwood":         { "Rent": 12, "Safety": 8, "Transportation": 10, "Schools": 4, "Population": 5, "Diversity": 0, "Food": 1 },
  "Mattapan":          { "Rent": 2, "Safety": 12, "Transportation": 15, "Schools": 15, "Population": 6, "Diversity": 0, "Food": 8 },
  "Mission Hill":     { "Rent": 12, "Safety": 8, "Transportation": 8, "Schools": 1, "Population": 1, "Diversity": 0, "Food": 2 },
  "North End":        { "Rent": 18, "Safety": 6, "Transportation": 5, "Schools": 6, "Population": 12, "Diversity": 0, "Food": 4 },
  "Roslindale":        { "Rent": 5, "Safety": 4, "Transportation": 15, "Schools": 18, "Population": 5, "Diversity": 0, "Food": 8 },
  "Roxbury":           { "Rent": 4, "Safety": 10, "Transportation": 10, "Schools": 12, "Population": 5, "Diversity": 0, "Food": 7 },
  "South Boston":     { "Rent": 16, "Safety": 9, "Transportation": 7, "Schools": 6, "Population": 15, "Diversity": 0, "Food": 2 },
  "South End":        { "Rent": 14, "Safety": 8, "Transportation": 10, "Schools": 7, "Population": 4, "Diversity": 0, "Food": 3 },
  "Waterfront":       { "Rent": 16, "Safety": 3, "Transportation": 10, "Schools": 8, "Population": 12, "Diversity": 0, "Food": 6 },
  "West End":         { "Rent": 17, "Safety": 7, "Transportation": 4, "Schools": 7, "Population": 7, "Diversity": 0, "Food": 3 },
  "West Roxbury":      { "Rent": 3, "Safety": 1, "Transportation": 10, "Schools": 18, "Population": 7, "Diversity": 0, "Food": 9 }
}

/* Calculate the best fit neighborhood given three categories */
function calcTopNeighborhood(category1, category2, category3) {
  let list = [];

  for (neighborhood in rankings) {
    let score = rankings[neighborhood][category1] + rankings[neighborhood][category2] + rankings[neighborhood][category3];
    list.push({name: neighborhood, score: score});
  }

  list.sort((a,b) => a.score - b.score);

  return list[0].name;
}

// /* Get routes for public transportation passing through the given neighborhood */
// function getPolyLines(neighborhood) {
//   let routeNames = neighborhoodRoutes[neighborhood];
//   let lineCoords = [];
//
//   for (routeName of routeNames) {
//     let coords = [];
//
//     for (let i = 0; i < mbtaGeoJSON.length; ++i) {
//       if (mbtaGeoJSON[i]["properties"]["name"] === routeName) {
//         for (let j = 0; j < mbtaGeoJSON[i]["geometry"]["coordinates"].length; ++j) {
//           let point = mbtaGeoJSON[i]["geometry"]["coordinates"][j];
//           coords.push([point[1], point[0]]);
//         }
//         lineCoords.push(coords);
//         break;
//       }
//     }
//
//   }
//
//   return lineCoords;
// }

/* Get routes for public transportation passing through the given neighborhood */
function getPolyLines(neighborhood) {
  let routeNames = neighborhoodRoutes[neighborhood];
  let lineCoords = [];

  for (routeName of routeNames) {
    let coords = {};
    coords.routeName = routeName;
    coords.geometry = [];

    for (let i = 0; i < mbtaGeoJSON.length; ++i) {
      if (mbtaGeoJSON[i]["properties"]["name"] === routeName) {
        for (let j = 0; j < mbtaGeoJSON[i]["geometry"]["coordinates"].length; ++j) {
          let point = mbtaGeoJSON[i]["geometry"]["coordinates"][j];
          coords.geometry.push([point[1], point[0]]);
        }
        lineCoords.push(coords);
        break;
      }
    }

  }

  return lineCoords;
}

function getPolyLinesSwitched(neighborhood) {
  let routeNames = neighborhoodRoutes[neighborhood];
  let lineCoords = [];

  for (routeName of routeNames) {
    let coords = {};
    coords.routeName = routeName;
    coords.geometry = [];

    for (let i = 0; i < mbtaGeoJSON.length; ++i) {
      if (mbtaGeoJSON[i]["properties"]["name"] === routeName) {
        for (let j = 0; j < mbtaGeoJSON[i]["geometry"]["coordinates"].length; ++j) {
          let point = mbtaGeoJSON[i]["geometry"]["coordinates"][j];
          coords.geometry.push(point);
        }
        lineCoords.push(coords);
        break;
      }
    }

  }

  return lineCoords;
}
