import React from 'react';
import { Segment } from 'semantic-ui-react';
const Alert = (alert) => {
  console.log(alert);
  return (
    alert.alert !== null && (
      <Segment color={alert.alert.color} inverted>
        {alert.alert.msg}!!
      </Segment>
    )
  );
};
export default Alert;
