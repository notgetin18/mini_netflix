# Mini Netflix

## Description

Mini Netflix is a simplified version of the popular Netflix platform built using React and Next.js. This application dynamically fetches movie details from an external API, and is designed with accessibility, performance, and reusability in mind.

## Key Features

- **Movie Search**: Fetch movie posters and details dynamically.
- **Responsive Design**: Optimized for all screen sizes (desktop, tablet, and mobile).
- **Performance-Oriented**: API data is fetched efficiently using `Promise.all`.
- **Custom Hooks**: Reusable custom hooks to fetch movie data.

## Unique Highlights

- **Creative Coding**: Refactored components for maintainability and reusability.
- **Security Considerations**: Sensitive API keys are stored in next config file.
- **Error Handling**: User-friendly error messages for API issues.
- **Optimized Performance**: All API calls are batched to avoid multiple re-renders.

## Tools & Technologies

- React (with Next.js)
- SCSS for styling
- Axios for API requests
- TypeScript for type safety
- GitHub for version control

## Installation & Running

1. Clone the repository:
   git clone https://github.com/notgetin18/mini_netflix.git

2. Install dependencies:
   npm install

3. Create a `.env.local` file in the root with the following environment variables:
   NEXT_PUBLIC_BASE_URL= 'https://www.omdbapi.com/'
   NEXT_PUBLIC_API_KEY ='fc1cc9bf'

4. Run the development server:
   npm run dev

## Testing Instructions

- Visit `http://localhost:3000` after starting the development server.
- Try searching for different movies and observe the responsive design and accessibility features.

## Deployment

- Deployed On Vercel
  https://mini-netflix-8m2u.vercel.app/
