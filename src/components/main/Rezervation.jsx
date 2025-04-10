import { useState } from "react";

const Rezervation = () => {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [data, SetData] = useState('');
    const [time, SetTime] = useState('');
    const [people, SetPeople] = useState('');
    const [rezervs, SetRezervs] = useState([]);

    function SubmitHundler(e) {
        e.preventDefault();
        SetRezervs([...rezervs,
        {
            id: Math.random(),
            name,
            email,
            data,
            time,
            people
        }])
    };

    return (<>
        <div class="table">
            <h4>Reservation</h4>
            <h2>Book your table</h2>
            <form action="#" method="GET" self="blank" >
                <input class="" type="text" name="logo" value={name} placeholder="NAME" onChange={(e) => { SetName(e.target.value) }} />
                <input class="" type="email" name="logo" value={email} placeholder="EMAIL" onChange={(e) => { SetEmail(e.target.value) }} /><br />
                <input class="" type="date" name="logo" value={data} placeholder="DATE" onChange={(e) => { SetData(e.target.value) }} />
                <input class="" type="time" name="logo" value={time} placeholder="TIME" onChange={(e) => { SetTime(e.target.value) }} /><br />
                <input class="" type="text" name="logo" value={people} placeholder="PEOPLE" onChange={(e) => { SetPeople(e.target.value) }} />
                <button class="" type="submit" onSubmit={SubmitHundler}>FIND A TABLE</button>
            </form>
        </div>
    </>)
}
export default Rezervation;