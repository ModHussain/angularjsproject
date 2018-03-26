resourceApp.controller('resourcelistCtrl',function($scope,$http,$filter,RAService){
	
	$scope.Selectors =["FirstName","Email","Mobile","Skills","Experience","Availability","PreferredLocation","City"];
	
	$http({
	method : "GET",
		url : "http://localhost:8080/ResourceAdda/rest/resource/listResources/1/15",
	}).then(function ralist(response){
		$scope.ralist1 = response.data;
	console.log("array" + $scope.ralist1);
	
	})

	console.log("working ra ctrl");
	
	
//	
//	//search filter code
   
    
	/*resourceApp.filter("search", function ($filter) {
	        return function (ralist1, $scope) {
	            var selected = $scope.selected;
	            var parameter = $scope.parameter;                
	            if (parameter == undefined || parameter == '') return ralist1;
	            var resultSet = [];
	            for (var i = 0; i < ralist1.length; i++) {
	                var resource = ralist1[i];
	                if (selected == 'FirstName') {
	                    if (parameter == resource.firstName)
	                        resultSet.push(resource);
	                }
	                if (selected == 'Email') {
	                    if (parameter == resource.emailId)
	                        resultSet.push(resource);
	                }
	                if (selected == 'Mobile') {
	                    if (parameter == resource.mobileNumber)
	                        resultSet.push(resource);
	                }
	                if (selected == 'Skills') {
	                    if (parameter == resource.skills)
	                        resultSet.push(resource);
	                }
	                if (selected == 'Experience') {
	                    if (parameter == resource.totalExperience)
	                        resultSet.push(resource);
	                }
	                if (selected == 'Availability') {
	                    if (parameter == resource.availability)
	                        resultSet.push(resource);
	                }
	                if (selected == 'PreferredLocation') {
	                    if (parameter == resource.preferredLocation)
	                        resultSet.push(resource);
	                }
	                if (selected == 'City') {
	                    if (parameter == resource.city)
	                        resultSet.push(resource);
/	                }
					}  
							return resultSet;

           
        }
    })
	
		*/
		
	//	 end of search code
//	$scope.add=function(){
//	var filter={
//			totalExperience:$scope.selected,
//			constant:$scope.parameter,
//	};
//	
//	RAService.advancefilter(filter).then(function(data){
//		$scope.resourcelist=data.data;
//		cons},function(err)
//		
//	}
			
			
})
		


	
