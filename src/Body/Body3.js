import React from 'react';
import { Media } from 'reactstrap';

const Body3 = () => {
  return (
    <Media>
      <Media left href="#">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kdHwufi3FYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default Body3;