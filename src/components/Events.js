import React from 'react';

const Events = () => (
    <div class="container">
        <div class="row my-5">
            <div class="col-md-12 px-4">
                <h2>UPCOMING EVENTS</h2>
                <br />            
            </div>
        </div>
        <div class="row my-5">
            <div class="col-md-6 px-4">
                <div class="image">
                    <img class="img-fluid shadow-sm" src="./assets/images/zoom.jpg" alt="Monday Night Encouragement" />
                    <div class="eMiddle px-4">
                        <button class="btn btn-warning btn-sm rounded-0" disabled>MAY<br> /</br>11</button>
                        <h5 class="mt-5 px-4 text-center events">MONDAY NIGHT ZOOM</h5>
                        <br />
                        <p class="text-left px-4 events">
                            Join us for a time of encouragement, devotional, Q&A, sharing, and prayer via Zoom - the link will be posted on our Facebook group.
                        </p>
                    </div>
                </div>
            </div>
            {/*<!-- <div class="col-md-6 px-4 events">
                <div class="image">
                    <img class="img-fluid shadow-sm" src="./assets/images/builder.jpg" alt="Marriage Builder" />
                    <div class="eMiddle px-4">
                        <button class="btn btn-warning btn-sm rounded-0" disabled>MAY<br>9</button>
                        <h5 class="mt-4 px-4 text-center events">MARRIAGE BUILDER</h5>
                        <br>
                        <p class="text-left px-4 events">Our Marriage Builder Seminar will continue on Saturday, 5/9 at 4pm via Zoom. We will be talking about conflict resolution. If you're interested, please speak to Pastor Jacob Cho.</p>
                    </div>
                </div>
            </div> --> */}
            <div class="col-md-6 px-4">
                <div class="image">
                    <img class="img-fluid shadow-sm" src="./assets/images/undivided.jpeg" alt="Undivided" />
                    <div class="eMiddle px-4">
                        <button class="btn btn-warning btn-sm rounded-0" disabled>MAY<br />16</button>
                        <h5 class="mt-4 px-4 text-center events">UNDIVIDED</h5>
                        <br />
                        <p class="text-left px-4 events">
                            We will be hosting an event for all the singles in our ministry this Saturday, 5/16 from 3:00pm - 4:30pm via Zoom. This event will be geared towards how you can “up your game” (marriage game). 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            {/*<!-- <div class="col-md-6 px-4">
                <div class="image">
                    <img class="img-fluid shadow-sm" src="./assets/images/undivided.jpeg" alt="Undivided" />
                    <div class="eMiddle px-4">
                        <button class="btn btn-warning btn-sm rounded-0" disabled>MAY<br>16</button>
                        <h5 class="mt-4 px-4 text-center events">UNDIVIDED</h5>
                        <br>
                        <p class="text-left px-4 events">
                            We will be hosting an event for all the singles in our ministry on Saturday 5/16 from 3 - 4:30pm via Zoom. This event will be geared towards how you can “up your game” (marriage game). Please save the date! 
                        </p>
                    </div>
                </div>
        </div> -->*/}
            <div class="col-md-6 px-4 events">
                <div class="image">
                    <img class="img-fluid shadow-sm" src="./assets/images/myrefuge.jpg" alt="Between Us" />
                    <div class="eMiddle px-4">
                        <button class="btn btn-warning btn-sm rounded-0" disabled>MAY<br />23</button>
                        <h5 class="mt-4 px-4 text-center events">GOD, MY REFUGE</h5>
                        <br />
                        <p class="text-left px-4 events">
                            The Bridge Women’s ministry, Between Us, is hosting an Online Art Workshop led by Sarah Ku over Zoom on Saturday, 5/23 from 1:00pm - 2:30pm! Art materials will be provided in advance. Please sign up with Patty Lee.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Events