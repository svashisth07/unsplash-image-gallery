# Project Name

This project is bootstrapped with the Vite React-TS template and follows a structure inspired by the React Bulletproof architecture. It utilizes TailwindCSS for styling, providing a utility-first approach that accelerates the development process while maintaining the flexibility to customize the design.

## Architecture

The architecture of this application is inspired by the [React Bulletproof](https://github.com/alan2207/bulletproof-react) architecture, which emphasizes scalability, maintainability, and best practices in React development.

## Technologies Used

- **Vite**: A modern, fast build tool for JavaScript and TypeScript.
- **React TypeScript**: Enhances React with type safety using TypeScript.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **React Query**: Used for efficient server state management in React, enabling better caching and synchronization.
- **Intersection Observer**: Utilized for implementing infinite loading features.

## Performance Considerations

The following strategies are suggested to optimize the application's performance, particularly in scenarios where large datasets might impact performance:

- **Server-Side Rendering (SSR)**: Consider implementing SSR to improve the initial load time and SEO. This approach renders the React components on the server, which can help in delivering a fully rendered page to the client, reducing the initial load time and improving crawlability for search engines.

- **Image Gallery Optimization**: To enhance the rendering performance of image galleries, it is suggested to optimize the logic by pushing new images to individual columns instead of recreating the column on every render. This approach minimizes the amount of DOM manipulation and can significantly improve rendering performance.

- **Virtualization**: Implement virtualization for lists or galleries handling large datasets. Virtualization involves rendering only the items that are currently visible in the viewport, which reduces the number of DOM nodes created and managed at any given time. This can lead to performance improvements, especially with large amounts of data.

These enhancements are recommended as proactive measures to ensure smooth performance as the application scales.

## Demo

You can view the live demo of the application here: [Demo App](https://main.d1xye0fyzerkpf.amplifyapp.com/)

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:svashisth07/unsplash-image-gallery.git
   cd unsplash-image-gallery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

To run the application on your local machine:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

   This command will start the local server and open the application in your default web browser. The application will reload automatically when changes are made to the code.

