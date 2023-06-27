import Ideas from "./components/idea";

const Appideas = ({ideas, fetchIdeas}) => {
  return (
    <div className="b__ideas">
        <Ideas ideas={ideas} fetchIdeas={fetchIdeas}/>
    </div>
  );
};

export default Appideas;
