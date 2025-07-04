import {
  img1,
  img2,
  img3,
  img4,
  users,
  download,
  flag,
  facebook,
} from "../src/assets/imagens";
import Header from "./componentes/Header";
import Section from "./componentes/Section";
import Partners from "./componentes/Partners";
import Testimonials from "./componentes/Testmonials";
import Insights from "./componentes/Insights";
import Footer from "./componentes/Footer";
import CallToAction from "./componentes/CallToAct";
import Hr from "./componentes/Hr";

function App() {
  return (
    <div>
      <Header />

      <Section
        title="Simple fitness experience for everyone."
        subtitle="TRAIN SMARTER, GET STRONGER"
        description="Track your workouts, get better results, and be best versionof you, Less thiking, more lifting."
        src={img1}
        imgsize={"md:max-w-lg"}
      />

      <Testimonials />
      <Hr />
      <Section
        title="Train smarter, get strong."
        description="Fitness Pro helps track your workouts, get better results, and be best versionof you, Less thiking, more lifting 🔥🏀"
        src={img2}
        imgsize={"md:max-w-md"}
      />
      <Hr />
      <Partners />
      <Hr />
      <Section
        title="Track your progress, lift smart."
        description="Track your workouts easily, see real improvements, and reach youur fitness goals faster with less effort."
        src={img3}
        imgsize={"md:max-w-sm"}
        reverse
      />

      <Hr />

      <div className="mx-auto hidden w-4/5 justify-between gap-4 border-b border-gray-900 pb-24 pl-8 lg:flex">
        <Insights
          img={users}
          title="1m"
          subtitle="Happy Users"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />
        <Insights
          img={download}
          title="1.2m"
          subtitle="Downloads"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />{" "}
        <Insights
          img={flag}
          title="50+"
          subtitle="Countries"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />
        <Insights
          img={facebook}
          title="900k+"
          subtitle="Likes on Facebook"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />
      </div>

      <Section
        title="All your workouts, in your pocket."
        description="FitnessPro helps track your workouts, get better results, and be best version of you. Less thinking!"
        src={img4}
        imgsize={"md:max-w-md"}
      />
      <Hr />
      <CallToAction />
      <Hr />
      <Footer />
    </div>
  );
}
export default App;
