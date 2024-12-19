const App = () => {
  const [oracleSight, setOracleSight] = React.useState("");
  const [userJourney, setUserJourney] = React.useState({
    stage: "backstory",
    responses: {},
  });

  return (
    <div className="flex h-screen bg-slate-100">
      <div className="w-1/3 h-full bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-4">path</h2>
        <div>
          <p className="text-lg">{oracleSight || "..."}</p>
        </div>
      </div>

      <div className="w-2/3 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
          <h2 className="text-2xl font-bold mb-6">
            {userJourney.stage === "backstory"
              ? "Your Story Begins..."
              : "Present Moment"}
          </h2>
        </div>
      </div>
    </div>
  );
};

// Render it to the page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
