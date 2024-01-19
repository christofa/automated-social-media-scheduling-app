import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb'; // Import the locale you want to use

// Set up the localizer for React Big Calendar
const localizer = momentLocalizer(moment);

// Your React component
function MyCalendar() {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 6, 10),
      end: new Date(2023, 6, 12),
    },
    // Add more events as needed
  ];

  return (
    <div className='Calender'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 650 }} // Adjust the height as needed
      />
    </div>
  );
}

export default MyCalendar;
