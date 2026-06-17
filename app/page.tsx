import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Services     from "./components/Services";
import WhatYouNeed  from "./components/WhatYouNeed";
import Newsletter   from "./components/Newsletter";
import BlogSeminars from "./components/BlogSeminars";
import Videos       from "./components/Videos";
import Footer       from "./components/Footer";
import Chatbot      from "./components/Chatbot";

export default function HomePage() {
  return (
    <main className="bg-white flex flex-col">
      <Navbar />
      <Hero />

      <div className="h-16" />
      <Services />

      <div className="h-16" />
      <WhatYouNeed />

      <Newsletter />

      <BlogSeminars />

      <Videos />

      <Footer />
      <Chatbot />
    </main>
  );
}
