var chai = require('chai'),
    sinon = require('sinon'),
    https = require('https');
var PassThrough = require('stream').PassThrough;

var gitJson = {
    login: "jonathanfmills",
    id: 138754,
    avatar_url: "https://avatars3.githubusercontent.com/u/138754?v=3",
    gravatar_id: "",
    url: "https://api.github.com/users/jonathanfmills",
    html_url: "https://github.com/jonathanfmills",
    followers_url: "https://api.github.com/users/jonathanfmills/followers",
    following_url: "https://api.github.com/users/jonathanfmills/following{/other_user}",
    gists_url: "https://api.github.com/users/jonathanfmills/gists{/gist_id}",
    starred_url: "https://api.github.com/users/jonathanfmills/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jonathanfmills/subscriptions",
    organizations_url: "https://api.github.com/users/jonathanfmills/orgs",
    repos_url: "https://api.github.com/users/jonathanfmills/repos",
    events_url: "https://api.github.com/users/jonathanfmills/events{/privacy}",
    received_events_url: "https://api.github.com/users/jonathanfmills/received_events",
    type: "User",
    site_admin: false,
    name: "Jonathan Mills",
    company: null,
    blog: null,
    location: null,
    email: null,
    hireable: null,
    bio: null,
    public_repos: 27,
    public_gists: 3,
    followers: 151,
    following: 0,
    created_at: "2009-10-12T16:05:52Z",
    updated_at: "2017-01-14T03:52:52Z"
}

var repoJson = [{
    id: 28144218,
    name: "AngularForTheNetDev",
    full_name: "jonathanfmills/AngularForTheNetDev",
    owner: {
        login: "jonathanfmills",
        id: 138754,
        avatar_url: "https://avatars3.githubusercontent.com/u/138754?v=3",
        gravatar_id: "",
        url: "https://api.github.com/users/jonathanfmills",
        html_url: "https://github.com/jonathanfmills",
        followers_url: "https://api.github.com/users/jonathanfmills/followers",
        following_url: "https://api.github.com/users/jonathanfmills/following{/other_user}",
        gists_url: "https://api.github.com/users/jonathanfmills/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jonathanfmills/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jonathanfmills/subscriptions",
        organizations_url: "https://api.github.com/users/jonathanfmills/orgs",
        repos_url: "https://api.github.com/users/jonathanfmills/repos",
        events_url: "https://api.github.com/users/jonathanfmills/events{/privacy}",
        received_events_url: "https://api.github.com/users/jonathanfmills/received_events",
        type: "User",
        site_admin: false
    },
    private: false,
    html_url: "https://github.com/jonathanfmills/AngularForTheNetDev",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev",
    forks_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/forks",
    keys_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/teams",
    hooks_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/hooks",
    issue_events_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/issues/events{/number}",
    events_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/events",
    assignees_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/assignees{/user}",
    branches_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/branches{/branch}",
    tags_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/tags",
    blobs_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/statuses/{sha}",
    languages_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/languages",
    stargazers_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/stargazers",
    contributors_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/contributors",
    subscribers_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/subscribers",
    subscription_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/subscription",
    commits_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/contents/{+path}",
    compare_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/merges",
    archive_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/downloads",
    issues_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/issues{/number}",
    pulls_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/pulls{/number}",
    milestones_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/milestones{/number}",
    notifications_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/labels{/name}",
    releases_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/releases{/id}",
    deployments_url: "https://api.github.com/repos/jonathanfmills/AngularForTheNetDev/deployments",
    created_at: "2014-12-17T16:00:21Z",
    updated_at: "2014-12-17T16:29:31Z",
    pushed_at: "2014-12-17T16:29:11Z",
    git_url: "git://github.com/jonathanfmills/AngularForTheNetDev.git",
    ssh_url: "git@github.com:jonathanfmills/AngularForTheNetDev.git",
    clone_url: "https://github.com/jonathanfmills/AngularForTheNetDev.git",
    svn_url: "https://github.com/jonathanfmills/AngularForTheNetDev",
    homepage: null,
    size: 18984,
    stargazers_count: 0,
    watchers_count: 0,
    language: "PowerShell",
    has_issues: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
}]

chai.should();
var gitService = require('../../services/gitService')();

describe('GitService', function () {
    describe.only('GetUser', function () {
        beforeEach(function () {
            this.request = sinon.stub(https, 'request');
        });
        it('should return user and repos', function () {
            this.timeout(10000);
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            var repoResponse = new PassThrough();
            repoResponse.write(JSON.stringify(repoJson));
            repoResponse.end();

            this.request
            .onFirstCall().callsArgWith(1, gitResponse).returns(new PassThrough())
            .onSecondCall().callsArgWith(1, repoResponse).returns(new PassThrough());
            
            //https.request = {};
            return gitService.getUser('jonathanmills').then(
                 (user) => {
                    var params = this.request.getCall(0).args;
                    params[0].headers['User-Agent'].should.equal('gitExample');

                    this.request.getCall(1).args[0].path.should.equal('/users/jonathanmills/repos')
                    user.login.should.equal('jonathanfmills');
                    user.should.have.property('repos');
                }
            );
        })
        afterEach(function () {
            this.request.restore();
        });
    })
});