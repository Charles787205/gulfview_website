import { ServicesCard } from "@/components";

const ServicesPage = () => {
  return (
    <div className="overflow-y-auto  max-h-[calc(100vh-65px)]">
      <h1 className="font-bold   text-center text-primary-blue text-[40px]">
        Services
      </h1>

      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 grid-row-3 gap-3 lg:gap-10 p-10 lg:w-[95%] w-[100%] ">
        <ServicesCard
          title="Community Guidlines"
          description="Explore our comprehensive guide to community rules and guidelines
            This resource covers essential topics such as noise restrictions,
            parking regulations, and other community standards. By understanding
            and adhering to these asdfasdfsadfsdfsadfasdf sdafasddfadsfasfasd
            asdfasdfasdfsafasdf asdfasdfsadfsadguidelines."
          link="/services/community_guidelines"
        />
        <ServicesCard
          title="Pay Monthly Dues Online with GCash"
          description="Stay informed about your monthly dues with our dedicated Monthly Dues Information section. Here, you can access details on payment schedules, amounts, and important deadlines. "
          link="/services/monthly_dues"
        />
        <ServicesCard
          title="Amenities Booking"
          description="Make the most of your community experience by booking shared amenities online. Whether you're planning a special event at our clubhouse, a relaxing day by the pool, or reserving space for a gathering, our online booking system offers convenience at your fingertips."
          link="/services/booking"
        />
        <ServicesCard
          title="Maintenance Requests"
          description="We believe in prompt and efficient maintenance to keep our community in top condition. If you spot an issue in common areas or community facilities, use our user-friendly maintenance request system. "
          link="/services/maintenance_request"
        />
        <ServicesCard
          title="Security Information"
          description="Your safety is our priority. Access valuable tips and information on enhancing personal security within our community. Additionally, find contact details for our dedicated security team and neighborhood watch group, ensuring that help is always just a phone call away."
          link="/services/security_info"
        />
        <ServicesCard
          title="Event Calendar"
          description="Stay in the loop with our vibrant community life by checking out our event calendar. Discover upcoming events, meetings, and social gatherings. Get event details, including dates, times, and locations, so you can participate and connect with your neighbors."
          link="/services/event_calendar"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
