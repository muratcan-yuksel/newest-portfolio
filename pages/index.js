import Link from "next/link";
import React from "react";
import Layout from "./components/Layout";
import About from "./about";

// Define the home page component
const HomePage = () => (
  <>
    <h2>Welcome to the home page!</h2>
    <p>This is where you'll find all the latest news and updates.</p>
    {/* Use the Link component to navigate to the About page */}
    <Link href="/about">
      <p>Leprn more pbout our app</p>
    </Link>
  </>
);

// Export the pages so they can be rendered by the Next.js app
export default HomePage;
