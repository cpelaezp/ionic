angular.module('starter.services', [])

.factory('Auth', function($firebaseAuth, $firebase){
    var endPoint = "https://auth.firebase.com/v2/applicados/auth/github/callback";
    var usersRef = new Firebase(endPoint);
    return $firebaseAuth(usersRef);
});