import useStore from "../hooks/useStore";

function Profile() {
  const { state, reStore, clearContext } = useStore();
  
  return (
    <div>
      {!!state ? (
        <>
          <h2>User Profile</h2>
          <p>Name: {state.name}</p>
          <p>LastName: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Mobile-Number : {state.mobileNumber}</p>
          <br />
          <button onClick={() => { clearContext && clearContext(); }} >
            Clear State
          </button>
        </>
      ) : (
        <>
          User not found
          <br />
          <button onClick={() => { reStore && reStore(); }} >
            Re-Store State
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
