Epa.ApplicationAdapter = DS.FixtureAdapter;

Epa.TeacherAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000/teacher'
});

Epa.TeacherSerializer = DS.RESTSerializer.extend({
    primaryKey: '_id'
});

Epa.TeacherStore = DS.Store.extend({
    revision: 12,
    adapter: 'Epa.TeacherAdapter'
});
