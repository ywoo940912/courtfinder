# 🎾 CourtFinder: Your Ultimate Tennis Court Discovery App! 🎾

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://react.dev/)
[![Google Maps Platform](https://img.shields.io/badge/Google%20Maps%20Platform-Powered-lightgrey.svg)](https://cloud.google.com/maps-platform/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-blue.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

## ✨ Overview

CourtFinder is a user-friendly web application designed to help you easily discover tennis courts in your area. Whether you're looking for a quick game or planning a regular match, CourtFinder provides a seamless experience to find the perfect court.

**Key Features:**

- **Interactive Map:** Explore tennis courts visually on an integrated Google Map.
- **Marker Display:** Each tennis court from our database is clearly marked on the map.
- **Info Window on Click:** Click on a marker to instantly see the name of the tennis court.
- **Expandable Court List:** Browse a list of all available tennis courts with their names. Click on a court name to reveal its address with a smooth slide-down animation.
- **Address Search:** Quickly find courts in a specific area using the integrated address search bar powered by Google Places Autocomplete.

## 🚀 Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **@vis.gl/react-google-maps:** A powerful React wrapper for the Google Maps JavaScript API.
- **@react-google-maps/api:** Another helpful React hook and component library for Google Maps.
- **use-places-autocomplete:** A React Hook for building autocomplete input fields with Google Places API.
- **@reach/combobox:** An accessible React component for building combobox interfaces (used initially for address search).
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **JSON:** Used to store the initial tennis court data.
- **[Your Build Tool - e.g., Vite, Create React App]:** For building and serving the application.

## 🗺️ Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd courtfinder
    ```

2.  **Install dependencies:**

    ```bash
    npm install   # or yarn install
    ```

3.  **Set up your Google Maps API Key:**

    - Create a `.env.local` file in the root of your project.
    - Add your Google Maps API key, ensuring the Places API is enabled:
      ```env
      REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
      ```
      **Important:** Treat your API key as a secret and do not commit it directly to your repository.

4.  **Start the development server:**
    ```bash
    npm run dev   # or yarn dev
    ```
    This will typically start the application at `http://localhost:3000` (or a similar port).

## 📂 File Structure
