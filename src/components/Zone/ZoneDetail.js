
import { useParams } from "react-router-dom";
//  import visa from "D:/WorkSpace/React_projects/SWP/ParkingManagement/public/assets/img/visa"
import './Zone.css'

import Slider from "../Complement/Slider"
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";

import ZoneA from "./ZoneA";
import ZoneB from "./ZoneB";
import ZoneC from "./ZoneC";

const ZoneDetail = () => {
    const {index} = useParams();



    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <form onSubmit={'handleSubmit'}>
                {index === 'A' ? <ZoneA></ZoneA> : index === 'B' ? <ZoneB></ZoneB> : <ZoneC></ZoneC>}

                {/* <div className="zone-detail">
                    <p><h5>ZONE 1</h5></p>
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
                                    <td class="border">R01</td>
                                    <td class="border">R02</td>
                                    <td class="border">R03</td>
                                    <td class="border">R04</td>
                                    <td class="border">R05</td>
                                    <td class="border">R06</td>
                                    <td class="border">R07</td>
                                    <td class="border">R08</td>
                                    <td class="border">R09</td>
                                    <td class="border">R10</td>
                                </tr>
                                <tr>
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
                                </tr>
                            </tbody>

                        </table>
                        <div>Customer Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">
                                    <td class="border">C01</td>
                                    <td class="border">C02</td>
                                    <td class="border">C03</td>
                                    <td class="border">C04</td>
                                    <td class="border">C05</td>
                                    <td class="border">C06</td>
                                    <td class="border">C07</td>
                                    <td class="border">C08</td>
                                    <td class="border">C09</td>
                                    <td class="border">C10</td>
                                </tr>
                                <tr>
                                    <td class="border">C11</td>
                                    <td class="border">C12</td>
                                    <td class="border">C13</td>
                                    <td class="border">C14</td>
                                    <td class="border">C15</td>
                                    <td class="border">C16</td>
                                    <td class="border">C17</td>
                                    <td class="border">C18</td>
                                    <td class="border">C19</td>
                                    <td class="border">C20</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <button style={{width:'30%',height:'50px', borderRadius:'5px' ,color: "#fff", marginLeft:'35%', backgroundColor:'#2DC98A', border:'#2DC98A' }} type="submit">Book now</button>
                </div> */}

                <div className="zone-detail-make">
                    <h5>MAKE RESERVATION</h5>

                    <div className="class-input">
                        <label>Start date *</label>
                        <br />
                        <div>
                            <input type={'date'} style={{ width: '120%', position: 'relative' }}  ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>Start time *</label>
                        <br />
                        <select class="form-select" autoComplete="" style={{ width: '120%' }}>
                            <option>00:00</option>
                            <option>01:00</option>
                            <option>02:00</option>
                            <option>03:00</option>
                            <option>04:00</option>
                            <option>05:00</option>
                            <option>06:00</option>
                            <option>07:00</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>


                        </select>

                    </div>
                    <div className="class-input">
                        <label>End date *</label>
                        <br />
                        <div>
                            <input type={'date'} style={{ width: '120%', position: 'relative' }}   ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>End time *</label>
                        <br />
                        <select class="form-select" autoComplete="off" style={{ width: '120%' }} >
                            <option>00:00</option>
                            <option>01:00</option>
                            <option>02:00</option>
                            <option>03:00</option>
                            <option>04:00</option>
                            <option>05:00</option>
                            <option>06:00</option>
                            <option>07:00</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>
                        </select>
                    </div>


                </div>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default ZoneDetail;
