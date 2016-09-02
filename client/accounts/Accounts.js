var myLogoutFunc = function () {
    Session.set('nav-toggle', '');
    FlowRouter.go('/');
}


AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    onLogoutHook: myLogoutFunc
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');


AccountsTemplates.addFields([
     {
         _id: "username",
         type: "text",
         displayName: "ユーザーネーム",
         required: true,
         minLength: 5,
     },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "Eメイル",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd,
    {
        _id: 'lastName',
        type: 'text',
        displayName: '苗字',
        required: true,
    }, {
        _id: 'firstName',
        type: 'text',
        displayName: '名前',
        required: true,
    }, {
        _id: 'class',
        type: 'select',
        displayName: 'クラス',
        required: true,
        select: [
            {
                text: 'クラスを選んで下さい',
                value: ''
            }, {
                text: 'K-1',
                value: 'K-1'
            }, {
                text: 'K-2',
                value: 'K-2'
            }, {
                text: 'K-3',
                value: 'K-3'
            },{
                text: '1-1',
                value: '1-1'
            }, {
                text: '1-2',
                value: '1-2'
            }, {
                text: '1-3',
                value: '1-3'
            }, {
                text: '1-4',
                value: '1-4'
            }, {
                text: '2-1',
                value: '2-1'
            }, {
                text: '2-2',
                value: '2-2'
            }, {
                text: '2-3',
                value: '2-3'
            }, {
                text: '2-4',
                value: '2-4'
            }, {
                text: '3-1',
                value: '3-1'
            }, {
                text: '3-2',
                value: '3-2'
            }, {
                text: '3-3',
                value: '3-3'
            }, {
                text: '3-4',
                value: '3-4'
            }, {
                text: '4-1',
                value: '4-1'
            }, {
                text: '4-2',
                value: '4-2'
            }, {
                text: '5-1',
                value: '5-1'
            }, {
                text: '5-2',
                value: '5-2'
            }, {
                text: '5-3',
                value: '5-3'
            }, {
                text: '6-1',
                value: '6-1'
            }, {
                text: '6-2',
                value: '6-2'
            }

        ]
    },
      
]);