Epa.Router.map(function () {
    this.resource('home', { path: '/' }, function() {
        this.resource('students');
        this.resource('teachers');
    });
    this.resource('about');
    this.resource('program');
    this.resource('blog');
    this.resource('contact');
    this.resource('login');
});
