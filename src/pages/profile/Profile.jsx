import Container from "../../components/common/Container";

import ProfileHeader from "./components/ProfileHeader";

import PersonalSection from "./sections/PersonalSection";
import CareerSection from "./sections/CareerSection";
import StatsSection from "./sections/StatsSection";
import ResumeSection from "./sections/ResumeSection";
import AchievementSection from "./sections/AchievementSection";
import SettingsSection from "./sections/SettingsSection";

const Profile = () => {
  return (
    <Container>
      <div className="space-y-12 py-8">
        <ProfileHeader />

        <PersonalSection />

        <CareerSection />

        <StatsSection />

        <ResumeSection />

        <AchievementSection />

        <SettingsSection />
      </div>
    </Container>
  );
};

export default Profile;