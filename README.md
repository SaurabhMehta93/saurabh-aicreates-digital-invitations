# Saurabh.AICreates — Digital Invitation Template Catalogue

A scalable catalogue for premium digital invitation designs. The root `index.html` is the shared browsing page for all templates; it is not an individual couple's invitation.

## Shared catalogue page

- `index.html` — common catalogue landing page for every template
- `assets/css/styles.css` — responsive design system and card layouts
- `assets/js/main.js` — catalogue data, search, style/colour filters, sorting and pagination
- `data/wedding.json` — sample configuration data for a personalised invitation
- `project-plan.md` — template roadmap and production checklist

The catalogue currently contains 10 starter records. It uses a data-driven list, so more records can be added to `templates` in `assets/js/main.js`; search, filters, sorting and pagination work from that data. Page sizes of 12, 24 and 48 are supported. For 200–500+ designs, keep metadata in a JSON data file or API as the collection grows.

## Root-level template folders

Each template folder lives directly at repository root, not inside a shared `templates/` parent folder:

1. `template-01-royal-burgundy-gold/`
2. `template-02-ivory-champagne-gold/`
3. `template-03-emerald-green-royal/`
4. `template-04-blush-pink-floral/`
5. `template-05-midnight-blue-luxury/`
6. `template-06-rajasthani-heritage/`
7. `template-07-black-gold-modern/`
8. `template-08-lavender-dream/`
9. `template-09-sunset-marigold/`
10. `template-10-destination-wedding/`

Each folder can contain its own `images/`, `video/`, `card/`, invitation page and `README.md`. GitHub does not retain empty folders, so these folders are represented by README files until actual assets are added.

## Current focus — Template 01

Riya & Aarav are fictional demo names. Four Google Flow clips have been assembled in SceneBuilder. Music is intentionally omitted for now; choose suitable audio when publishing to Instagram.

Planned image assets are four separate 9:16 scenes:
- Scene 01 — Royal invitation envelope
- Scene 02 — Royal palace courtyard
- Scene 03 — Wedding mandap
- Scene 04 — Final invitation card

Do not use a storyboard poster as a replacement for individual scene files. Upload only approved, actual images and the reviewed MP4.

## Local preview

Open `index.html` in a browser or use the Live Server extension in Visual Studio Code.

## Roadmap

1. Complete and review Template 01 scene images and video.
2. Upload approved assets to its root-level folder.
3. Add individual invitation/card experiences in their respective template folders.
4. Continue through Templates 02–10, then add more designs as needed.
5. Connect the catalogue to the separate website repository later.

Replace fictional names and placeholder event details before customer delivery.
