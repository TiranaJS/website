export interface Event {
  id: string;
  title: string;
  date: string;
  dateFormatted: string;
  time: string;
  location: {
    name: string;
    address: string;
    mapLink: string;
  };
  description: string;
  status: 'upcoming' | 'past' | 'ongoing';
  registrationOpen: boolean;
  registrationLink: string;
  schedule: {
    time: string;
    activity: string;
  }[];
  highlights: string[];
  speakers?: {
    name: string;
    topic: string;
  }[];
  tags: string[];
  image?: string;
}

export interface EventsData {
  events: Event[];
}

