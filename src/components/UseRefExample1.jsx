import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // Logs the user input in the console
    console.log(inputRef.current.value);
    // Sets 'hello' in the input field
    inputRef.current.value = 'hello';
    // Sets red color in the input box
    inputRef.current.style.backgroundColor = 'red';
    // Changes 'Hellew' to Goodbye
    paraRef.current.innerText = 'Goodbye';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hellew
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
