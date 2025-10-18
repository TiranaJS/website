import { EventsData } from '@/types/event';
import { promises as fs } from 'fs';
import path from 'path';

export async function getEvents(): Promise<EventsData> {
  try {
    // Read the events.json file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'events.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading events file:', error);
    throw new Error('Failed to fetch events');
  }
}

export async function getEventById(id: string) {
  const data = await getEvents();
  return data.events.find(event => event.id === id);
}

export async function getUpcomingEvents() {
  const data = await getEvents();
  return data.events.filter(event => event.status === 'upcoming');
}

export async function getPastEvents() {
  const data = await getEvents();
  return data.events.filter(event => event.status === 'past');
}

