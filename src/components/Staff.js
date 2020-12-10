import React from 'react';
import Ben from '../assets/images/Ben-Shin-1.jpg'
import Jacob from '../assets/images/Jacob-Cho-e.jpg'

const Staff = () => (
    <div class="container">
        <div class="row my-5">
            <div class="col-md-12 px-4">
                <h2>PASTORAL  STAFF</h2>
            
            </div>
        </div>
    
        <div class="row my-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 px-4">
                <div class="card shadow-sm mx-1" id="staff-card">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="image text-center pt-3">
                                <img class="img-fluid" src={Ben}  alt="p-ben"/>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h6 class="font-weight-bold">JACOB CHO</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>Teaching Pastor</p>
                            </div>
                            <div class="col-md-12">
                            <a href="mailto:benjamin.shin@biola.edu"><i class="fas fa-envelope text-secondary"></i> benjamin.shin@biola.edu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-3 px-4" id="staff-bio">
                <p>Benjamin C. Shin has served in the ministry as a pastor, parachurch leader, and professor for more than 25 years.  He is a graduate of UCLA, Talbot School of Theology, and Dallas Theological Seminary.  He enjoys reading, music, sports (especially the UCLA Bruins), and spending time with people.  His vision and passion include mentoring leaders, re-building churches, and teaching the Word of God.  He is married to his bride, Jen and has 2 wonderful sons named Adam and Zachary.  He currently serves as the Teaching Pastor at New Life Vision Church in Glendale, CA and as an Associate Professor of Christian Ministry & Leadership and Director of the Asian-American Ministry track for the Doctor of Ministry at Talbot School of Theology in La Mirada, CA.  He is the co-author of Tapestry of Grace: Untangling the Cultural Complexities of Asian American Life and Ministry.</p>
            </div>
        </div>
    <div class="row">
        <div class="col-md-12 px-4"></div>
    </div>
  
    <div class="row my-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 px-4">
                <div class="card shadow-sm mx-1" id="staff-card">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="image text-center pt-3">
                                <img class="img-fluid" src={Jacob} alt="p-jacob" />
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h6 class="font-weight-bold">JACOB CHO</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>College/Associate Pastor</p>
                            </div>
                            <div class="col-md-12">
                            <a href="mailto:jacob105cho@gmail.com"><i class="fas fa-envelope text-secondary"></i> jacob105cho@gmail.com </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-3 px-4" id="staff-bio">
                <p>Jacob Cho has been serving at New Life Vision Church since 2009. He holds a Master of Divinity degree from Talbot School of Theology. He enjoys watching the Dodgers, Lakers and playing sports. He currently serves on the SOLA Executive Team and also serves as the campus director of CCM UCLA. He is married to his beautiful bride, Joy.</p>
            </div>
    </div>
</div> 

)

export default Staff