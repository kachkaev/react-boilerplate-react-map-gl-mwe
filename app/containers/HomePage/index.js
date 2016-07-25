/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MapGL from 'react-map-gl';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <h1>react-boilerplate + react-map-gl</h1>
        {/* Do not re-use my Mapbox token apart from in this demo, I will delete it soon. Get yours at mapbox.com */}
        <MapGL
          width={400}
          height={400}
          longitude={0}
          latitude={0}
          zoom={4}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoia2FjaGthZXYiLCJhIjoiY2lyMjFsazI2MDA3eWkybWc3NjNlbmZrdiJ9._AVffYG3hv267NhgRhSl3Q"
        />
      </div>
    );
  }
}
