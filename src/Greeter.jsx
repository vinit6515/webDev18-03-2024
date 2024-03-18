// Default props
export default function Greeter({person="Vinit", from="Sridhar"}){
    return(
        <>
        <h1>Welcome, {person}  </h1>
        <h2>From , {from}</h2>
        </>
    );

}