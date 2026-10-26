# Saurabh.AICreates — Digital Invitations

Fresh starter structure for the wedding invitation workflow.

- `index.html`: searchable template gallery and read-only previews.
- `admin/editor.html`: admin editor prototype with live preview and preview-link creation.
- `client-preview.html`: read-only client preview.
- Every `template-XX-...` folder contains `image/`, `video/`, `invitation.html`, `template.json`, and `clients/sample-client/`.

## Add a new template
Copy a `template-XX-...` folder, update `template.json`, replace the artwork in `image/`, and add a client folder under `clients/`. Never edit the original template for a client; keep each client's data/copy separate.

## Prototype limitations
This is a static HTML/CSS/JS prototype. Admin authentication, server-side project saving, protected client links, payment verification, and secure client data require a backend before real customer use. The share link is a demo and carries details in URL parameters. Artwork is placeholder artwork until final AI images are added.
