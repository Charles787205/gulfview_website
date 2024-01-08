import Image from "next/image";
import { Hero, RecentActivities } from "@/components";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "500", subsets: ["latin"] });
export default function Home() {
  return (
    <div className="max-h-[calc(100vh-50px)] overflow-scroll snap-mandatory snap-start snap-y ">
      <Hero />

      <section className="grid md:grid-cols-3 flex-col md:flex-row justify-center items-center min-h-[100vh]  snap-mandatory snap-y  snap-start">
        <div className="flex flex-col text-gray items-center min-h-[100vh] gap-3 p-4 justify-center snap-start grow">
          <Image src="/living-icon.svg" width={70} height={70} alt="resource" />
          <h1 className="font-semibold">Community Engagement</h1>
          <p className="text-justify md:line-clamp-4">
            {`GVEHAI fosters a strong sense of community among residents of
            Gulfview Executive Homes. As a member, you'll have the opportunity
            to participate in various community events, meetings, and
            activities.`}
          </p>
        </div>
        <div className="flex flex-col text-gray items-center min-h-[100vh] gap-3 p-4 justify-center snap-start grow">
          <Image src="/resource.svg" width={35} height={40} alt="resource" />
          <h1 className="font-semibold">Resource Hub</h1>
          <p className="text-justify md:line-clamp-4">
            The GVEHAI website serves as a valuable resource hub for residents.
            You can access essential information, documents, and updates related
            to community guidelines, maintenance schedules, and important
            announcements conveniently online.
          </p>
        </div>
        <div className="flex flex-col text-gray items-center min-h-[100vh] gap-3 p-4 justify-center snap-start grow">
          <Image src="/living-icon.svg" width={70} height={40} alt="resource" />
          <h1 className="font-semibold">Enhanced Quality of Living</h1>
          <p className="text-justify md:line-clamp-4">
            Through collective efforts and community initiatives, GVEHAI works
            to enhance the quality of life for all residents. This includes the
            maintenance and improvement of common areas, ensuring security
            measures are in place, and advocating for the interests of Gulfview
            homeowners.
          </p>
        </div>
      </section>
      <RecentActivities />
    </div>
  );
}
