import { ActivityCard } from ".";
const RecentActivities = () => {
  const activities = [
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
    {
      title: "Restroom Facility Construction Underway at the Covered Court!",
      description:
        "Our dedicated team is hard at work to ensure that the restroom facility meets the highest standards of cleanliness, accessibility, and modern design. We understand the importance of having such amenities readily available to our residents, and we are committed to delivering a facility that reflects the quality....",
      imagePath: "/projectImage.png",
    },
  ];
  return (
    <section className="bg-yellow text-primary-blue  snap-start snap-mandatory p-10 md:p-15 md:pb-10 overflow-hidden flex flex-col">
      <h1 className="text-[30px] font-bold">Recent Activities</h1>
      <br />
      <div className="grid grid-cols-1 gap-5  rounded  snap-y">
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} key={index} />
        ))}
      </div>
    </section>
  );
};

export default RecentActivities;
