export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const varColor = {
  light: {
    blue: "#5684AE",
    orange: "#FFE4C8",
    text: "#E4F6ED",
  },
  dark: {
    blue: "#0F4C81",
    orange: "#F9BE81",
  },
  text: "#333",
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const totomorrow = new Date(today);
totomorrow.setDate(totomorrow.getDate() - 3);

const todayStr = getFormattedDate(today);
const tomorrowStr = getFormattedDate(tomorrow);
const totomorrowStr = getFormattedDate(totomorrow);

export const dynamicEvents = [
  {
    id: "1",
    date: todayStr,
    start: "9:00 AM",
    end: "9:30 AM GMT+7",
    title: "Interview JohanLe",
    type: "appointment",
    description: "Meeting daily",
    color: "#F9BE81",
  },
  {
    id: "2",
    date: tomorrowStr,
    start: "10:00 AM",
    end: "11:30 AM GMT+7",
    title: "Project Planning Session",
    type: "event",
    eventUrl: "https://example.com/webinar",
    color: "#F9BE81",
  },
  {
    id: "3",
    date: totomorrowStr,
    start: "15:00 PM",
    end: "19:30 PM GMT+7",
    title: "Project Planning Session",
    type: "appointment",
    description: "Meeting daily",
    color: "#F9BE81",
  },
  {
    id: "4",
    date: todayStr,
    start: "2:00 PM",
    end: "3:00 PM GMT+7",
    title: "Client Feedback Meeting",
    type: "event",
    eventUrl: "https://example.com/webinar",
    color: "#F9BE81",
  },
];
