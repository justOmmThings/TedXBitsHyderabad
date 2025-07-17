import { HomepageLayout } from "@/components/homePage/HomepageLayout";
import { HomepageHero } from "@/components/homePage/HomepageHero";
import { HomepageSponsors } from "@/components/homePage/HomepageSponsors";
import { PreviousSpeakers } from "@/components/homePage/PreviousSpeakers";
import Footer from "@/components/Footer";
import BelowHeader from "@/components/HomepageBelowHeader";
import AboveFooter from "@/components/HomepageAboveFooter";
export default function Page() {
  return (
    <HomepageLayout>
      <HomepageHero />
      <BelowHeader/>
      <div className="">
        <PreviousSpeakers />
      </div>
      <HomepageSponsors />
      <AboveFooter/>
      <Footer/>
    </HomepageLayout>
  );
}
