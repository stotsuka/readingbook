var postSignUp = function (userId, info) {
    console.log(userId);
    console.log(info.profile.class);
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.class]);
}


AccountsTemplates.configure({
    postSignUpHook: postSignUp
});