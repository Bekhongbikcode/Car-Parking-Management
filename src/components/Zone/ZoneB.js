import {  useState, useEffect } from "react";
import { Link} from "react-router-dom";
import './Zone.css'
function ZoneB() {
    const [shellsC, setShellsC] = useState([]);
    const [shellsR, setShellsR] = useState([]);

    useEffect(() => {
        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/C/B')
            .then(response => response.json())
            .then((data) => {
                setShellsC(data)
                // console.log(data)
            })
            .catch(error => console.error(error));

        fetch('https://corsproxy-pms.herokuapp.com/https://backend-heroku-pms.herokuapp.com/present_slot/findAll/R/B')
            .then(response => response.json())
            .then((data) => {
                setShellsR(data)
                // console.log(data)
            })
            .catch(error => console.error(error));


    }, []);

    const sumObject = {};

    for (let prop in shellsC) {
        sumObject[prop] = shellsC[prop];
    }

    for (let prop in shellsR) {
        if (sumObject[prop]) {
            sumObject[prop] += shellsR[prop];
        } else {
            sumObject[prop] = shellsR[prop];
        }
    }
    // console.log(sumObject);

    const residentSlot = shellsR.filter(slot => slot.id_R_Slot.startsWith('R'));
    const customerSlot = shellsC.filter(slot => slot.id_C_Slot.startsWith('C'));

    return (
        <div>
            <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p style={{ float: 'left' }}>

                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/A'}>
                            <h5>ZONE A</h5>
                        </Link>


                        <h5 style={{ float: 'left', marginRight: '20px' }}>ZONE B</h5>



                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/C'}>

                            <h5>ZONE C</h5>
                        </Link>
                    </p>
                    <p>
                        <h5>DESCRIPTION</h5>
                        <span>P1 is the nearest zone to the terminal (100m distance).</span>
                        <br />
                        <span>Maximum parking time: 4 hours</span>
                    </p>
                    <p>
                        <h5>SPECIFICATIONS</h5>
                        <span>Maximum parking time: 4 hourss</span>
                    </p>

                    <p style={{ border: 'none' }}>
                        <h5>AVAILABILITY</h5>

                    </p>

                    <div class="table-responsive  align-items-center justify-content-center">
                        <div>Resident Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">

                                    {residentSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_R_Slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_R_Slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>

                        </table>
                        <div>Customer Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">

                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            {shell.id_C_Slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_C_Slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <button style={{ width: '30%', height: '50px', borderRadius: '5px', color: "#fff", marginLeft: '35%', backgroundColor: '#2DC98A', border: '#2DC98A' }} type="submit">Book now</button>
                </div>


            </form>
        </div>
    );
}
export default ZoneB;