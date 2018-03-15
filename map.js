// * Two maps on the same page
// *

// necessary variables
var mapLeft, mapRight;
var infoWindowLeft, infoWindowRight;

// markersData variable stores the information necessary to each marker
var markersDataLeft =  [
   {
      lat: 43.594040,
      lng:  -83.841943,
      name: "Hungry Howie's",
      address1:"3200 Center Ave",
      address2: "Essexville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95127' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.957135,
      lng:  -83.829631,
      name: "Hungry Howie's",
      address1:"7567 Miller Rd",
      address2: "Swartz Creek, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95172' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.986246,
      lng: -82.536692,
      name: "Hungry Howie's",
      address1:"5295 Lapeer Rd",
      address2: "Kimball, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118314' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item
   {
      lat: 43.460081, 
      lng: -83.975011,
      name: "Hungry Howie's",
      address1:"3576 Bay Rd",
      address2: "Saginaw, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95128' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.539137,
      lng:  -83.206465,
      name: "Hungry Howie's",
      address1:"34000 Woodward Ave",
      address2: "Birmingham, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95186' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, // don't insert comma in the last item // don't insert comma in the last item
   {
      lat: 43.032309, 
      lng:  -83.071607,
      name: "Hungry Howie's",
      address1:"583 S Cedar",
      address2: "Imlay City, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95173' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.798024,  
      lng:  -82.739421,
      name: "Hungry Howie's",
      address1:"67437 Main St",
      address2: "Richmond, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95174' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.415804,  
      lng:  -84.013761,
      name: "Hungry Howie's",
      address1:"4938 Gratiot",
      address2: "Saginaw, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95129' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, 
   {
      lat: 44.279912,   
      lng:  -83.489184,
      name: "Hungry Howie's",
      address1:"200 West Bay",
      address2: "East Tawas, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95130' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.173183,   
      lng: -83.735401,
      name: "Hungry Howie's",
      address1:"530 S Mill St",
      address2: "Clio, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95132' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.803782,    
      lng: -83.625999,
      name: "Hungry Howie's",
      address1:"1010 N Saginaw St",
      address2: "Holly, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95175' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.981340,     
      lng: -84.495378,
      name: "Hungry Howie's",
      address1:"742 W Cedar Ave",
      address2: "Gladwin, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95133' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.816366,      
      lng: -83.001694,
      name: "Hungry Howie's",
      address1:"843 N Van Dyke Rd",
      address2: "Bad Axe, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95176' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.481213,       
      lng: -83.406140,
      name: "Hungry Howie's",
      address1:"893 S State St",
      address2: "Caro, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95134' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.341012,        
      lng: -83.736736,
      name: "Hungry Howie's",
      address1:"479 North Main",
      address2: "Frankenmuth, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95135' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.734841,         
      lng: -82.784545,
      name: "Hungry Howie's",
      address1:"59065 Gratiot",
      address2: "New Haven, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95177' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, 
   {
      lat: 42.673432,          
      lng: -82.940298,
      name: "Hungry Howie's",
      address1:"51074 Romeo Plank",
      address2: "New Haven, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95178' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, 
    {
      lat: 42.679640,        
      lng: -83.229768,
      name: "Hungry Howie's",
      address1:"3011 E Walton Blvd",
      address2: "Auburn Hills, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95155' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   }, 
   {
      lat: 42.515014,       
      lng: -83.116381,
      name: "Hungry Howie's",
      address1:"30300 Stephenson Hwy",
      address2: "Madison Heights, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95116' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.198680,       
      lng: -83.218350,
      name: "Hungry Howie's",
      address1:"16083 Eureka Rd",
      address2: "Southgate, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118285' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.538804,     
      lng: -82.993026,
      name: "Hungry Howie's",
      address1:"13229 East 14 Mile Road",
      address2: "Sterling Heights, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95156' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.487214,     
      lng: -82.939095,
      name: "Hungry Howie's",
      address1:"17744 Frazho Rd",
      address2: "Roseville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95117' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.614966,      
      lng: -82.541521,
      name: "Hungry Howie's",
      address1:"650 Pointe Tremble Rd",
      address2: "Algonac, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95118' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.508375,       
      lng: -83.006349,
      name: "Hungry Howie's",
      address1:"29142 Hoover Rd",
      address2: "Warren, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95179' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.376602,	       
      lng: -82.934999,
      name: "Hungry Howie's",
      address1:"15316 E Jefferson",
      address2: "Grosse Pinte Park, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=92809' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.61282,	       
      lng: -82.972684,
      name: "Hungry Howie's",
      address1:"43067 Hayes",
      address2: "Sterling Heights, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95119' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.00237,		       
      lng: -83.734211,
      name: "Hungry Howie's",
      address1:"3625 Corunna Rd",
      address2: "Flint, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95158' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.462883,			       
      lng: -83.005648,
      name: "Hungry Howie's",
      address1:"22945 Hoover Rd",
      address2: "Warren, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95159' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.051046	,			       
      lng: -83.634962,
      name: "Hungry Howie's",
      address1:"4020 Richfield Rd",
      address2: "Flint, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95161' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.910956	,			       
      lng: -82.497202,
      name: "Hungry Howie's",
      address1:"3240 Gratiot Ave",
      address2: "Marysville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118438' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.510227	,			       
      lng: -82.936438,
      name: "Hungry Howie's",
      address1:"29042 Utica Rd",
      address2: "Roseville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95162' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 44.43038,			       
      lng: -83.330085,
      name: "Hungry Howie's",
      address1:"5160 North US 23",
      address2: "Oscoda, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95125' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.186182	,			       
      lng: -84.127778,
      name: "Hungry Howie's",
      address1:"1123 W Broad St",
      address2: "Chesaning, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95165' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 44.298621,			       
      lng: -84.700236,
      name: "Hungry Howie's",
      address1:"3057 W Houghton Lake Dr",
      address2: "Prudenville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95167' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 44.298621,			       
      lng: -84.700236,
      name: "Hungry Howie's",
      address1:"3935 Telegraph Rd",
      address2: "Prudenville, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95168' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.400691,			       
      lng: -83.060498,
      name: "Hungry Howie's",
      address1:"11401 Joseph Campau",
      address2: "Hamtramck, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118290' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.524585,			       
      lng: -84.122878,
      name: "Hungry Howie's",
      address1:"115 S Main St, Ste6B",
      address2: "Freeland, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95170' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.989047,			       
      lng: -83.610752,
      name: "Hungry Howie's",
      address1:"2466 S Center",
      address2: "Burton, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95171' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.826147,			       
      lng: -82.486476,
      name: "Hungry Howie's",
      address1:"201 N Riverside Ave",
      address2: "St Clair, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118439' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.358108,			       
      lng: -83.880315,
      name: "Hungry Howie's",
      address1:"6182 Dixie Hwy",
      address2: "Bridgeport, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95126' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.597414,			       
      lng: -83.915312,
      name: "Hungry Howie's",
      address1:"502 South Euclid",
      address2: "Bay City, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95120' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.620635,			       
      lng: -83.223963,
      name: "Hungry Howie's",
      address1:"3290 E South Blvd",
      address2: "Bloomfield, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95163' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.628445,			       
      lng: -83.904671,
      name: "Hungry Howie's",
      address1:"2312 Hall Rd",
      address2: "Clinton Twp, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95121' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.721289,			       
      lng: -82.497054,
      name: "Hungry Howie's",
      address1:"105 Fairbanks",
      address2: "Marine City, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95122' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.991237,			       
      lng: -82.431055,
      name: "Hungry Howie's",
      address1:"1618 Stone St",
      address2: "Port Huron, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=117165' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.00778,			       
      lng: -82.314846,
      name: "Hungry Howie's",
      address1:"630 W Genesee St",
      address2: "Lapeer, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95164' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.645051,			       
      lng: -82.851758,
      name: "Hungry Howie's",
      address1:"25530 21 Mile Rd",
      address2: "Chesterfield, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=95124' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 43.623966,			       
      lng: -84.224335,
      name: "Hungry Howie's",
      address1:"425 S Saginaw Rd",
      address2: "Midland, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126418' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 41.485228,			       
      lng: -81.810866,
      name: "Hungry Howie's",
      address1:"16210 Detroit Ave",
      address2: "Lakewood, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126419' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 41.120084,			       
      lng: -81.864087,
      name: "Hungry Howie's",
      address1:"1033 S Court St",
      address2: "Medina, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126420' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 41.120084,			       
      lng: -81.864087,
      name: "Hungry Howie's",
      address1:"2411 Tuscarawas St W",
      address2: "Canton, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126421' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 40.831907,			       
      lng: -81.345889,
      name: "Hungry Howie's",
      address1:"2121 Columbus Rd NE",
      address2: "Canton, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126422' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 40.901753,			       
      lng: -81.113747,
      name: "Hungry Howie's",
      address1:"634 W State St",
      address2: "Alliance, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126423' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 41.046093,			       
      lng: -80.66278,
      name: "Hungry Howie's",
      address1:"5205 Market St",
      address2: "Boardman, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126424' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 41.458002,			       
      lng: -81.892941,
      name: "Hungry Howie's",
      address1:"24533 Center Ridge Rd",
      address2: "Westlake, OH",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=126425' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.16887,			       
      lng: -83.189177,
      name: "Hungry Howie's",
      address1:"19182 Fort St",
      address2: "Riverview, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=120218' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },
   {
      lat: 42.786198,			       
      lng: -83.243815,
      name: "Hungry Howie's",
      address1:"195 N Park Blvd",
      address2: "Lake Orion, MI",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118351' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   },                         
];

var markersDataRight = [
    {
      lat: 28.176593,
      lng: -80.67209,
      name: "Hungry Howie's",
      address1:"4250 N Wickham Rd",
      address2: "Melbourne, FL",
      html: "<a href='http://aa.rewardsnetwork.com/details.htm?search=true&merchantId=118356' target='_blank'>Hungry Howie's</a>" // don't insert comma in the last item of each marker
   } // don't insert comma in the last item
];

function initialize(setMap) {

   var mapOptions;
   
   if(setMap == "mapLeft") {
      mapOptions = {
         center: new google.maps.LatLng(41.663938300000000000, -83.555211999999980000),
         zoom: 11,
         mapTypeId: 'roadmap',
      };
   
      mapLeft = new google.maps.Map(document.getElementById('map-canvas-left'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowLeft = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapLeft, 'click', function() {
	      infoWindowLeft.close();
   	});
      
   } else {
      
      mapOptions = {
         center: new google.maps.LatLng(27.701619,-80.904228),
         maxZoom: 15,
         mapTypeId: 'roadmap',
      };
      
	   mapRight = new google.maps.Map(document.getElementById('map-canvas-right'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowRight = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapRight, 'click', function() {
	      infoWindowRight.close();
   	});
   }

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers(setMap);
   
   // Create second map only when initialize function is called for the first time.
   // Second time setMap is equal to mapRight, so this condition returns false and it will not run  
   if(setMap == "mapLeft"){
      initialize("mapRight");   
   }
   
}
google.maps.event.addDomListener(window, 'load', function(){ initialize("mapLeft") });


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(setMap){
   
   var markersData;
   var map;
   
   if(setMap == "mapLeft"){
      markersData = markersDataLeft;
      map = mapLeft;
   } else {
      markersData = markersDataRight;
      map = mapRight;
   }
   
   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var html = markersData[i].html;

      createMarker(setMap, latlng, name, address1, address2, html);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(setMap, latlng, name, address1, address2, html){
   
   var map;
   var infoWindow;
   
   if(setMap == "mapLeft"){
      map = mapLeft;
      infoWindow = infoWindowLeft;
   } else {
      map = mapRight;
      infoWindow = infoWindowRight;
   }
   
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      
	  
	  
	  // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         html + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}