let assert = require('assert');
let authController = require('../../controllers/auth.controller');
// import * as auth from '../../controllers/auth.controller'

describe('AuthController', () =>  {
    beforeEach(function settingUpRoles () {
        // console.log('running before each test');
        authController.setRoles(['user'])
    });
    ///////////////////// example of a bad beforeEach function //////////////
    // beforeEach('this function may throw bad errors', function () {
    //     throw({error: 'error'})
    // })
    describe('isAuthorized', () => {
        it('should return false if not authorized', () => {
            assert.equal(false, authController.isAuthorized('admin'));
        });

        it('should return true if authorized', () => {
            authController.setRoles(['user', 'admin'])
            assert.equal(true, authController.isAuthorized('admin'));
        });
        
        // Setting up a test that will register as pending
        it('should not allow a get if not authorized')
        it('should allow a get if authorized')
    })

    describe('isAuthorizedAsync', () => {
        it('should return false if not authorized', (done) => {
            authController.setRoles(['user']);
            authController.isAuthorizedAsync('admin', function (isAuth) {
                assert.equal(false, isAuth);
                done();            
            });
        });

        it.skip('should return true if authorized', function (done) {
            authController.setRoles(['user', 'admin']);
            authController.isAuthorizedAsync('admin', function (isAuth) {
                assert(true, isAuth)
            })
        })
    })
})
