# TODO: Disable Service Card Clickability in ExploreService

## Steps to Complete:

1. **Edit src/ExploreService.jsx**:
   - Remove `role="button"` and `tabIndex={0}` from the service-card `<div>` to make cards non-interactive.
   - Ensure inner feature links remain functional (no changes to `<Link>` or `<a>` tags).
   - This temporarily "unlinks" the cards without affecting navigation to service details.

2. **Verify Changes**:
   - Run the app locally (e.g., `npm start`).
   - Test: Click card background – no navigation or focus; only feature links should navigate.
   - If needed, review `ExploreService.css` for any hover effects implying clickability (e.g., remove cursor: pointer if present).

3. **Update TODO**:
   - Mark steps as completed after each action.
   - If further adjustments needed (e.g., re-enable later), add a step for that.

Progress: None yet.
