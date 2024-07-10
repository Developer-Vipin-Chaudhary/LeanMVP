const Cards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-4">
      {[
        {
          title: "Views",
          value: "3,781",
          change: "+110.01%",
          color: "text-green-500",
          icon: "assets/dashboard/graphup.png",
        },
        {
          title: "Visits",
          value: "1,219",
          change: "-0.03%",
          color: "text-red-500",
          icon: "assets/dashboard/graphdown.png",
        },
        {
          title: "New Users",
          value: "316",
          change: "+6.01%",
          color: "text-green-500",
          icon: "assets/dashboard/graphup.png",
        },
        {
          title: "Active Users",
          value: "$695",
          change: "+150.08%",
          color: "text-green-500",
          icon: "assets/dashboard/graphup.png",
        },
      ].map((card, index) => {
        const colorClass = index % 2 === 0 ? "bg-cyan-50" : "bg-blue-50";

        return (
          <div
            key={index}
            className={`${colorClass} m-2 p-6 sm:p-8 rounded-2xl shadow-md h-32 transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            <h2 className="text-gray-500">{card.title}</h2>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                {card.value}
              </span>
              <div className="flex items-center">
                <span className={`mx-2 text-sm sm:text-base ${card.color}`}>
                  {card.change}
                </span>
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-6 h-6 rounded-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
