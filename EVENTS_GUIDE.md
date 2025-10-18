# Events Management Guide

This guide explains how to manage events for the TiranaJS website using the `events.json` file.

## Overview

The TiranaJS website uses a simple JSON file (`public/events.json`) to store and manage all event data. This approach eliminates the need for a backend database while keeping event management straightforward.

## Events JSON Structure

The events are stored in `public/events.json` with the following structure:

```json
{
  "events": [
    {
      "id": "unique-event-id",
      "title": "Event Title",
      "date": "2025-10-15",
      "dateFormatted": "15 October 2025",
      "time": "18:30",
      "location": {
        "name": "Venue Name",
        "address": "Full Address",
        "mapLink": "https://maps.google.com/..."
      },
      "description": "Event description...",
      "status": "upcoming",
      "registrationOpen": true,
      "registrationLink": "https://luma.com/...",
      "schedule": [
        {
          "time": "18:30",
          "activity": "Activity description"
        }
      ],
      "highlights": [
        "Highlight 1",
        "Highlight 2"
      ],
      "speakers": [
        {
          "name": "Speaker Name",
          "topic": "Talk Title"
        }
      ],
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

## Field Descriptions

### Required Fields

- **id** (string): Unique identifier for the event (e.g., "tiranajs-meetup-1")
  - Use lowercase with hyphens
  - Must be unique across all events

- **title** (string): The event title (e.g., "TiranaJS Meetup #1: Community Launch")

- **date** (string): ISO date format (YYYY-MM-DD) for sorting and filtering
  - Example: "2025-10-15"

- **dateFormatted** (string): Human-readable date format
  - Example: "15 October 2025"

- **time** (string): Event start time in 24-hour format
  - Example: "18:30"

- **location** (object):
  - **name** (string): Venue name
  - **address** (string): Full address
  - **mapLink** (string): Google Maps or similar link

- **description** (string): Detailed event description

- **status** (string): One of:
  - `"upcoming"` - Future event (green badge)
  - `"ongoing"` - Currently happening (blue badge)
  - `"past"` - Completed event (gray badge)

- **registrationOpen** (boolean): 
  - `true` - Shows "Register Now" button
  - `false` - Shows "Registration Closed" message

- **registrationLink** (string): URL to event registration (e.g., Luma, Eventbrite)

- **schedule** (array): Array of schedule items
  ```json
  [
    { "time": "18:30", "activity": "Doors Open" }
  ]
  ```

- **highlights** (array): Key event features
  ```json
  ["Meet fellow developers", "Free food and drinks"]
  ```

- **tags** (array): Event categories/topics
  ```json
  ["networking", "workshop", "beginner-friendly"]
  ```

### Optional Fields

- **speakers** (array): Speaker information
  ```json
  [
    {
      "name": "John Doe",
      "topic": "Introduction to React Hooks"
    }
  ]
  ```

- **image** (string): Path to event cover image
  - Example: "/assets/events/event-1.jpg"

## How to Add a New Event

1. Open `public/events.json`
2. Add a new event object to the `events` array:

```json
{
  "events": [
    // Existing events...
    {
      "id": "tiranajs-meetup-2",
      "title": "TiranaJS Meetup #2: Advanced React Patterns",
      "date": "2025-11-20",
      "dateFormatted": "20 November 2025",
      "time": "19:00",
      "location": {
        "name": "Innovation Hub",
        "address": "Rruga Example, Tirana",
        "mapLink": "https://maps.app.goo.gl/example"
      },
      "description": "Join us for an evening of advanced React patterns...",
      "status": "upcoming",
      "registrationOpen": true,
      "registrationLink": "https://luma.com/example",
      "schedule": [
        { "time": "19:00", "activity": "Registration & Networking" },
        { "time": "19:30", "activity": "Main Talk: Advanced React Patterns" },
        { "time": "20:30", "activity": "Q&A and Discussion" }
      ],
      "highlights": [
        "Learn advanced React patterns",
        "Network with fellow developers",
        "Free pizza and drinks"
      ],
      "speakers": [
        {
          "name": "Jane Smith",
          "topic": "Advanced React Patterns"
        }
      ],
      "tags": ["react", "advanced", "workshop"]
    }
  ]
}
```

3. Save the file
4. The website will automatically display the new event

## How to Update an Event

### Update Event Status
When an event passes, update its status:
```json
{
  "status": "past",
  "registrationOpen": false
}
```

### Close Registration
When registration closes:
```json
{
  "registrationOpen": false
}
```

### Update Event Details
Simply modify the relevant fields in the JSON file.

## Event Display Behavior

### Homepage (`/`)
- Shows only the first event in the array using the `HomeEventCard` component
- Use this for featuring your most important/upcoming event

### Events Page (`/events`)
- Displays all events from `events.json` in a responsive grid layout
- Events are automatically fetched and sorted (upcoming → ongoing → past)
- Uses EventCard component to display individual events

## Best Practices

1. **Keep the first event as your featured event**
   - This appears on the homepage
   - Usually your next upcoming event or most important event

2. **Update event status regularly**
   - Set events to "past" after they occur
   - Close registration when appropriate

3. **Use consistent date formatting**
   - ISO format for `date`: "YYYY-MM-DD"
   - Human-readable for `dateFormatted`: "DD Month YYYY"

4. **Provide complete location information**
   - Include venue name, full address, and map link
   - Test the map link before publishing

5. **Write clear descriptions**
   - Explain what attendees will learn/experience
   - Include any prerequisites or requirements
   - Mention food/drinks if provided

6. **Use descriptive tags**
   - Help users find events by topic
   - Common tags: "beginner-friendly", "networking", "workshop", "advanced"

## Troubleshooting

### Events not showing up
- Check JSON syntax is valid (use a JSON validator)
- Ensure the file is saved at `public/events.json`
- Clear browser cache and refresh

### Registration button not working
- Verify `registrationLink` is a valid URL
- Check `registrationOpen` is set to `true`

### Date showing incorrectly
- Use `dateFormatted` for display purposes
- Keep `date` in ISO format for sorting

## Component Reference

### Available Components

1. **HomeEventCard** - Shows a single featured event (used on homepage)
2. **EventCard** - Individual event card component (used by events page)

### Utility Functions

Located in `src/utils/getEvents.ts`:

- `getEvents()` - Fetch all events
- `getEventById(id)` - Get a specific event
- `getUpcomingEvents()` - Get all upcoming events
- `getPastEvents()` - Get all past events

## Example: Complete Event

Here's a complete example with all fields:

```json
{
  "id": "tiranajs-meetup-3",
  "title": "TiranaJS Workshop: Building Your First API",
  "date": "2025-12-15",
  "dateFormatted": "15 December 2025",
  "time": "14:00",
  "location": {
    "name": "Tech Space Tirana",
    "address": "Rruga Dëshmorët e 4 Shkurtit, Tirana 1001, Albania",
    "mapLink": "https://maps.app.goo.gl/example123"
  },
  "description": "A hands-on workshop where you'll learn to build a RESTful API from scratch using Node.js and Express. Perfect for beginners looking to understand backend development.",
  "status": "upcoming",
  "registrationOpen": true,
  "registrationLink": "https://luma.com/tiranajs-workshop-3",
  "schedule": [
    { "time": "14:00", "activity": "Welcome & Setup" },
    { "time": "14:30", "activity": "Introduction to APIs and REST" },
    { "time": "15:30", "activity": "Hands-on: Building Your First Endpoint" },
    { "time": "16:30", "activity": "Break & Networking" },
    { "time": "17:00", "activity": "Advanced Topics & Best Practices" },
    { "time": "18:00", "activity": "Q&A and Wrap-up" }
  ],
  "highlights": [
    "Hands-on coding workshop",
    "Learn Node.js and Express",
    "Build a complete API",
    "Beginner-friendly",
    "Free lunch and refreshments",
    "All materials provided"
  ],
  "speakers": [
    {
      "name": "Alex Johnson",
      "topic": "Building RESTful APIs with Node.js"
    },
    {
      "name": "Maria Garcia",
      "topic": "API Security Best Practices"
    }
  ],
  "tags": ["workshop", "backend", "nodejs", "beginner-friendly", "hands-on"],
  "image": "/assets/events/workshop-api.jpg"
}
```

## Questions?

If you have questions about managing events, please reach out to the TiranaJS team or check the Next.js documentation for working with static JSON files.

