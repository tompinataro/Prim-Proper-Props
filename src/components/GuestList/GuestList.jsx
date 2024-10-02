function GuestList({guestList}){
                // this catches the handoff from app.jsx where we instantiated it!
    return (

<>    <h2>Guest List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kid's Meal</th>
        </tr>
      </thead>
      <tbody>
        {guestList.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
          </tr>
        ))}
      </tbody>
    </table>
</>
    )
}

export default GuestList