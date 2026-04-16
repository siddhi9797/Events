/* import React, { useEffect, useState } from "react";
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

*/




import React, { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

// import all images
import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";

function Events() {

  const [events, setEvents] = useState([]);

  // map image names to actual imports
  const imageMap = {
    "event1.jpg": event1,
    "event2.jpg": event2
  };

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

            {/* Show Image */}
            {event.image && (
              <img
                src={imageMap[event.image] || event.image}
                alt="event"
                className="event-image"
              />
            )}

            {/* Show other fields */}
            {Object.keys(event).map((key) => {
              if (key === "image") return null; // skip image field

              return (
                <p key={key}>
                  <strong>{key}:</strong> {event[key]}
                </p>
              );
            })}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;