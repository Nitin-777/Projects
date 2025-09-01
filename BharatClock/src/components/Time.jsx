

let Time= () => {
     let samay = new Date();
    return (
   <p>The samay in bharat is {samay.toLocaleDateString()} - {
   samay.toLocaleTimeString()}</p>
    );
};

export default Time;