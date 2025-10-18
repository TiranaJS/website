# Quick Start: Events Management

## What Was Created

Your TiranaJS website now has a complete JSON-based events management system! Here's what was set up:

### 📁 Files Created/Modified

1. **`public/events.json`** - Your events database (this is where you manage all events)
2. **`src/types/event.ts`** - TypeScript definitions for events
3. **`src/utils/getEvents.ts`** - Helper functions to fetch events
4. **`src/components/HomeEventCard.tsx`** - Displays featured event on homepage
5. **`src/components/EventCard.tsx`** - Component to display individual event cards
6. **`src/app/events/page.tsx`** - Events page that displays all events in a grid
7. **`EVENTS_GUIDE.md`** - Complete documentation for managing events
8. **`public/README.md`** - Quick reference for public assets
9. **`README.md`** - Updated main README with events info

## 🚀 How to Add Your Next Event

### Step 1: Open the Events File
Open `public/events.json` in your editor.

### Step 2: Copy the Template
At the bottom of the file, you'll see a `_template` object. Copy it.

### Step 3: Add to Events Array
Paste it into the `events` array and fill in your details:

```json
{
  "events": [
    {
      "id": "tiranajs-meetup-1",
      // ... existing event
    },
    {
      "id": "tiranajs-meetup-2",  // ← Make this unique!
      "title": "TiranaJS Meetup #2: Your Event Title",
      "date": "2025-11-20",  // ← ISO format for sorting
      "dateFormatted": "20 November 2025",  // ← Human readable
      "time": "19:00",
      "location": {
        "name": "Your Venue Name",
        "address": "Full Address Here",
        "mapLink": "https://maps.google.com/..."  // ← Get from Google Maps
      },
      "description": "Your event description here...",
      "status": "upcoming",  // ← upcoming, ongoing, or past
      "registrationOpen": true,  // ← true shows Register button
      "registrationLink": "https://luma.com/your-event",
      "schedule": [
        { "time": "19:00", "activity": "Doors Open" },
        { "time": "19:30", "activity": "Main Talk" },
        { "time": "20:30", "activity": "Networking" }
      ],
      "highlights": [
        "First highlight",
        "Second highlight",
        "Third highlight"
      ],
      "speakers": [
        {
          "name": "Speaker Name",
          "topic": "Their Talk Title"
        }
      ],
      "tags": ["networking", "workshop", "beginner-friendly"]
    }
  ]
}
```

### Step 4: Save and Test
1. Save the file
2. Refresh your website
3. Your event should appear!

## 🔄 Common Tasks

### Update Event Status After It Happens
```json
{
  "status": "past",
  "registrationOpen": false
}
```

### Close Registration
```json
{
  "registrationOpen": false
}
```

### Change Featured Event on Homepage
The **first event** in the `events` array appears on the homepage. Reorder the array to feature a different event.

### Events Page Display
The events page (`/events`) automatically displays all events from `events.json` in a responsive grid layout. Events are sorted automatically:
- **Upcoming** events first
- **Ongoing** events second  
- **Past** events last

Each event is displayed using the `EventCard` component, which shows all event details including status, schedule, tags, and registration button.

## 📋 Event Status Guide

| Status | Badge Color | When to Use |
|--------|-------------|-------------|
| `upcoming` | 🟢 Green | Future events |
| `ongoing` | 🔵 Blue | Currently happening |
| `past` | ⚫ Gray | Completed events |

## 💡 Pro Tips

1. **Keep Events Organized**: Put newest/upcoming events first in the array
2. **Test Links**: Always verify registration and map links before publishing
3. **Be Descriptive**: Write clear descriptions that tell people what to expect
4. **Use Tags**: Help people find relevant events with descriptive tags
5. **Validate JSON**: Use a JSON validator to avoid syntax errors
6. **Update Regularly**: Mark events as "past" after they happen

## 🆘 Troubleshooting

**Events not showing?**
- Check JSON syntax (missing comma, bracket, etc.)
- Clear browser cache
- Check browser console for errors

**Registration button not working?**
- Verify `registrationLink` is a valid URL
- Check `registrationOpen` is `true`

**Wrong event on homepage?**
- The first event in the array is featured
- Reorder events in `events.json`

## 📚 Need More Help?

See [EVENTS_GUIDE.md](./EVENTS_GUIDE.md) for complete documentation including:
- Detailed field descriptions
- Advanced examples
- Component reference
- Utility functions

---

**Ready to add your first event?** Open `public/events.json` and get started! 🚀

