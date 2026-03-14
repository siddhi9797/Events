import React, { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://sheetdb.io/api/v1/2tm8cjnqfsjj3")
      .then((response) => {
        setEvents(response.data);
      });
  }, []);

  return (
    <div className="container">
      <h1>Upcoming Events</h1>

      <div className="event-grid">

        {events.map((event, index) => (
          <div className="event-card" key={index}>

            {Object.keys(event).map((key) => (
              <p key={key}>
                <strong>{key}:</strong> {event[key]}
              </p>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Events;