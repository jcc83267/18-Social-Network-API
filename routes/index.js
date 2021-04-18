const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Page does not exist(yet, maybe) </h1>');
});

module.exports = router;