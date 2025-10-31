import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Use the navigation to explore Tasks and Posts.
        </p>
      </Card>
    </div>
  );
};

export default Home;
