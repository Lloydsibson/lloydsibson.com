import React, { useEffect, useState } from "react";
// SASS
import "./ApiEventBriteCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const EventBriteCard = () => {
  const [eventURL, setEventURL] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventSummary, setEventSummary] = useState("");
  const [eventVenueName, setEventVenueName] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [eventMonth, setEventMonth] = useState("");
  const [eventYear, setEventYear] = useState("");
  const [eventFullTime, setEventFullTime] = useState("");
  const [eventTicketPrice, setEventTicketPrice] = useState("");
  const [ticketsSoldOut, setTicketsSoldOut] = useState("");

  useEffect(() => {
    // ROOT ELEMENT FOR INJECTION
    const rootElement = document.getElementById("events");
    const LoadingCardContainer = document.querySelector(
      ".event-card-container"
    );
    const LoadingCard = document.getElementById("loading-card");
    const fetchEventApi = async () => {
      try {
        // FETCH ALL LIVE EVENTS - NEWEST FIRST
        const eventFetch = await fetch(
          `https://www.eventbriteapi.com/v3/organizers/28941769095/events/?status=live&order_by=start_asc&token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`
        );
        const events = await eventFetch.json();
        const eventsData = await events.events;

        // IF EVENT DATA EXISTS...
        if (eventsData.length > 0) {
          LoadingCardContainer.style.display = "none";
          const eventID = await eventsData[0].id;
          // FETCH VENUE INFO
          const venueResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`
          );
          const venueInfo = await venueResponse.json();
          // FETCH TICKET INFO
          const ticketResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=ticket_availability&token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`
          );
          const ticketInfo = await ticketResponse.json();
          setTicketsSoldOut(ticketInfo.ticket_availability.is_sold_out);
          // BUILD DATA INTO VAR
          const eventTime = eventsData[0].start.local;
          setEventURL(eventsData[0].url);
          setEventImage(eventsData[0].logo.original.url);
          setEventName(eventsData[0].name.html);
          setEventSummary(eventsData[0].summary);
          const eventVenue_AllInfo = venueInfo.venue;
          setEventVenueName(eventVenue_AllInfo.name);
          setEventTicketPrice(
            ticketInfo.ticket_availability.maximum_ticket_price.major_value
          );
          // TAKES EVENT TIME AND BREAKS IT DOWN INTO TIME, DAY, MONTH & YEAR
          const eventTimeString = eventTime.split("T")[1];
          setEventFullTime(
            eventTimeString.substr(0, eventTimeString.lastIndexOf(":00"))
          );
          const eventDateString = eventTime.split("T")[0];
          setEventYear(eventDateString.split("-")[0]);
          setEventMonth(eventDateString.split("-")[1]);
          setEventDay(eventDateString.split("-")[2]);

          LoadingCard.classList.add("loaded");
          // FADE-IN LOOPED LOADED CARDS
          rootElement.classList.add("fade-in");
          // NO EVENTS - THEN...
        } else {
          LoadingCard.classList.add("no-events");
          LoadingCard.innerHTML =
            "<div class='no-events-container'><img src='https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1580290822261-NN7W8JLAX28ID4OMSUTA/ke17ZwdGBToddI8pDm48kCwXByxwaOdEO0-22p2r8DQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmKzMD0HmlbxEHfnLJVmhmHrCCom_Dfv2HlCjY3ZYc2tf6N7mt7w3sj11gSs4I68j/Arclight+Promo+Latest+2020+Design.png?format=101w'>No Events</div>";
        } // IF ENDS
      } catch (err) {
        // alert("API - Fetch Failed. Please Contact Arclight Promotions");
        console.log("API - Fetch Failed");
        LoadingCard.innerHTML =
          "<div class='no-events-container'><img src='https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1580290822261-NN7W8JLAX28ID4OMSUTA/ke17ZwdGBToddI8pDm48kCwXByxwaOdEO0-22p2r8DQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmKzMD0HmlbxEHfnLJVmhmHrCCom_Dfv2HlCjY3ZYc2tf6N7mt7w3sj11gSs4I68j/Arclight+Promo+Latest+2020+Design.png?format=101w'>API Unavailable</div>";
      }
    };
    fetchEventApi();
  }, []);

  return (
    <>
      <div className="event-card-container">
        <div id="loading-card" className="event-card loading-card">
          <div className="loading-card__inner-container">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1580290822261-NN7W8JLAX28ID4OMSUTA/ke17ZwdGBToddI8pDm48kCwXByxwaOdEO0-22p2r8DQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmKzMD0HmlbxEHfnLJVmhmHrCCom_Dfv2HlCjY3ZYc2tf6N7mt7w3sj11gSs4I68j/Arclight+Promo+Latest+2020+Design.png?format=101w"
              alt="APUK Logo"
            />
          </div>
          <div className="loading-card-text">Loading...</div>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div id="events">
        <a href={eventURL}>
          <div
            className={ticketsSoldOut ? "event-card sold-out" : "event-card"}
          >
            <img src={eventImage} alt="Event" />
            <div className="event-card-info">
              <div className="event-card-info__inner">
                <p className="card-title">{eventName}</p>
                <div className="bulletin-container">
                  <p className="card-status">On Sale</p>
                </div>
                <div className="card-date-container">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p className="card-date">
                    {eventDay}/{eventMonth}/{eventYear} @ {eventFullTime}
                  </p>
                </div>
                <p className="card-event-summary-title">Event Summary</p>
                <p className="card-summary">{eventSummary}</p>
                <div className="card-more-info-container">
                  <div className="card-venue-container">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="card-venue">{eventVenueName}</p>
                  </div>
                  <p className="card-cta">BUY TICKET | £{eventTicketPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
