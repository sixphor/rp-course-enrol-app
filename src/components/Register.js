import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { 
      state: { email: emailRef.current.value, name: nameRef.current.value },
     });
  }

  return (
    <div className="container">
      <h1>Register for RP SOI</h1>
      <p>
        Join us and discover your hidden technical skills and nurture your creative digital dreams.
      </p>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
