function DinnerSupplies({guestList}) {
    // this catchs the handoff from app.jsx where we instantiated it!
    // DinnerSupplies needs the guestList to do its job - that's why we are bringing guestList in as the argument.
    // guestList here has curly braces around it because it is an OBJECT being submitted as the argument.
    //by using the curly braces it takes the array of guestList the object that is properties.
    return (
        <>
            <h2>Dinner Supplies</h2>
            <div>
                Spoons: {guestList.length * 2}
            </div>
            <div>
                Forks: {guestList.length * 2}
            </div>
            <div>
                Knives: {guestList.length * 2}
            </div>
        </>)
}
export default DinnerSupplies