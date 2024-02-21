exports.create = (req, res) => {
	res.send({messag: "create handler"});
};

exports.findAll = (req, res)  => {
	res.send({messag: "findAll handler"});
};
exports.findOne = (req, res)  => {
	res.send({messag: "findOne handler"});
};
exports.update = (req, res)  => {
	res.send({messag: "update handler"});
};
exports.delete = (req, res)  => {
	res.send({messag: "delete handler"});
};
exports.deleteAll = (req, res)  => {
	res.send({messag: "deleteAll handler"});
};
exports.findAllFavorite = (req, res)  => {
	res.send({messag: "findAllFavorite handler"});
};


