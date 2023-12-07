import MemberCard from "@/components/about/member-card";
import SectionLayout from "@/components/landing-page/section-layout";

const AboutSection = () => {
  return (
    <SectionLayout className="mt-16 flex flex-col items-center gap-6">
      <p className="mt-8 text-5xl font-bold text-primary-400">Our Teams</p>
      <div className="flex w-full items-center justify-between">
        <MemberCard
          name={"Lương Minh Chiến"}
          role={"Backend Developer"}
          desc={"20110615"}
        />

        <MemberCard
          name={"Hứa Lộc Sơn"}
          role={"Frontend Developer"}
          desc={"20110712"}
        />

        <MemberCard
          name={"Phạm Phúc Bình"}
          role={"Backend Developer"}
          desc={"20110252"}
        />
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
