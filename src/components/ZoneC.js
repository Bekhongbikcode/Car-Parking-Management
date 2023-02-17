import { useParams, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function ZoneC() {
    const [shells, setShells] = useState([]);

    useEffect(() => {
        fetch('https://corsproxy-pms.herokuapp.com/https://demo-spring-heroku-app.herokuapp.com/present_slot/findAll/C')
            .then(response => response.json())
            .then((data) => {
                setShells(data)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, []);

    const residentSlot = shells.filter(slot => slot.id_C_Slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_C_Slot.startsWith('C'));

    return (
        <div>
            <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p style={{ float: 'left' }}>
                        
                        <Link style={{ float: 'left', marginRight:'20px' }} to={'/ZoneDetail/A'}>

                            <h5>ZONE A</h5>
                        </Link>
                        <Link style={{ float: 'left', marginRight:'20px' }} to={'/ZoneDetail/B'}>

                            <h5>ZONE B</h5>
                        </Link>
                        <h5 style={{ float: 'left', marginRight:'20px' }}>ZONE C</h5>






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
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots == true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_C_Slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots == true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_C_Slot}
                                        </td>
                                    ))}
                                </tr>
                                {/* <tr>
                                    <td class="border">R11</td>
                                    <td class="border">R12</td>
                                    <td class="border">R13</td>
                                    <td class="border">R14</td>
                                    <td class="border">R15</td>
                                    <td class="border">R16</td>
                                    <td class="border">R17</td>
                                    <td class="border">R18</td>
                                    <td class="border">R19</td>
                                    <td class="border">R20</td>
                                </tr> */}
                            </tbody>

                        </table>
                        <div>Customer Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">

                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots == true? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

                                            {shell.id_C_Slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots == true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>

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
export default ZoneC;