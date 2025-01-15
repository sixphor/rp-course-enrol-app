import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>

      {state && (
        <>
          <p>{state.name}, you're now registered for RP SOI.</p>
          <p>
            More details will be sent to <strong>{state.email}</strong>.{" "}
          </p>
        </> 
      )}

      
    </div>
  );
}
