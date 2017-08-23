var watchesApp = angular.module('newsFeedApp', ['ngCookies']);

watchesApp.controller('newsfeed6Ctrl', ['$scope', '$http', '$filter', '$timeout', '$cookieStore', function ($scope, $http, $filter, $timeout, $cookieStore) {

    $scope.article = null;

    $scope.findArtsUrl = "findArticle.php";

    function getArticle(url) {
        var seeArticle = $cookieStore.get('seeArticle');

        $http({
            method: 'GET',
            url: url + "?_id=[" + JSON.stringify(seeArticle['keyArt']) + "]"
        }).success(function (data) {
            $scope.article = data[0];
            $scope.article['position'] = seeArticle['position'];
            $scope.article['articles'] = seeArticle['articles'];
            $scope.article['sub'] = seeArticle['sub'];

        }).error(function (data, status, headers, config) {
        });
    }

    getArticle($scope.findArtsUrl);

    $scope.back = function () {
        window.location.replace("sass_newfeed_5.html");
    };

    $scope.goToComment = function () {
        window.location.replace("sass_newfeed_13.html");
    };

    $scope.goToUrl = function (url) {
        window.location.replace(url);
    };

    $scope.getDomain = function (url) {

        var a = document.createElement('a');
        a.href = url;

        return a.hostname;
    };


}]);