# Public Assets

This directory contains static assets that are served directly by Next.js.

## Files

### `events.json`
Contains all event data for the TiranaJS website. This file is read by the website to display events dynamically.

**To manage events:** See [EVENTS_GUIDE.md](../EVENTS_GUIDE.md) in the root directory for detailed instructions.

**Quick Tips:**
- The first event in the array is featured on the homepage
- Update `status` to "past" after events conclude
- Set `registrationOpen` to `false` when registration closes
- Always validate JSON syntax before committing changes

### `assets/`
Contains images, logos, and other media files used throughout the website.

- `members/` - Team member photos
- `svgs/` - Logo and icon files
- Other event or marketing images can be added here

