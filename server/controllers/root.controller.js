const axios = require("axios");

// http://localhost:8080/
const getRoute = (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
	const { data } = req.body;
	const sendBody = {
		routeName: "GET",
		body: {
      id,
      name,
			data,
		},
	};
	res.send(sendBody);};

const postRoute = (req, res) => {
	const { data } = req.body;
	const sendBody = {
		routeName: "POST",
		body: {
			data: data,
		},
	};
	res.send(sendBody);
};

const putRoute = (req, res) => {
	const { data } = req.body;
	const sendBody = {
		routeName: "PUT",
		body: {
			data: data,
		},
	};
	res.send(sendBody);
};

const deleteRoute = (req, res) => {
	const { data } = req.body;
	const sendBody = {
		routeName: "DELETE",
		body: {
			data: data,
		},
	};
	res.send(sendBody);
};

module.exports = { getRoute, postRoute, putRoute,	deleteRoute };
