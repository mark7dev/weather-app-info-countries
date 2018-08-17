import React, { Component } from 'react';
 class Country extends Component {
  render() {
    return (
      <h3>{ this.props.match.params.cityName.toUpperCase () }</h3>
      <h3>{ this.state.timezone }</h3>
              <p>{ this.state.summary }</p>
              <h5>Weekly</h5>
              <div className='week'>
                { this.state.weekly.map(day => {
                  return (
                    <div className='day'>
                      <div className='day__icon'>
                        { this.renderIcon(day.icon) }
                      </div>
                      <p className='day__temp'>{ this.dateToString(day.sunriseTime) }</p>
                      <p className='day__temp'>{ this.dateToString(day.sunsetTime) }</p>
                      <p className='day__wind'>{ day.windSpeed } m/s</p>
                      <p className='day__press'>{ day.pressure } hpa</p>
                    </div>
                  );
                }) }
              </div>
              <h5>Hourly</h5>
              <table className=''>
                <thead>
                  <tr>
                    <th>{ new Date().toLocaleString().split(',')[0] }</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.hourly.map((hour, index) => {
                    return (
                      <tr>
                        <td>
                          <small>{ index + 1 }</small>
                          <strong> { new Date(hour.time * 1000).getHours() }:00</strong>,
                          { hour.temperature } ºF,
                          <em>{ hour.summary.toLowerCase() }</em>,
                          { hour.windSpeed } m/s,
                          { hour.pressure }
                        </td>
                      </tr>
                    );
                  }) }
                </tbody>
   getCoords = (ENDPOINT) => {
  return request.get(ENDPOINT);
}

fetchWeather = (response) => {
  const coords = response.body.results[0].geometry.location;

const ENDPOINT = `https://api.darksky.net/forecast/8c6c8467512243aac21331fe2e8d328e/${ coords.lat }, ${ coords.lng }`;

request
  .get(ENDPOINT)
  .then(response => {
    this.setState({
      weekly: response.body.daily.data,
      hourly: response.body.hourly.data,
      timezone: response.body.timezone,
      summary: response.body.currently.summary
    });
  });
}
   getCoords = (ENDPOINT) => {
  return request.get(ENDPOINT);
}

fetchWeather = (response) => {
  const coords = response.body.results[0].geometry.location;

const ENDPOINT = `https://api.darksky.net/forecast/8c6c8467512243aac21331fe2e8d328e/${ coords.lat }, ${ coords.lng }`;

request
  .get(ENDPOINT)
  .then(response => {
    this.setState({
      weekly: response.body.daily.data,
      hourly: response.body.hourly.data,
      timezone: response.body.timezone,
      summary: response.body.currently.summary
    });
  });
}
  }getCoords = (ENDPOINT) => {
  return request.get(ENDPOINT);
}

fetchWeather = (response) => {
  const coords = response.body.results[0].geometry.location;

const ENDPOINT = `https://api.darksky.net/forecast/8c6c8467512243aac21331fe2e8d328e/${ coords.lat }, ${ coords.lng }`;

request
  .get(ENDPOINT)
  .then(response => {
    this.setState({
      weekly: response.body.daily.data,
      hourly: response.body.hourly.data,
      timezone: response.body.timezone,
      summary: response.body.currently.summary
    });
  });
}
}
 export default Country;