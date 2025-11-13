
const Fireworks = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 animate-ping">
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-ping delay-300">
        <div className="w-4 h-4 bg-pink-400 rounded-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-ping delay-700">
        <div className="w-4 h-4 bg-green-400 rounded-full" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-ping delay-500">
        <div className="w-4 h-4 bg-blue-400 rounded-full" />
      </div>
    </div>
  );
};

export default Fireworks;
