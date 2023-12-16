import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

class User extends Component {
    usertype = ["individual", "company", "Advertiser", "Ad Agency", "Government", "Primary School", "Secondary School", "Junior collage", "Tertiery", "Polytechnic", "SPH staff", "SPH Magazine staff", "ANN Publisher", "ANN overseas sub", "Non-ANN overseas sub"]
    AccountStatus = ["Pending (waiting for validation)", "Active", "Suspended", "Deleted"]
    ActiveSubscribers = ["None", "free", "Basic", "Basic Unlimited", "Premium", "Premium Unlimited", "Ad", "SPH Staff only", "4A Premium", "4A Premium Unlimted", "4A Premium Unlimited wf seamless", "Overseas Sub with SPH content", "Overseas Sub without SPH content"]
    render() {
        return (
            <div className='row'>
                <div className='col-md-3 border border-info'>
                    1
                </div>
                <div className='col-md-9 border border-info p-3'>
                    <h3>Search User Account</h3>
                    <form>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <label >Username</label>
                                    <input type="text" class="form-control" placeholder="Email or Username" />
                                </div>
                                <div class="col">
                                    <label >Company</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="inputemail" placeholder="Email (for notifications)" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>USER TYPE</Accordion.Header>
                                    <Accordion.Body>
                                        {this.usertype.map((item, index) => {
                                            return (
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" value={item} />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        {item}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>ACCOUNT STATUS</Accordion.Header>
                                    <Accordion.Body>
                                        {this.AccountStatus.map((item, index) => {
                                            return (
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" value={item} />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        {item}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>ACTIVE SUBSCRIPTION</Accordion.Header>
                                    <Accordion.Body>
                                        {this.ActiveSubscribers.map((item, index) => {
                                            return (
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" value={item} />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        {item}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>CREATION DATE</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>CREATION DATE <br /> (DD/MM/YY)</h6>
                                        <label>From</label>
                                        <input type="date"></input>
                                        <label>To</label>
                                        <input type="date"></input>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>SORT BY</Accordion.Header>
                                    <Accordion.Body>
                                        <div class="form-group col-md-4">
                                            <select id="inputState" class="form-control">
                                                <option selected>User Name</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <strong>Sort Order: </strong>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label" for="inlineRadio1">ASC</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                            <label class="form-check-label" for="inlineRadio2">DSCE</label>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>FORMAT</Accordion.Header>
                                    <Accordion.Body>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label" for="inlineRadio1">View HTML</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                            <label class="form-check-label" for="inlineRadio2">Download PDF</label>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <input class="btn btn-outline-dark mt-3" type="reset" value="Reset" />
                            <input class="btn btn-warning mt-3" type="submit" value="Submit">
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default User;