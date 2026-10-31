# Rally Boyz

Table tennis club app: tap-to-score matches (singles/doubles), per-point tags, player stats and a leaderboard. Static web app (PWA) on Firebase Hosting + Firestore.

## Setup
1. Create a Firebase project. Turn on **Authentication > Email/Password** and create a **Firestore** database.
2. Firebase console > Project settings > Your apps > add a Web app, then paste its config into `CFG` in `index.html`.
3. Put your project ID in `.firebaserc` (replace `YOUR_PROJECT_ID`).
4. Deploy: `firebase deploy --only hosting,firestore:rules`

## Notes
- Leaderboard: 3 points to every player on the winning side (change `WIN_PTS` in `index.html`). Doubles stats are shared by the pair.
- Firestore rules let any signed-in user read/write, so keep the link within the club.
