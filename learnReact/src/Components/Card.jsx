import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-200 relative">
      <div className="w-64 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-32">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=1000&auto=format&fit=crop&q=60"
            alt=""
          />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-bold">Amazon Basics</h2>
          <p className="text-xs mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente velit libero?</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
