var Todo = require('./models/home');

function getDatas(res) {
    Todo.find(function (err, home) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(home); // return all todos in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/home', function (req, res) {
        // use mongoose to get all todos in the database
        //getDatas(res);
        res.send("GET API works")
    });

    // create todo and send back all todos after creation
    app.post('/api/home', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            book: req.body.book,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getDatas(res);
        });

    });

    // delete a todo
    app.delete('/api/home/:home_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, home) {
            if (err)
                res.send(err);

            getDatas(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
