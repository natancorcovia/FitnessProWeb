import {
  img1,
  img2,
  img3,
  img4,
  users,
  download,
  flag,
  facebook,
} from "../src/imagens/imagens";
import Header from "./componentes/Header";
import Section from "./componentes/Section";
import Partners from "./componentes/Partners";
import Testimonials from "./componentes/Testmonials";
import Insights from "./componentes/Insights";

function App() {
  return (
    <div>
      <Header />
      <Section
        title="Simple fitness experience for everyone."
        subtitle="TRAIN SMARTER, GET STRONGER"
        description="Track your workouts, get better results, and be best versionof you, Less thiking, more lifting."
        src={img1}
        imgsize={"w-[460px] max-w-none h-auto"}
      />

      <div className="mb-[150px] mt-[40px]">
        <Testimonials />
      </div>

      <Section
        title="Train smarter, get strong."
        description="Fitness Pro helps track your workouts, get better results, and be best versionof you, Less thiking, more lifting 🔥🏀"
        src={img2}
        imgsize={"w-[520px]"}
      />

      <div className="mb-[80px] mt-[80px]">
        <Partners />
      </div>

      <Section
        title="Track your progress, lift smart."
        description="Track your workouts easily, see real improvements, and reach youur fitness goals faster with less effort."
        src={img3}
        imgsize={"w-[400px]"}
        reverse
      />
      <div className="mt-10 flex justify-around bg-black px-10 py-10 text-white">
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
        />

        <Insights
          img={flag}
          title="50+"
          subtitle="Countries"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />

        <Insights
          img={users}
          title="900k+"
          subtitle="Likes on Facebook"
          description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
        />
      </div>

      <Section
        title="All your workouts, in your pocket."
        description="FitnessPro helps track your workouts, get better results, and be best version of you. Less thinking!"
        src={img4}
        imgsize={"w-[510px]"}
      />
    </div>
  );
}
export default App;
