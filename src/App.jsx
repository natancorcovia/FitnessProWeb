import { img1, img2, img3, img4 , users } from "../src/imagens/imagens";
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

      <Partners/>

      <Section
        title="Train smarter, get strong."
        description="Fitness Pro helps track your workouts, get better results, and be best versionof you, Less thiking, more lifting 🔥🏀"
        src={img2}
        imgsize={"w-[520px]"}
      />

      <Testimonials />

      <Section
        title="Track your progress, lift smart."
        description="Track your workouts easily, see real improvements, and reach youur fitness goals faster with less effort."
        src={img3}
        imgsize={"w-[510px]"}
        reverse
      />

      <Insights 
      img={users}
      title="1m"
      subtitle="Happy Users"
      description="Stacks is a production-readylibrary of stackable content blocks built in React Native."
      />

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

      