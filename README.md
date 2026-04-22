# ⚔️ Clash Analyzer

Clash Analyzer is a real-time dashboard built with **Vue 3** and **Tailwind CSS** that allows players to track their Clash Royale progress, analyze match history, and view current deck configurations. It leverages the official Clash Royale API to provide deep insights into player performance.

## 🚀 Features

- **Player Search:** Fetch comprehensive profiles using unique player tags (e.g., `#V2VUYQQ2C`).
- **Live Stats Dashboard:** Track current trophies, arena levels, win/loss ratios, and peak performance.
- **Enhanced Match History:** - Real-time win/loss tracking.
    - Crown counts for both teams and opponents.
    - Built-in error handling for non-standard battle types (like Boat Attacks).
- **Deck Visualization:** View the 8-card battle deck currently equipped by the player.
- **Responsive UI:** Clean, dark-themed interface optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API:** [Official Clash Royale API](https://developer.clashroyale.com/)

## 📦 Getting Started

### Prerequisites
- Node.js (v16.0 or higher)
- A Clash Royale API Key (whitelisted for your IP)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/adamathia97/clash-analyzer.git](https://github.com/adamathia97/clash-analyzer.git)
   cd clash-analyzer
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root directory:

Code snippet
VITE_API_BASE_URL=[https://api.clashroyale.com/v1](https://api.clashroyale.com/v1)
VITE_API_KEY=your_api_key_here
Run the development server:

Bash
npm run dev
📂 Project Structure
src/components/: UI components like MatchHistory.vue, PlayerSearch.vue, and DeckGrid.vue.

src/stores/: Pinia stores managing global player and deck state.

src/services/: API integration layer via clashApi.js.

src/assets/: Static assets and global styles.

⚠️ Important Notes
CORS Requirements: The Clash Royale API does not support direct browser-based requests. Ensure you use a proxy or a backend server to route your API calls.

Empty Logs: Match history only returns data for players who have participated in battles within the last few weeks.

📄 License
This project is licensed under the MIT License.

Created by Aayush Damathia