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

## Props

* [`end`](#end)
* [`interval`](#interval)
* [`renderStamp`](#renderStamp)
* [`renderExpired`](#renderExpired)

<a name="end"></a>
##### end (required)
Accepts a **Date** object, a **Moment** object, or a **Number** `timestamp`.

<a name="interval"></a>
##### interval (optional)
The second parameter for **setInterval** is optional with default value of `1000`.


<a name="renderStamp"></a>
##### renderStamp (optional)

<a name="renderExpired"></a>
##### renderExpired (optional)

## Development

```shell
npm install
npm start # watch and build.
```
