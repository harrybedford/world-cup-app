import React, { Fragment } from 'react'

import Event from '../components/Event'

const Events = ({events = worldCups}) => (
  <Fragment>
    <h2>All {events.length} World Cups</h2>
    {
      events.map((event, i) => <Event event={event} i={i} />)
    }
  </Fragment>
)

export default Events

const worldCups = [
  {
    "name": "2018 FIFA World Cup Russia",
    "year": 2018,
    "host": [
      {
        "name": "Russia"
      }
    ]
  },
  {
    "name": "2014 FIFA World Cup Brazil",
    "year": 2014,
    "host": [
      {
        "name": "Brazil"
      }
    ]
  },
  {
    "name": "2010 FIFA World Cup South Africa",
    "year": 2010,
    "host": [
      {
        "name": "South Africa"
      }
    ]
  },
  {
    "name": "2006 FIFA World Cup Germany",
    "year": 2006,
    "host": [
      {
        "name": "Germany"
      }
    ]
  },
  {
    "name": "2002 FIFA World Cup Korea",
    "year": 2002,
    "host": [
      {
        "name": "Korea Republic"
      },
      {
        "name": "Japan"
      }
    ]
  },
  {
    "name": "1998 FIFA World Cup France",
    "year": 1998,
    "host": [
      {
        "name": "France"
      }
    ]
  },
  {
    "name": "1994 FIFA World Cup USA",
    "year": 1994,
    "host": [
      {
        "name": "USA"
      }
    ]
  },
  {
    "name": "1990 FIFA World Cup Italy",
    "year": 1990,
    "host": [
      {
        "name": "Italy"
      }
    ]
  },
  {
    "name": "1986 FIFA World Cup Mexico",
    "year": 1986,
    "host": [
      {
        "name": "Mexico"
      }
    ]
  },
  {
    "name": "1982 FIFA World Cup Spain",
    "year": 1982,
    "host": [
      {
        "name": "Spain"
      }
    ]
  },
  {
    "name": "1978 FIFA World Cup Argentina",
    "year": 1978,
    "host": [
      {
        "name": "Argentina"
      }
    ]
  },
  {
    "name": "1974 FIFA World Cup Germany",
    "year": 1974,
    "host": [
      {
        "name": "Germany FR"
      }
    ]
  },
  {
    "name": "1970 FIFA World Cup Mexico",
    "year": 1970,
    "host": [
      {
        "name": "Mexico"
      }
    ]
  },
  {
    "name": "1966 FIFA World Cup England",
    "year": 1966,
    "host": [
      {
        "name": "England"
      }
    ]
  },
  {
    "name": "1962 FIFA World Cup Chile",
    "year": 1962,
    "host": [
      {
        "name": "Chile"
      }
    ]
  },
  {
    "name": "1958 FIFA World Cup Sweden",
    "year": 1958,
    "host": [
      {
        "name": "Sweden"
      }
    ]
  },
  {
    "name": "1954 FIFA World Cup Switzerland",
    "year": 1954,
    "host": [
      {
        "name": "Switzerland"
      }
    ]
  },
  {
    "name": "1950 FIFA World Cup Brazil",
    "year": 1950,
    "host": [
      {
        "name": "Brazil"
      }
    ]
  },
  {
    "name": "1938 FIFA World Cup France",
    "year": 1938,
    "host": [
      {
        "name": "France"
      }
    ]
  },
  {
    "name": "1934 FIFA World Cup Italy",
    "year": 1934,
    "host": [
      {
        "name": "Italy"
      }
    ]
  },
  {
    "name": "1930 FIFA World Cup Uruguay",
    "year": 1930,
    "host": [
      {
        "name": "Uruguay"
      }
    ]
  }
]