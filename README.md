# React Livestamp
Auto updating timeago text to your timestamped for React

## Installation

```shell
npm install react-livestamp --save
```

## Basic Usage
```js
import React from 'react';
import Livestamp from 'react-livestamp';

// Dummy date
const end_date = new Date();

// add 5 hours.
end_date.setHours(end_date.getHours()+5);

class App extends React.Component {
  render() {
    return (
      <Livestamp end={end_date} />
    )
  }
}
```

## Development

```shell
npm install
npm start # watch and build.
```
