var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('https');

var gitService = require('../../services/gitService')();

chai.use(chaiAsPromised);
chai.should();

describe('GitService', function () {
    beforeEach(function(){
        this.request = sinon.stub(http, 'request');
        
    });

    it('should get a user and repos', function(){
        this.timeout(10000);
        var gitJson = {login:'jonathanfmills'};
        var repoJson = {name: 'testRepo'};

        var gitResponse = new PassThrough();
        gitResponse.write(JSON.stringify(gitJson));
        gitResponse.end();

        var repoResponse = new PassThrough();
        repoResponse.write(JSON.stringify(gitJson));
        repoResponse.end();

        var req1 = new PassThrough();
        var req2 = new PassThrough();
        this.request
            .onFirstCall().callsArgWith(1,gitResponse).returns(req1)
            .onSecondCall().callsArgWith(1,repoResponse).returns(req2);

            var req = this.request;
        return gitService.getUser('jonathanfmills').then(function(user){
            console.log(req.getCall(0).args[0]);
            user.login.should.equal('jonathanfmills');
            user.should.have.property('repos');    
               
        })

    })

    afterEach(function(){
        http.request.restore(); 
    });


});

