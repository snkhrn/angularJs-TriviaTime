var triviaServices = angular.module('triviaServices', []);

triviaServices.constant('FIREBASE_URL', 'https://brilliant-fire-431.firebaseio.com/questions');

triviaServices.service('FirebaseService', function($firebase, FIREBASE_URL) {
    this.getQuestion = function(questionId) {
        return $firebase(new Firebase(FIREBASE_URL + '/' + questionId));
    };
    this.getAllQuestions = function() {
        return $firebase(new Firebase(FIREBASE_URL));
    };
});