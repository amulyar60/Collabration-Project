var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider)
{
	$routeProvider	

	.when('/', {
		templateUrl: 's_home/welcome.html',
		controller: 'HomeController'
	})
	.when('/userprofile', {
		templateUrl: 's_user/frmUserProfile.html',
		controller: 'UserProfileController'
	})
	.when('/login', {
		templateUrl: 's_user/frmLogin.html',
		controller: 'UserProfileController'
	})
	.when('/listusersadmin', {
		templateUrl: 's_user/frmUserListAdmin.html',
		controller: 'UserProfileController'
	})
	.when('/listallusers', {
		templateUrl: 's_friend/frmAllUsers.html',
		controller: 'FriendController'
	})
	.when('/listpending', {
		templateUrl: 's_friend/frmPendingRequest.html',
		controller: 'FriendController'
	})
	.when('/listmyfriends', {
		templateUrl: 's_friend/frmViewFriends.html',
		controller: 'FriendController'
	})
	
	.when('/viewjobs', {
		templateUrl: 's_job/frmListJob.html',
		controller: 'JobController'
	})
	.when('/addjob', {
		templateUrl: 's_job/frmJob.html',
		controller: 'JobController'
	})
	.when('/viewappliedjobs',
	{
		templateUrl: 's_job/frmViewMyJobApply.html',
		controller: 'JobController'
	})
	.when('/approveblogs', {
		templateUrl: 's_blog/frmUserBlogAdmin.html',
		controller: 'BlogController'
	})
	.when('/viewblogs', {
		templateUrl: 's_blog/frmListBlog.html',
		controller: 'BlogController'
	})
	.when('/addblog', {
		templateUrl: 's_blog/frmBlog.html',
		controller: 'BlogController'
	})
	.when('/myblog', {
		templateUrl: 's_blog/frmMyBlog.html',
		controller: 'BlogController'
	})
	.when('/approveforums', {
		templateUrl: 's_forum/frmUserForumAdmin.html',
		controller: 'ForumController'
	})
	.when('/viewforums', {
		templateUrl: 's_forum/frmListForum.html',
		controller: 'ForumController'
	})
	.when('/addforum', {
		templateUrl: 's_forum/frmForum.html',
		controller: 'ForumController'
	})
	.when('/myforum', {
		templateUrl: 's_forum/frmMyForum.html',
		controller: 'ForumController'
	})
	.when('/addforumcmts', {
		templateUrl: 's_forum/frmAddComment.html',
		controller: 'ForumController'
	})
	.when('/listallusers', {
		templateUrl: 's_friend/frmAllUsers.html',
		controller: 'FriendController'
	})
	.when('/chat', {
		templateUrl: 's_chat/chat.html',
		controller: 'ChatController'
	})
	
	.otherwise({redirectTo: '/'});
});

app.run( function($rootScope,$location,$cookieStore,$http){
    
    $rootScope.$on('$locationChangeStart',function(event,next,current){
        console.log("$locationChangeStart")
        var restrictedPage=$.inArray($location.path(),['/login', '/userprofile', '/addjob','/addblog'])== -1;
        console.log("restrictedpage ;"+restrictedPage)
        var loggedIn=$rootScope.currentUser;
        console.log("loggedin:"+loggedIn)
        if(restrictedPage & !loggedIn){
            console.log("navigation to login page")
            $location.path('/home');
        }
        
    });
    
    $rootScope.currentUser=$cookieStore.get('currentUser')||{};
    if($rootScope.currentUser){
        $http.defaults.headers.common['Authorization']= 'Basic' + $rootScope.currentUser;
    }
    
});