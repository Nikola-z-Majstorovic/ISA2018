myModule.factory('appService', [ '$rootScope', '$location', function($rootScope, $location) {
	return {
				init : function() {
				   $rootScope.loginuser = {
						    email:"",
						    password:"",
						    role:"UNREGISTRATED"
				    };
						   
					$rootScope.changeView = function(view) {
						$location.path(view);
					};
					$rootScope.logOut = function() {
						$rootScope.loginuser = {
								email:"",
					    		password:"",
					    		role:"UNREGISTRATED"
					    };
						$rootScope.changeView("/login");
					};
					
					
//					$rootScope.mainFriendRequests = [
//						{userID: 2, friendID: 1, approved: true, sender: true},
//						{userID: 1, friendID: 2, approved: true, sender: false}
//						
//					];
//					$rootScope.users = [{userID: 1, name: 'Pera', surname: 'Peric', role: 'sysadmin'},
//										{userID: 2, name: 'Djura', surname: 'Djuric', role: 'cintheadmin'},
//										{userID: 3, name: 'Milos', surname: 'Misic', role: 'customer'}];
					
//					$rootScope.cinemasAndTheaters = [
//							{cinemaTheaterId: 1, name: 'Srpsko narodno pozoriste', description: 'This is description', address: 'Novosadska 15', isCinema: 0, EntityRate: 20},
//							{cinemaTheaterId: 2, name: 'Pozoriste terazije', description: 'This is description', address: 'Beogradska 1', isCinema: 0, EntityRate: 30},
//							{cinemaTheaterId: 3, name: 'Krusevacki bioskop', description: 'This is description', address: 'Uzicka 10', isCinema: 1, EntityRate: 40},
//							{cinemaTheaterId: 4, name: 'Evropa', description: 'This is description', address: 'Nikole Tesle 32', isCinema: 1, EntityRate: 45},
//						];
					
					//$rootScope.loginuser = $rootScope.users[1];
//					
//					$rootScope.repertoires = [
//						{repertoireId: 1, dateTime: "01.02.2018 20:00", price: 200, cinemaTheaterId: 1,idRoom:1, idProduction:3},
//						{repertoireId: 2, dateTime: "02.02.2018 20:00", price: 250, cinemaTheaterId: 2,idRoom:1, idProduction:3},
//						{repertoireId: 3, dateTime: "02.02.2018 20:00",  price: 180, cinemaTheaterId: 3,idRoom:2, idProduction:2},
//						{repertoireId: 4, dateTime: "01.02.2018 22:00",  price: 220, cinemaTheaterId: 3,idRoom:1, idProduction:1},
//						{repertoireId: 5, dateTime: "01.02.2018 20:00",  price: 210, cinemaTheaterId: 4,idRoom:2, idProduction:1}
//					];
					
//					$rootScope.productions = [
//						{idProduction:1,name:"Terminator",actors:"Arnold Schwizerneger",genre:"action",nameOfDirector:"John Smith",duration:1.5,avrageRating:5,description:"/",isMovie:1},
//						{idProduction:2,name:"Home alone",actors:"/",genre:"comedy",nameOfDirector:"",duration:1.3,avrageRating:4,description:"/",isMovie:1},
//						{idProduction:3,name:"Pokondirana tikva",actors:"/",genre:"comedy",nameOfDirector:"Sterija Popovic",duration:1.4,avrageRating:5,description:"/",isMovie:0}
//					];
					
//					$rootScope.hcReservations = [
//						{
//							id: 1,
//							rowNumber: 1,
//							sitNumber: 1,
//							senderId: null,
//							userID: 2,
//							RepertoireId: 2,
//							approved: true
//						},
//						{
//							id: 2,
//							rowNumber: 3,
//							sitNumber: 2,
//							senderId: 1,
//							userID: 2,
//							RepertoireId: 1,
//							approved: false
//						}
//
//					];
//					
//					$rootScope.rooms = [
//					{idRoom:1,name:"1",numOfSits:10,numOfRows:6,cinemaTheaterId:1},
//					{idRoom:2,name:"2",numOfSits:8,numOfRows:4,cinemaTheaterId:1},
//					{idRoom:3,name:"1",numOfSits:10,numOfRows:6,cinemaTheaterId:2},
//					{idRoom:4,name:"2",numOfSits:8,numOfRows:4,cinemaTheaterId:2},
//					{idRoom:5,name:"1",numOfSits:10,numOfRows:6,cinemaTheaterId:3},
//					{idRoom:6,name:"2",numOfSits:8,numOfRows:4,cinemaTheaterId:3},
//					{idRoom:7,name:"1",numOfSits:10,numOfRows:6,cinemaTheaterId:4},
//					{idRoom:8,name:"2",numOfSits:8,numOfRows:4,cinemaTheaterId:4}
//					];
					



				},
				// #region Lodash helpers (remove/find/filter)
				lodashRemoveBy : function(array, propertyName, propertyValue) {
					return _.remove(array, [ propertyName, propertyValue ]);
				},
				lodashFindBy : function(array, propertyName, propertyValue) {
					return _.find(array, [ propertyName, propertyValue ]);
				},
				lodashFilterBy : function(array, propertyName, propertyValue) {
					return _.filter(array, [ propertyName, propertyValue ]);
				},
				lodashSortBy : function(array, propertyName) {
					return _.sortBy(array, [ propertyName ]);
				},
				findBy : function(array, propertyName, propertyValue) {
					if (array) {
						if (array.length != 0) {
							for (var i = 0; i < array.length; i++) {
								if (array[i][propertyName] === propertyValue) {
									return array[i];
								}
							}
						}
					}
					return null;
				}
			}
		} 
]);