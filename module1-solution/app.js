(function () {
'use strict';
       
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
    
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.checkStatus = function(value) {
        if (value != null){
            var array = value.split(",");
            var arrLen = array.length;
            var whitespaces = "";

            for (var i=0; i < array.length; i++){
                var removeSpaces = array[i].replace(/^\s+|\s+$/gm,'');
                if (removeSpaces === ""){
                    arrLen = arrLen - 1;
                }
            }
            
            if (arrLen <= 3) {
                $scope.myStyle = {color: 'green'};
                $scope.inputStyle = {border: '4px solid green'};
                return $scope.textboxStatus = "Enjoy!";
            }
            else {
                $scope.myStyle = {color: 'red'};
                $scope.inputStyle = {border: '4px solid red'};
                return $scope.textboxStatus = "Too much!";
            }
        }
        else{
            $scope.inputStyle = {border: '1px solid black'};
            return $scope.textboxStatus = "Please enter data first";
        }
    };
}
})();