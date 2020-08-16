const fighterService = require('../services/fighter.service');

module.exports = {
    submit,
    edit,
    deleteFighter,
    getFighters
};

function submit(req, res, next) {
    console.log(req.user);
    console.log(req.params.username);

    fighterService.addFighter(req.body, req.user.sub, req.params.username)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getFighters(req, res, next) {

    fighterService.getFighters()
        .then(fighters => res.json(fighters))
        .catch(err => next(err));
}

function edit(req, res, next) {
    console.log(req.body);
    console.log(req.params.username);

    fighterService.edit(req.body, req.user.sub, req.params.username)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function deleteFighter(req, res, next) {
    console.log(req.params.date);
    console.log(req.params.username);

    fighterService.deleteFighter(req.params.date, req.user.sub, req.params.username)
        .then(() => res.json({}))
        .catch(err => next(err));
}
