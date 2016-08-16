/**
 * Created by mlingolu on 7/18/16.
 */

angular.module('smart-app').controller('BodyCtrl',['$scope',BodyCtrl]);

function BodyCtrl($scope) {
    var ctrl=this;
    ctrl.chatBoxOpend=false;

    ctrl.openChatBox=function () {
        ctrl.chatBoxOpend=!ctrl.chatBoxOpend;
    }
}