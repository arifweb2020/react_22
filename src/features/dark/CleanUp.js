import React,{useState,useEffect} from 'react';

function CleanUp(props) {

    // https://medium.com/@dev_one/how-to-cleanup-side-effects-in-react-1db4ac14857b
    const [display, setDisplay] = useState("users");
    return (
      <div className='App'>
        <button
          onClick={() => {
            setDisplay("users");
          }}>
          display users
        </button>
        <button
          onClick={() => {
            setDisplay("posts");
          }}>
          display hello message
        </button>
        <>{display === "users" ? <Users /> : <Hello />}</>
      </div>
    );
}

export default CleanUp;

const Hello = () => {
    
    return (
      <p>
        Hello, World !!
      </p>
    );
  }

  const Users = () => {
    const [list, setList] = useState(null);
    useEffect(() => {
        //create a controller
        let controller = new AbortController();
        (async () => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts`,
              {
                // connect the controller with the fetch request
                signal: controller.signal,
              },
            );
            setList(await response.json());
            controller = null;
          } catch (e) {
            // Handle the error
          }
        })();
        //aborts the request when the component umounts
        return () => controller?.abort();
      });
    return (
        <div>
        {list === null ? (
          <p>Loading users...</p>
        ) : (
          <>
            {list.map((item) => {
              return <pre key={item.id}>{item.name}</pre>;
            })}
          </>
        )}
      </div>
    );
  }
  