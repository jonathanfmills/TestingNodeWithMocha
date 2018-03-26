var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");

var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('https');
var rewire = require('rewire');

var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();

chai.use(chaiAsPromised);
chai.should();

describe('GitController', function () {
    var getUser = {};
    beforeEach(function(){
        var gitService = GitCtrl.__get__('gitService');
        getUser = sinon.spy(gitService, 'getUser');
        GitCtrl.__set__('gitService', gitService);

        this.request = sinon.stub(http, 'request');
        var gitJson = {login:'jonathanfmills'};
        var repoJson = {name: 'testRepo'};

        this.gitResponse = new PassThrough();
        this.gitResponse.write(JSON.stringify(gitJson));
        this.gitResponse.end();

        this.repoResponse = new PassThrough();
        this.repoResponse.write(JSON.stringify(gitJson));
        this.repoResponse.end();

        this.request
            .onFirstCall().callsArgWith(1,this.gitResponse).returns(new PassThrough())
            .onSecondCall().callsArgWith(1,this.repoResponse).returns(new PassThrough());
    });

    it.only('should get a user and repos', function(done){
        this.timeout(10000);
        
        var res = {json: test};
        var req = {params:{userId:'jonathanfmills'}};

         gitController.userGet(req, res);

        function test(user){
            user.login.should.equal('jonathanfmills');
            console.log( getUser.getCall(0).args);
            done();
        }

    })

    afterEach(function(){
        http.request.restore(); 
    });


});

