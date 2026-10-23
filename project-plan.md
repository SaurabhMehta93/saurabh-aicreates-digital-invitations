# Saurabh.AICreates — Digital Invitation Project Plan

The goal is a reusable premium digital-invitation portfolio: each template can include a website/card design, individual scene images, and a final cinematic video.

## Website experience

- `index.html` — shared searchable catalogue for all invitation themes.
- `studio-preview.html` — cinematic Wedding Invitation Studio concept page, with all ten themes and a four-scene storyboard.
- `assets/css/styles.css` — catalogue design system.
- `assets/js/main.js` — catalogue data, search, filters, sorting and pagination.
- `data/wedding.json` — sample configuration for a personalised invitation.

The studio preview uses illustrative CSS artwork to show the intended design direction. It is not a substitute for the final individual AI-generated scene images or an exported video.

## Template portfolio (10 themes)

1. **Royal Burgundy & Gold** — burgundy, antique gold and ivory.
2. **Ivory & Champagne Gold** — elegant ivory with champagne-gold details.
3. **Emerald Green Royal** — emerald green and antique gold.
4. **Blush Pink Floral** — blush pink, ivory and romantic roses.
5. **Midnight Blue Luxury** — midnight blue and gold.
6. **Rajasthani Heritage** — traditional Rajasthani architecture, motifs and festive colours.
7. **Black & Gold Modern** — bold, minimal black-and-gold luxury.
8. **Lavender Dream** — lavender, lilac and silver.
9. **Sunset Marigold** — marigold, sunset orange and terracotta.
10. **Destination Wedding** — cinematic beach, palace or resort destination style.

## Production workflow

For every theme, create a matching set of individual 9:16 invitation images. Keep typography, palette, ornamentation and lighting consistent across the scenes. Once the images and wording are approved, animate each scene and assemble the clips into a single cinematic invitation video.

Suggested four-scene baseline:
1. **Opening Scene** — envelope or invitation box reveal, elegant light and floating petals.
2. **Couple Names** — hero invitation card with personalised names.
3. **Wedding Details** — date, venue and event information with readable typography.
4. **Final Celebration** — matching palace, mandap, garden or destination finale.

The storyboard is a planning guide only. Do not treat it as the four individual image assets.

## Repository strategy

Keep all ten themes in this repository, one clearly named folder per template:
- `images/` — separate scene images and approved visual assets
- `video/` — final rendered MP4 after review
- `card/` — static invitation card assets
- `README.md` — theme description, asset list and production notes

Use consistent, descriptive filenames. Binary image/video assets must be uploaded using GitHub's web interface or Git/Git LFS as appropriate; text-file connector actions alone cannot upload binary media.

## Template 01 — Royal Burgundy & Gold

- Couple: Riya & Aarav (fictional demo names)
- Palette: burgundy, antique gold, ivory and rose accents
- Format: vertical 9:16 cinematic invitation video
- Current production notes: four clips have previously been assembled in Google Flow SceneBuilder; keep music separate for now and select suitable audio when publishing.
- Planned final video filename: `Riya_Aarav_Royal_Wedding_Final_Video.mp4`

### Asset checklist

- [ ] Scene 01 — Royal invitation envelope
- [ ] Scene 02 — Royal palace courtyard
- [ ] Scene 03 — Wedding mandap
- [ ] Scene 04 — Final invitation card
- [ ] Review names, event details, text and visuals in the assembled video
- [ ] Upload approved individual images and final MP4
- [ ] Link the approved assets from the template page and catalogue

## Build order

1. Create and review Template 01's four individual scene images.
2. Approve the invitation wording and visual consistency.
3. Animate the scenes and review the final vertical video.
4. Upload the approved images and MP4 to Template 01's folder.
5. Repeat the same production workflow for Templates 02–10.
6. Connect the final approved assets to the catalogue and scene-by-scene studio pages.

## Quality checks

- Keep a consistent visual identity within each theme.
- Check names, spelling, dates, venue, text contrast and safe margins.
- Review mobile and vertical 9:16 framing.
- Confirm rights/licensing for any audio and third-party assets.
- Replace fictional demo details before customer delivery.
