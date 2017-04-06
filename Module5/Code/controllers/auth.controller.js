function AuthController() {

    var roles;
    var user;
    function setRoles(role) {
        roles = role;
        user.roles = role;
    }
    function setUser(inUser) {
        user = inUser;
    }
    function isAuthorized(neededRole) {
        if (user) {
            return user.isAuthorized(neededRole);
        }

    }

    function isAuthorizedAsync(neededRole, cb) {
        setTimeout(function () { cb(roles.indexOf(neededRole) >= 0) }, 0);
    }
    function isAuthorizedPromise(neededRole, cb) {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(roles.indexOf(neededRole) >= 0) }, 0);
        });

    }
    function getIndex(req, res) {
        try {
            if (req.user.isAuthorized('admin')) {
                return res.render('index');
            }
            res.render('notAuth');
        } catch (e) {
            res.render('error');
        }

    }
    return {
        isAuthorized, isAuthorizedAsync, setRoles, setUser,
        isAuthorizedPromise, getIndex
    };
}

module.exports = AuthController();