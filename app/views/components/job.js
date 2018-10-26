import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag } from 'antd';

const availability = {
  'hourly': '#87d068',
  'part-time': 'orange',
  'full-time': '#2db7f5'
};
let jobsList = (list, index) => {
  return (
    <div>
      <h3>{list.role}</h3>
      <Tag color={availability[list.availability]}>{list.availability}</Tag>
      <p>{list.description}</p>
    </div>
  );
};

const Job = (props) => {
  let jobResults;
  if (props.searchJobs instanceof Array) {
    let results = props.searchJobs;
    jobResults = results.map(jobsList);
  }
  return (
    <div>
      {jobResults}
    </div>
  );
}

Job.displayName = 'Job';

export default Job;