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
        <div className="table">
            <h4>Reservation</h4>
            <h2>Book your table</h2>
            <form action="#" method="GET" self="blank" >
                <input className="" type="text" name="logo" value={name} placeholder="NAME" onChange={(e) => { SetName(e.target.value) }} />
                <input className="" type="email" name="logo" value={email} placeholder="EMAIL" onChange={(e) => { SetEmail(e.target.value) }} /><br />
                <input className="" type="date" name="logo" value={data} placeholder="DATE" onChange={(e) => { SetData(e.target.value) }} />
                <input className="" type="time" name="logo" value={time} placeholder="TIME" onChange={(e) => { SetTime(e.target.value) }} /><br />
                <input className="" type="text" name="logo" value={people} placeholder="PEOPLE" onChange={(e) => { SetPeople(e.target.value) }} />
                <button className="" type="submit" onSubmit={SubmitHundler}>FIND A TABLE</button>
            </form>
        </div>
    </>)
}
export default Rezervation;