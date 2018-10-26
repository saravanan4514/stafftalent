'use strict';
import mockData from '../mockdata/jobs';
let jobResults;

jobResults = (req, res) => {
  res.status(200).send(mockData.jobs);
};

export default jobResults;
