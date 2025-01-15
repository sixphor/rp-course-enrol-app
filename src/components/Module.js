import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  // // Replace the placeholder diplomaId and moduleId variables with a React Router Hook
  // const diplomaId = "3d-printing-and-design";
  // const moduleId = "3d-printing-metal";
  const {diplomaId, moduleId} = useParams();

  const { name, desc, lecturer } = getModule({ diplomaId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <span>
        {lecturer.title} at {lecturer.org}
      </span>
      <p>{lecturer.bio}</p>
    </>
  );
}
