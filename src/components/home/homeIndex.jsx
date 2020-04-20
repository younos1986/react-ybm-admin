import {
    Link,
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import React from "react";
import { RouteWithSubRoutes } from '../my-routes';

const HomeIndex = ({ routes }) => {
    return (

<div>


<section className="hero-wrap home-bg d-flex align-items-center">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="hero-title">
        <h1>What’s your plan today?</h1>
        <h3>Find out perfect place to hangout in your city from over 1258 listings </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <form>
          <div className="search-box">
            <div className="row">
              <div className="col-md-6 search-box_line">
                <div className="search-box1">
                  <div className="search-box-title">
                    <label>What?</label><br/>
                    <input type="text" name="#" className="search-form" placeholder="Eg: restaurant, spa, shopping"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="search-box2">
                  <div className="search-box-title">
                    <label>Where?</label><br/>
                    <input type="text" name="#" className="search-form" placeholder="Eg: Sanfransisco, United States"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-search">
            <a href="#" className="btn btn-simple">Search →</a>
          </div>
        </form>
        <p className="search-bottom-title">By using this website, you are agreeing to our <a href="#"> terms and
            conditions</a></p>
      </div>
    </div>
  </div>
</section>

<div className="popular-link-set gray">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="popular-link-wrap">
          <p>BROWSE POPULAR IN YOUR CITY</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="popular-links">
          <ul className="d-flex flex-wrap justify-content-md-around">
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="poplar-svg"
                   version="1.1" viewBox="0 0 470 470"
                  style={{enablebackground:'new 0 0 470 470'}} width="512px" height="512px">
                  <g>
                    <g>
                      <path
                        d="m327.392,160.809c-3.292,2.515-3.922,7.222-1.407,10.513 14.076,18.423 21.515,40.443 21.515,63.678 0,57.897-47.103,105-105,105-57.897,0-105-47.103-105-105s47.103-105 105-105c23.235,0 45.255,7.439 63.679,21.516 3.29,2.515 7.998,1.885 10.513-1.407 2.515-3.291 1.885-7.998-1.407-10.513-21.061-16.091-46.23-24.596-72.785-24.596-66.168,0-120,53.832-120,120s53.832,120 120,120c66.168,0 120-53.832 120-120 0-26.555-8.505-51.724-24.596-72.784-2.514-3.291-7.22-3.922-10.512-1.407z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="m242.5,75c-88.224,0-160,71.775-160,160s71.776,160 160,160c88.225,0 160-71.775 160-160s-71.775-160-160-160zm0,305c-79.953,0-145-65.047-145-145s65.047-145 145-145 145,65.047 145,145-65.047,145-145,145z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M67.5,75c-4.142,0-7.5,3.357-7.5,7.5V145H45V82.5c0-4.143-3.358-7.5-7.5-7.5S30,78.357,30,82.5V145H15V82.5   c0-4.143-3.358-7.5-7.5-7.5S0,78.357,0,82.5v90c0,18.11,12.904,33.261,30,36.745V387.5c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V209.245c17.096-3.484,30-18.635,30-36.745v-90C75,78.357,71.642,75,67.5,75z M37.5,195   C25.093,195,15,184.906,15,172.5V160h45v12.5C60,184.906,49.907,195,37.5,195z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="m462.5,75c-20.678,0-37.5,16.822-37.5,37.5v137.5c0,4.143 3.357,7.5 7.5,7.5h22.5v130c0,4.143 3.357,7.5 7.5,7.5s7.5-3.357 7.5-7.5v-305c0-4.143-3.357-7.5-7.5-7.5zm-7.5,167.5h-15v-130c0-9.778 6.27-18.119 15-21.215v151.215z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                    </g>
                  </g>
                </svg>
                Restaurants</a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="poplar-svg"
                  version="1.1" x="0px" y="0px" viewBox="0 0 471.632 471.632"
                  style={{enablebackground:'new 0 0 471.632 471.632'}} space='preserve;' width='512px' height='512px'>
                  <g>
                    <g>
                      <g>
                        <rect x="249.111" y="311.14" width="19.692" height="150.65" data-original="#000000"
                          className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="200.861" y="451.94" width="116.19" height="19.692" data-original="#000000"
                          className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M67.939,127.015l191.015,197.908l190.031-197.908H67.939z M114.216,146.708h289.477L258.955,296.369L114.216,146.708z"
                          data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M94.524,83.692c28.554,0,52.185,23.631,52.185,53.169h19.692C166.401,96.492,133.909,64,94.524,64    s-71.877,32.492-71.877,72.861c0,40.369,32.492,72.862,71.877,72.862c17.723,0,34.462-6.892,49.231-18.708l-13.785-14.769    c-9.846,8.861-22.646,13.785-35.446,13.785c-28.554,0-52.185-23.631-52.185-53.169C42.339,107.324,65.97,83.692,94.524,83.692z"
                          data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon
                          points="403.693,0 284.555,70.892 267.816,133.908 286.524,139.815 301.293,84.677 414.524,17.723   "
                          data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                  </g>
                </svg>
                Nightlife</a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="poplar-svg"
                   version="1.1" x="0px" y="0px" viewBox="0 0 56.414 56.414"
                  style={{enablebackground:'new 0 0 56.414 56.414'}} space="preserve" width="512px" height="512px">
                  <g>
                    <path
                      d="M56.414,11.089L45.299,0H31.295l-5.519,5.501C12.053,4.356,0.988,12.076,0.833,12.187c-0.449,0.32-0.554,0.945-0.232,1.395  C0.796,13.854,1.103,14,1.415,14c0.201,0,0.404-0.061,0.58-0.187c0.139-0.099,9.712-6.776,21.881-6.419L5.999,25.213l0.008,0.008  L0,31.213l25.146,25.201l10.04-10.013c2.062,1.08,4.461,1.611,6.834,1.61c3.501,0,6.935-1.138,9.101-3.304  c7.367-7.368,4.443-15.45,3.443-17.633l1.849-1.845V11.089z M44.473,2l9.941,9.919v12.48L34.876,43.873  c-4.084-2.928-5.327-8.422-3.493-15.626c0.137-0.535-0.187-1.08-0.722-1.216c-0.537-0.143-1.079,0.187-1.216,0.722  C26.856,37.92,30.335,42.934,33.444,45.3l-2.293,2.286L8.836,25.224L26.516,7.59c4.198,0.48,8.631,1.866,13.046,4.667  c-0.039,0.221-0.068,0.446-0.068,0.678c0,2.17,1.765,3.935,3.935,3.935s3.936-1.765,3.936-3.935S45.599,9,43.429,9  c-1.216,0-2.291,0.566-3.013,1.436c-4.089-2.557-8.187-3.982-12.118-4.622L32.121,2H44.473z M41.814,13.8  c0.442,0.332,1.069,0.243,1.399-0.2c0.332-0.441,0.242-1.068-0.2-1.399c-0.309-0.231-0.619-0.435-0.928-0.652  C42.434,11.21,42.907,11,43.429,11c1.067,0,1.936,0.868,1.936,1.936c0,1.066-0.868,1.935-1.936,1.935  c-0.803,0-1.492-0.492-1.785-1.19C41.701,13.722,41.758,13.757,41.814,13.8z M2.828,31.217l4.592-4.58l22.322,22.37l-4.592,4.58  L2.828,31.217z M49.707,43.293c-2.576,2.574-8.37,3.748-13.03,1.621l16.375-16.332C54.047,31.058,55.657,37.342,49.707,43.293z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </svg>Shopping</a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="poplar-svg"
                  xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                  viewBox="0 0 512 512" style={{enablebackground:'new 0 0 512 512'}} space="preserve" width="512px"
                  height="512px">
                  <g>
                    <g>
                      <g>
                        <path
                          d="M503.202,444.126L390.89,331.815l7.115-18.973c1.327-3.54,0.463-7.529-2.21-10.203l-16.757-16.757    c-3.765-3.764-9.868-3.765-13.635,0l-21.053,21.053l-44.014-44.014l97.59-97.578c9.37-9.381,21.227-16.564,34.286-20.774    c11.149-3.589,21.432-9.878,29.738-18.184c14.368-14.365,22.101-33.468,21.78-53.789c-0.321-20.319-8.673-39.181-23.515-53.111    c-2.423-2.273-5.841-3.138-9.052-2.293c-3.211,0.845-5.76,3.283-6.75,6.453l-12.225,39.195c-1.509,4.839-4.814,8.802-9.309,11.158    c-4.497,2.358-9.641,2.823-14.477,1.315c-7.985-2.494-13.351-9.775-13.351-18.113c0-1.91,0.294-3.82,0.874-5.678l12.083-38.744    c0.994-3.189,0.267-6.666-1.923-9.188c-2.189-2.523-5.531-3.736-8.826-3.197c-13.792,2.239-26.577,8.259-36.97,17.405    c-18.299,16.089-27.608,40.11-24.902,64.251c2.764,24.788-6.073,49.426-24.244,67.597L249.1,211.687L115.142,77.729l-2.428-26.272    c-0.276-2.993-1.932-5.684-4.476-7.281L40.15,1.474c-3.81-2.388-8.763-1.827-11.941,1.351L2.824,28.209    c-3.179,3.179-3.738,8.132-1.35,11.939l42.703,68.087c1.595,2.545,4.288,4.201,7.28,4.477l26.272,2.427l133.963,133.965    l-97.586,97.573c-9.377,9.379-21.238,16.559-34.304,20.767c-11.297,3.638-21.301,9.76-29.739,18.196    c-14.366,14.366-22.1,33.468-21.778,53.785c0.323,20.314,8.673,39.173,23.515,53.104c2.422,2.273,5.84,3.137,9.05,2.295    c3.211-0.845,5.76-3.28,6.751-6.45l12.239-39.187c1.51-4.845,4.815-8.811,9.307-11.168c4.377-2.297,9.374-2.798,14.111-1.427    c0.123,0.044,0.247,0.085,0.373,0.125c9.992,3.115,15.588,13.789,12.474,23.789l-12.083,38.731    c-0.995,3.189-0.269,6.668,1.922,9.191c1.847,2.129,4.512,3.322,7.28,3.322c0.514,0,1.032-0.041,1.549-0.125    c13.769-2.239,26.549-8.251,36.971-17.396c18.279-16.086,27.587-40.109,24.897-64.267c-2.773-24.775,6.064-49.411,24.243-67.592    l62.043-62.031l44.009,44.009l-21.053,21.053c-3.765,3.768-3.765,9.872,0,13.637l16.757,16.759    c2.674,2.674,6.668,3.535,10.203,2.21l18.975-7.115l112.31,112.311c5.866,5.866,13.572,8.799,21.277,8.799    c7.705,0,15.41-2.932,21.277-8.799l16.523-16.523C514.933,474.946,514.933,455.857,503.202,444.126z M324.776,163.278    c22.339-22.337,33.191-52.725,29.773-83.374c-2.005-17.891,4.9-35.697,18.475-47.632c3.368-2.964,7.082-5.485,11.05-7.519    l-6.557,21.022c-1.161,3.719-1.748,7.56-1.748,11.42c0,16.82,10.803,31.495,26.888,36.52c20.151,6.282,41.657-4.994,47.939-25.14    l6.81-21.836c4.458,7.897,6.895,16.82,7.043,26.159c0.239,15.055-5.492,29.208-16.135,39.849    c-6.24,6.24-13.645,10.77-22.016,13.465c-15.963,5.144-30.492,13.963-42.011,25.496l-97.586,97.574l-23.966-23.966    L324.776,163.278z M187.248,348.735c-22.35,22.35-33.201,52.739-29.771,83.366c1.994,17.905-4.912,35.719-18.462,47.643    c-3.376,2.962-7.089,5.479-11.058,7.511l6.556-21.012c6.22-19.977-4.808-41.281-24.618-47.768    c-0.174-0.064-0.348-0.125-0.527-0.181c-9.762-3.04-20.124-2.1-29.177,2.649c-9.055,4.751-15.717,12.744-18.756,22.501    l-6.821,21.837c-4.461-7.897-6.9-16.822-7.048-26.161c-0.239-15.053,5.492-29.203,16.135-39.847    c6.251-6.251,13.658-10.786,22.014-13.477c15.964-5.141,30.498-13.954,42.027-25.486l97.586-97.574l23.965,23.965L187.248,348.735    z M87.934,98.078c-1.883-1.883-4.35-2.824-6.818-2.824c-1.08,0-2.161,0.181-3.19,0.541l-19.948-1.843l-36.087-57.54L36.413,21.89    l57.541,36.088l1.843,19.95c-0.355,1.016-0.542,2.091-0.542,3.187c0,2.557,1.016,5.009,2.823,6.817l232.635,232.637    l-10.145,10.146L87.934,98.078z M328.901,371.388l-17.018,6.381l-5.551-5.551l65.888-65.886l5.551,5.551l-6.381,17.017    L328.901,371.388z M489.566,473.042l-16.523,16.523c-4.212,4.212-11.069,4.212-15.283,0L347.877,379.683l31.806-31.806    l109.883,109.883C493.78,461.973,493.78,468.828,489.566,473.042z"
                          data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      </g>
                    </g>
                  </g>
                </svg>Home Services</a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="poplar-svg"
                  xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 491.1 491.1"
                  style={{enablebackground:'new 0 0 491.1 491.1'}} space="preserve" width="512px" height="512px">
                  <g>
                    <path transform="translate(0 -540.36)"
                      d="M401.5,863.31c-12,0-23.4,4.7-32,13.2c-8.6,8.6-13.4,19.8-13.4,31.8s4.7,23.2,13.4,31.8  c8.7,8.5,20,13.2,32,13.2c24.6,0,44.6-20.2,44.6-45S426.1,863.31,401.5,863.31z M401.5,933.31c-13.8,0-25.4-11.4-25.4-25  s11.6-25,25.4-25c13.6,0,24.6,11.2,24.6,25S415.1,933.31,401.5,933.31z M413.1,713.41c-1.8-1.7-4.2-2.6-6.7-2.6h-51.3  c-5.5,0-10,4.5-10,10v82c0,5.5,4.5,10,10,10h81.4c5.5,0,10-4.5,10-10v-54.9c0-2.8-1.2-5.5-3.3-7.4L413.1,713.41z M426.5,792.81  h-61.4v-62.1h37.4l24,21.6V792.81z M157.3,863.31c-12,0-23.4,4.7-32,13.2c-8.6,8.6-13.4,19.8-13.4,31.8s4.7,23.2,13.4,31.8  c8.7,8.5,20,13.2,32,13.2c24.6,0,44.6-20.2,44.6-45S181.9,863.31,157.3,863.31z M157.3,933.31c-13.8,0-25.4-11.4-25.4-25  s11.6-25,25.4-25c13.6,0,24.6,11.2,24.6,25S170.9,933.31,157.3,933.31z M90.6,875.61H70.5v-26.6c0-5.5-4.5-10-10-10s-10,4.5-10,10  v36.6c0,5.5,4.5,10,10,10h30.1c5.5,0,10-4.5,10-10S96.1,875.61,90.6,875.61z M141.3,821.11c0-5.5-4.5-10-10-10H10  c-5.5,0-10,4.5-10,10s4.5,10,10,10h121.3C136.8,831.11,141.3,826.71,141.3,821.11z M30.3,785.01l121.3,0.7c5.5,0,10-4.4,10.1-9.9  c0.1-5.6-4.4-10.1-9.9-10.1l-121.3-0.7c-0.1,0-0.1,0-0.1,0c-5.5,0-10,4.4-10,9.9C20.3,780.51,24.8,785.01,30.3,785.01z M50.7,739.61  H172c5.5,0,10-4.5,10-10s-4.5-10-10-10H50.7c-5.5,0-10,4.5-10,10S45.2,739.61,50.7,739.61z M487.4,726.11L487.4,726.11l-71.6-59.3  c-1.8-1.5-4-2.3-6.4-2.3h-84.2v-36c0-5.5-4.5-10-10-10H60.5c-5.5,0-10,4.5-10,10v73.2c0,5.5,4.5,10,10,10s10-4.5,10-10v-63.2h234.8  v237.1h-82c-5.5,0-10,4.5-10,10s4.5,10,10,10h122.1c5.5,0,10-4.5,10-10s-4.5-10-10-10h-20.1v-191.1h80.6l65.2,54l-0.7,136.9H460  c-5.5,0-10,4.5-10,10s4.5,10,10,10h20.3c5.5,0,10-4.4,10-9.9l0.8-151.6C491,730.91,489.7,728.01,487.4,726.11z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </svg>Delivery</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="main-block featured-wrap">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block">
          <h2>Featured Listings</h2>
          <p>These listings are featured and rated popular by our community</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 card-1">
        <div className="card">
          <img className="card-img-top" src="assets/home/images/featured-img1.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Sushi Kashiba</h5>
            <ul className="card-rating">
              <li>5.0</li>
              <li>3 ratings</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li>$$$$</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li> <svg xmlns="http://www.w3.org/2000/svg" className="card-svg" xlink="http://www.w3.org/1999/xlink"
                  version="1.1" viewBox="0 0 470 470" style={{enablebackground:'new 0 0 470 470'}} width="512px" height="512px">
                  <g>
                    <g>
                      <path
                        d="m327.392,160.809c-3.292,2.515-3.922,7.222-1.407,10.513 14.076,18.423 21.515,40.443 21.515,63.678 0,57.897-47.103,105-105,105-57.897,0-105-47.103-105-105s47.103-105 105-105c23.235,0 45.255,7.439 63.679,21.516 3.29,2.515 7.998,1.885 10.513-1.407 2.515-3.291 1.885-7.998-1.407-10.513-21.061-16.091-46.23-24.596-72.785-24.596-66.168,0-120,53.832-120,120s53.832,120 120,120c66.168,0 120-53.832 120-120 0-26.555-8.505-51.724-24.596-72.784-2.514-3.291-7.22-3.922-10.512-1.407z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="m242.5,75c-88.224,0-160,71.775-160,160s71.776,160 160,160c88.225,0 160-71.775 160-160s-71.775-160-160-160zm0,305c-79.953,0-145-65.047-145-145s65.047-145 145-145 145,65.047 145,145-65.047,145-145,145z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M67.5,75c-4.142,0-7.5,3.357-7.5,7.5V145H45V82.5c0-4.143-3.358-7.5-7.5-7.5S30,78.357,30,82.5V145H15V82.5   c0-4.143-3.358-7.5-7.5-7.5S0,78.357,0,82.5v90c0,18.11,12.904,33.261,30,36.745V387.5c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V209.245c17.096-3.484,30-18.635,30-36.745v-90C75,78.357,71.642,75,67.5,75z M37.5,195   C25.093,195,15,184.906,15,172.5V160h45v12.5C60,184.906,49.907,195,37.5,195z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="m462.5,75c-20.678,0-37.5,16.822-37.5,37.5v137.5c0,4.143 3.357,7.5 7.5,7.5h22.5v130c0,4.143 3.357,7.5 7.5,7.5s7.5-3.357 7.5-7.5v-305c0-4.143-3.357-7.5-7.5-7.5zm-7.5,167.5h-15v-130c0-9.778 6.27-18.119 15-21.215v151.215z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                    </g>
                  </g>
                </svg> Restaurant</li>
            </ul>
            <p className="card-text">Sushi will never be the same for me after paying Sushi Kashiba a visit for their
              omakase. Sushi will never be the same for me after paying.</p>
          </div>
          <div className="card-bottom">
            <p><i className="ti-location-pin"></i>SANFRANCISCO</p>
            <span>Closed Now</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 card-2">
        <div className="card">
          <img className="card-img-top" src="assets/home/images/featured-img2.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Romantic Cafe</h5>
            <ul className="card-rating">
              <li>4.0</li>
              <li>3 ratings</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li>$$$$</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="card-svg" xlink="http://www.w3.org/1999/xlink"
                  version="1.1" x="0px" y="0px" viewBox="0 0 390.762 390.762"
                  style={{enablebackground:'new 0 0 390.762 390.762'}} space="preserve" width="512px" height="512px">
                  <g>
                    <g>
                      <path
                        d="M384.425,149.124c-0.594-2.766-3.038-4.741-5.866-4.741H70.514c-2.829,0-5.272,1.975-5.866,4.741   c-0.976,4.544-1.828,9.133-2.579,13.751c-8.9,1.16-17.295,3.926-25.007,8.275C17.68,182.124,4.919,201.48,1.13,225.652   c-3.518,22.449,1.239,46.646,13.396,68.134c17.681,31.25,48.795,51.711,79.819,52.727c9.2,15.328,19.924,29.072,31.836,40.66   c1.12,1.089,2.622,1.699,4.184,1.699h188.344c1.563,0,3.064-0.61,4.184-1.699c20.631-20.071,37.729-46.578,49.444-76.655   c12.054-30.946,18.426-65.85,18.426-100.936C390.762,189.05,388.63,168.709,384.425,149.124z M72.37,298.378   c-8.995-5.755-17.065-14.3-22.791-24.422c-7.703-13.611-10.776-28.55-8.653-42.069c1.84-11.775,7.513-20.893,15.989-25.682   c0.473-0.269,0.962-0.506,1.45-0.747c-0.019,1.374-0.054,2.747-0.054,4.123C58.311,240.152,63.152,270.582,72.37,298.378z    M24.97,287.877c-10.829-19.142-15.085-40.581-11.984-60.366c3.21-20.479,13.86-36.786,29.979-45.913   c5.399-3.045,11.223-5.146,17.375-6.301c-0.667,5.659-1.175,11.356-1.51,17.083c-2.733,0.848-5.357,1.979-7.834,3.387   c-11.721,6.622-19.508,18.792-21.926,34.264c-2.541,16.179,1.034,33.878,10.065,49.835c9.339,16.51,23.558,29.092,39.327,34.929   c2.689,6.539,5.634,12.896,8.816,19.046C62.897,330.219,39.178,312.987,24.97,287.877z M316.246,376.872H132.827   C93.64,337.627,70.311,275.31,70.311,209.582c0-18.033,1.714-35.905,5.097-53.198h78.365v58.496h-22.499c-3.313,0-6,2.687-6,6   v71.997c0,3.313,2.687,6,6,6h56.997c3.313,0,6-2.687,6-6V220.88c0-3.313-2.687-6-6-6h-22.499v-58.496h207.892   c3.383,17.293,5.097,35.165,5.097,53.198C378.762,275.31,355.433,337.627,316.246,376.872z M182.272,226.88v59.997h-44.997V226.88   H182.272z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M168.587,121.885c0,3.313,2.687,6,6,6s6-2.687,6-6c0-8.135,1.839-11.967,3.969-16.404   c2.415-5.03,5.151-10.731,5.151-21.596s-2.736-16.566-5.151-21.596c-2.129-4.437-3.969-8.269-3.969-16.404   c0-8.133,1.839-11.964,3.969-16.4c2.415-5.029,5.151-10.73,5.151-21.594c0-3.313-2.687-6-6-6s-6,2.687-6,6   c0,8.133-1.839,11.965-3.969,16.401c-2.415,5.029-5.151,10.73-5.151,21.594c0,10.865,2.736,16.566,5.15,21.596   c2.13,4.437,3.969,8.269,3.969,16.404s-1.839,11.967-3.969,16.404C171.323,105.319,168.587,111.02,168.587,121.885z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M213.977,121.885c0,3.313,2.687,6,6,6s6-2.687,6-6c0-8.135,1.839-11.967,3.969-16.404   c2.415-5.03,5.151-10.731,5.151-21.596s-2.736-16.566-5.151-21.596c-2.129-4.437-3.969-8.269-3.969-16.404   c0-8.133,1.839-11.964,3.969-16.4c2.415-5.029,5.151-10.73,5.151-21.594c0-3.313-2.687-6-6-6s-6,2.687-6,6   c0,8.133-1.839,11.965-3.969,16.401c-2.415,5.029-5.151,10.73-5.151,21.594c0,10.865,2.736,16.566,5.15,21.596   c2.13,4.437,3.969,8.269,3.969,16.404s-1.839,11.967-3.969,16.404C216.713,105.319,213.977,111.02,213.977,121.885z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M259.367,121.885c0,3.313,2.687,6,6,6s6-2.687,6-6c0-8.135,1.839-11.967,3.969-16.404c2.414-5.03,5.15-10.731,5.15-21.596   s-2.736-16.566-5.15-21.596c-2.13-4.437-3.969-8.269-3.969-16.404c0-8.133,1.839-11.964,3.969-16.4   c2.415-5.029,5.151-10.73,5.151-21.594c0-3.313-2.687-6-6-6s-6,2.687-6,6c0,8.133-1.839,11.965-3.969,16.401   c-2.415,5.029-5.151,10.73-5.151,21.594c0,10.865,2.736,16.566,5.151,21.596c2.129,4.437,3.969,8.269,3.969,16.404   s-1.839,11.967-3.969,16.404C262.103,105.319,259.367,111.02,259.367,121.885z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                    </g>
                  </g>
                </svg> Cafe</li>
            </ul>
            <p className="card-text">Romantic will never be the same for me after paying Sushi Kashiba a visit for their
              omakase. Sushi will never be the same for me after paying.</p>
          </div>
          <div className="card-bottom">
            <p><i className="ti-location-pin"></i>SANFRANCISCO</p>
            <span className="open-close_green">Open Now</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 card-2">
        <div className="card card-last">
          <img className="card-img-top" src="assets/home/images/featured-img3.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Electric Band</h5>
            <ul className="card-rating">
              <li className="card-rating-yellow">3.5</li>
              <li>3 ratings</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li>$$$$</li>
              <li><i className="fa fa-circle" aria-hidden="true"></i></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="card-svg" xlink="http://www.w3.org/1999/xlink"
                  version="1.1" x="0px" y="0px" viewBox="0 0 60 60" style={{enablebackground:'new 0 0 60 60'}}
                  space="preserve" width="512px" height="512px">
                  <g>
                    <g>
                      <path
                        d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M23.165,8.459c0.537-0.13,0.868-0.67,0.739-1.206c-0.129-0.537-0.67-0.866-1.206-0.739   c-3.935,0.946-7.522,2.955-10.376,5.809S7.46,18.764,6.514,22.698c-0.129,0.536,0.202,1.076,0.739,1.206   c0.078,0.019,0.157,0.027,0.234,0.027c0.451,0,0.861-0.308,0.972-0.767c0.859-3.575,2.685-6.836,5.277-9.429   S19.59,9.318,23.165,8.459z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M52.747,36.096c-0.538-0.129-1.077,0.201-1.206,0.739c-0.859,3.575-2.685,6.836-5.277,9.429s-5.854,4.418-9.43,5.277   c-0.537,0.13-0.868,0.67-0.739,1.206c0.11,0.459,0.521,0.767,0.972,0.767c0.077,0,0.156-0.009,0.234-0.027   c3.936-0.946,7.523-2.955,10.377-5.809s4.862-6.441,5.809-10.376C53.615,36.766,53.284,36.226,52.747,36.096z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M24.452,13.286c0.538-0.125,0.873-0.663,0.747-1.2c-0.125-0.538-0.665-0.878-1.2-0.747c-3.09,0.72-5.904,2.282-8.141,4.52   c-2.237,2.236-3.8,5.051-4.52,8.141c-0.126,0.537,0.209,1.075,0.747,1.2c0.076,0.019,0.152,0.026,0.228,0.026   c0.454,0,0.865-0.312,0.973-0.773c0.635-2.725,2.014-5.207,3.986-7.18S21.728,13.921,24.452,13.286z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M48.661,36.001c0.126-0.537-0.209-1.075-0.747-1.2c-0.538-0.133-1.075,0.209-1.2,0.747   c-0.635,2.725-2.014,5.207-3.986,7.18s-4.455,3.352-7.18,3.986c-0.538,0.125-0.873,0.663-0.747,1.2   c0.107,0.462,0.519,0.773,0.973,0.773c0.075,0,0.151-0.008,0.228-0.026c3.09-0.72,5.904-2.282,8.141-4.52   C46.379,41.905,47.941,39.091,48.661,36.001z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M26.495,16.925c-0.119-0.541-0.653-0.879-1.19-0.763c-4.557,0.997-8.146,4.586-9.143,9.143   c-0.118,0.539,0.224,1.072,0.763,1.19c0.072,0.016,0.144,0.023,0.215,0.023c0.46,0,0.873-0.318,0.976-0.786   c0.831-3.796,3.821-6.786,7.617-7.617C26.271,17.997,26.613,17.464,26.495,16.925z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M43.838,34.695c0.118-0.539-0.224-1.072-0.763-1.19c-0.54-0.118-1.072,0.222-1.19,0.763   c-0.831,3.796-3.821,6.786-7.617,7.617c-0.539,0.118-0.881,0.651-0.763,1.19c0.103,0.468,0.516,0.786,0.976,0.786   c0.071,0,0.143-0.008,0.215-0.023C39.252,42.841,42.841,39.252,43.838,34.695z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                      <path
                        d="M38.08,30c0-4.455-3.625-8.08-8.08-8.08s-8.08,3.625-8.08,8.08s3.625,8.08,8.08,8.08S38.08,34.455,38.08,30z M30,36.08   c-3.353,0-6.08-2.728-6.08-6.08s2.728-6.08,6.08-6.08s6.08,2.728,6.08,6.08S33.353,36.08,30,36.08z"
                        data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                    </g>
                  </g>
                </svg> Music</li>
            </ul>
            <p className="card-text">Sushi will never be the same for me after paying Sushi Kashiba a visit for their
              omakase. Sushi will never be the same for me after paying.</p>
          </div>
          <div className="card-bottom">
            <p><i className="ti-location-pin"></i>SANFRANCISCO</p>
            <span>Closed Now</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block gray">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="grid">
          <figure className="effect-chico">
            <img src="assets/home/images/gal1.jpg" alt="#" className="img-fluid"/>
            <figcaption>
              <div className="effect-caption-wrap">
                <h2>New York</h2>
                <p>1500+ Listings</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-md-6">
        <div className="row detailed-item-mr">
          <div className="col-md-12">
            <div className="grid">
              <figure className="effect-chico">
                <img src="assets/home/images/gal2.jpg" alt="#" className="img-fluid"/>
                <figcaption>
                  <div className="effect-caption-wrap">
                    <h2>San Diego</h2>
                    <p>300+ Listings</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="grid">
              <figure className="effect-chico">
                <img src="assets/home/images/gal3.jpg" alt="#" className="img-fluid"/>
                <div className="effect-caption-wrap">
                  <h2>Chicago</h2>
                  <p>800+ Listings</p>
                </div>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="grid">
              <figure className="effect-chico">
                <img src="assets/home/images/gal4.jpg" alt="#" className="img-fluid"/>
                <div className="effect-caption-wrap">
                  <h2>Boston</h2>
                  <p>210+ Listings</p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block howit-work-wrap">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block">
          <h2>How it works?</h2>
          <p>Its really simple. Follow the steps and get started today!</p>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="howit-bg"></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="howit-icon-wrap">
          <div className="howit-img-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="howit-svg" xlink="http://www.w3.org/1999/xlink"
              version="1.1" viewBox="0 0 470 470" style={{enablebackground:"new 0 0 470 470"}} width="512px" height="512px">
              <g>
                <g>
                  <path
                    d="m462.5,22.5h-455c-4.143,0-7.5,3.358-7.5,7.5v410c0,4.142 3.357,7.5 7.5,7.5h455c4.143,0 7.5-3.358 7.5-7.5v-80c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v72.5h-440v-335h440v232.5c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-300c0-4.142-3.357-7.5-7.5-7.5zm-447.5,15h277.5v45h-277.5v-45zm292.5,45v-45h147.5v45h-147.5z"
                    data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path d="m381.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z" data-original="#000000"
                    className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path d="m340.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z" data-original="#000000"
                    className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path d="m422.5,52c-4.411,0-8,3.589-8,8s3.589,8 8,8 8-3.589 8-8-3.589-8-8-8z" data-original="#000000"
                    className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path
                    d="m269.745,328.458c0,1.989 0.79,3.897 2.196,5.303l58.543,58.542c1.407,1.407 3.314,2.197 5.304,2.197s3.896-0.79 5.304-2.197l21.213-21.213c2.929-2.929 2.929-7.678 0-10.606l-58.542-58.542c-2.929-2.929-7.677-2.929-10.607,0l-5.303,5.303-10.831-10.831c32.824-38.264 31.15-96.129-5.079-132.358-18.416-18.416-42.9-28.557-68.943-28.557s-50.527,10.142-68.943,28.557c-38.015,38.015-38.015,99.871 0,137.886 18.416,18.416 42.9,28.557 68.943,28.557 23.527,0 45.78-8.279 63.438-23.455l10.807,10.808-5.303,5.303c-1.407,1.407-2.197,3.314-2.197,5.303zm-125.082-37.123c-32.167-32.167-32.167-84.506 0-116.673 15.582-15.582 36.3-24.164 58.336-24.164s42.754,8.582 58.336,24.164c32.167,32.167 32.167,84.506 0,116.673-15.582,15.582-36.3,24.164-58.336,24.164s-42.754-8.582-58.336-24.164zm201.732,74.453l-10.606,10.607-47.937-47.936 5.301-5.301c0.005-0.005 5.306-5.306 5.306-5.306l47.936,47.936z"
                    data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path
                    d="m250.729,185.27c-12.75-12.749-29.7-19.771-47.73-19.771s-34.98,7.021-47.73,19.771c-26.317,26.318-26.317,69.141 0,95.459 12.75,12.749 29.7,19.771 47.73,19.771s34.98-7.021 47.73-19.771c26.318-26.318 26.318-69.142 0-95.459zm-10.607,84.852c-9.916,9.916-23.1,15.377-37.123,15.377s-27.207-5.461-37.123-15.377c-20.47-20.47-20.47-53.776 0-74.246 9.916-9.916 23.1-15.377 37.123-15.377s27.207,5.461 37.123,15.377c20.47,20.47 20.47,53.776 0,74.246z"
                    data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                </g>
              </g>
            </svg>
          </div>
          <h4>Search Listing</h4>
          <p>Start by searching for what you want to do today. Choose your city and start exploring!</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="howit-icon-wrap">
          <div className="howit-img-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="howit-svg" xlink="http://www.w3.org/1999/xlink"
              version="1.1" x="0px" y="0px" viewBox="0 0 33 33" style={{enablebackground:'new 0 0 33 33'}}
              space="preserve" width="512px" height="512px">
              <g>
                <g>
                  <path
                    d="M29.3,15.817c-1.364,0-2.558-0.742-3.2-1.843c-0.642,1.102-1.836,1.843-3.2,1.843s-2.559-0.742-3.2-1.843   c-0.641,1.102-1.835,1.843-3.199,1.843c-1.364,0-2.559-0.742-3.2-1.843c-0.642,1.102-1.836,1.843-3.202,1.843   c-1.364,0-2.558-0.742-3.2-1.843c-0.642,1.102-1.836,1.843-3.2,1.843C1.66,15.817,0,14.158,0,12.119V7.195   c0-0.062,0.012-0.124,0.034-0.182l2.363-6.055c0.075-0.192,0.26-0.318,0.466-0.318h27.273c0.206,0,0.391,0.126,0.466,0.318   l2.363,6.055C32.988,7.071,33,7.133,33,7.195v4.924C33,14.158,31.34,15.817,29.3,15.817z M26.101,11.619c0.276,0,0.5,0.224,0.5,0.5   c0,1.488,1.211,2.698,2.7,2.698s2.7-1.21,2.7-2.698v-4.83l-2.205-5.649H3.205L1,7.289v4.83c0,1.488,1.211,2.698,2.699,2.698   c1.489,0,2.7-1.21,2.7-2.698c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.488,1.211,2.698,2.7,2.698   c1.49,0,2.702-1.21,2.702-2.698c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.488,1.211,2.698,2.7,2.698   c1.488,0,2.699-1.21,2.699-2.698c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.488,1.211,2.698,2.7,2.698s2.7-1.21,2.7-2.698   C25.601,11.843,25.824,11.619,26.101,11.619z"
                    data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <path
                    d="M28.39,32.361H4.611c-1.199,0-2.174-0.975-2.174-2.174V19.651c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v10.536   c0,0.647,0.526,1.174,1.174,1.174H28.39c0.648,0,1.175-0.526,1.175-1.174V19.651c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5   v10.536C30.564,31.385,29.589,32.361,28.39,32.361z"
                    data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  <g>
                    <path
                      d="M14.433,32.16H7.194c-0.276,0-0.5-0.224-0.5-0.5V19.306c0-0.276,0.224-0.5,0.5-0.5h7.238c0.276,0,0.5,0.224,0.5,0.5V31.66    C14.933,31.936,14.709,32.16,14.433,32.16z M7.694,31.16h6.238V19.806H7.694V31.16z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                    <path
                      d="M25.805,26.38h-8.566c-0.276,0-0.5-0.224-0.5-0.5v-6.573c0-0.276,0.224-0.5,0.5-0.5h8.566c0.276,0,0.5,0.224,0.5,0.5    v6.573C26.305,26.156,26.081,26.38,25.805,26.38z M17.738,25.38h7.566v-5.573h-7.566V25.38z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4>Choose a business</h4>
          <p>Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="howit-icon-wrap">
          <div className="howit-img-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="howit-svg" xlink="http://www.w3.org/1999/xlink"
              version="1.1" x="0px" y="0px" viewBox="0 0 416.768 416.768"
              style={{enablebackground:'new 0 0 416.768 416.768'}} space="preserve" width="512px" height="512px">
              <g>
                <g>
                  <g>
                    <path
                      d="M207.639,0c-2.56,0-5.12,2.048-5.12,5.12l-0.512,26.112c0,3.072,2.56,5.12,5.12,5.12c3.072,0,5.12-2.048,5.12-5.12    l0.512-26.112C212.759,2.048,210.711,0,207.639,0z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M247.575,23.552c-2.048-2.048-5.12-2.048-7.168,0l-18.944,17.92c-2.048,2.048-2.048,5.12,0,7.168    c1.024,1.024,2.048,1.536,3.584,1.536c1.024,0,2.56-0.512,3.584-1.536l18.944-17.92C249.623,28.672,249.623,25.6,247.575,23.552z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M193.815,41.472l-18.944-17.92c-2.048-2.048-5.12-2.048-7.168,0c-2.048,2.048-2.048,5.12,0,7.168l18.944,17.92    c1.024,1.024,2.048,1.536,3.584,1.536s2.56-0.512,3.584-1.536C195.863,46.592,195.863,43.52,193.815,41.472z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M390.423,392.704c-0.512-2.56-3.584-4.608-6.144-3.584l-32.256,7.68l-28.16-115.712    c28.672-12.8,38.4-70.656,22.016-136.192c-5.12-19.968-19.456-68.608-28.16-87.04c-1.024-2.048-3.584-3.072-5.632-2.56    l-92.16,22.528c-2.56,0.512-4.096,2.56-4.096,5.12c0.512,20.48,10.24,70.144,15.36,90.112c15.872,64,50.176,110.08,80.896,110.08    c0.512,0,1.024,0,2.048,0l28.16,115.712l-32.256,7.68c-2.56,0.512-4.608,3.584-3.584,6.144c0.512,2.56,2.56,4.096,5.12,4.096    c0.512,0,1.024,0,1.024,0l74.24-17.92C389.399,398.336,391.447,395.264,390.423,392.704z M226.583,86.016l83.968-20.48    c3.584,8.192,7.68,19.968,11.776,32.256l-91.136,21.504C229.143,106.496,227.095,94.72,226.583,86.016z M241.431,169.984    c-2.048-9.216-5.632-24.576-8.704-40.448l92.16-22.016c4.608,15.36,8.704,30.208,10.752,38.912    c15.36,62.464,6.656,119.808-18.944,125.952S256.279,231.936,241.431,169.984z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M318.231,138.752c-0.512-2.56-3.072-4.096-6.144-3.584c-2.56,0.512-4.608,3.584-3.584,6.144    c11.264,45.056,9.216,83.456,4.608,94.72c-1.024,2.56,0,5.632,2.56,6.656c0.512,0.512,1.536,0.512,2.048,0.512    c2.048,0,4.096-1.024,4.608-3.072C327.959,226.816,330.007,186.88,318.231,138.752z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M196.887,77.312l-92.16-22.528c-2.56-0.512-4.608,0.512-5.632,2.56c-8.704,18.432-23.04,67.072-28.16,87.04    c-16.384,66.048-6.144,123.904,22.016,136.192l-28.16,115.712l-32.256-7.68c-2.56-0.512-5.632,1.024-6.144,3.584    c-1.024,3.072,0.512,5.632,3.584,6.656l74.24,17.92c0.512,0,1.024,0,1.024,0c2.048,0,4.608-1.536,5.12-4.096    c0.512-2.56-1.024-5.632-3.584-6.144l-32.256-7.68l28.16-115.712c0.512,0,1.024,0,2.048,0c30.72,0,65.024-46.08,80.896-110.592    c5.12-19.968,14.848-70.144,15.36-90.112C200.983,79.872,199.447,77.824,196.887,77.312z M174.871,170.496    c-15.36,61.952-49.664,108.544-75.264,102.4c-25.088-6.656-34.304-64-18.944-125.952c2.048-9.216,6.144-24.064,10.752-38.912    l92.16,22.016C180.503,145.92,177.431,161.28,174.871,170.496z M185.623,119.296L94.487,97.792    c4.096-12.288,8.192-24.064,11.776-32.256l83.968,20.48C189.719,94.72,187.671,106.496,185.623,119.296z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M104.727,135.68c-2.56-0.512-5.632,1.024-6.144,3.584c-11.776,48.128-9.216,88.064-4.096,101.376    c1.024,2.048,2.56,3.072,4.608,3.072c0.512,0,1.536,0,2.048-0.512c2.56-1.024,3.584-4.096,2.56-6.656    c-4.608-11.776-6.656-49.664,4.608-94.72C108.823,139.264,107.287,136.192,104.727,135.68z"
                      data-original="#000000" className="active-path" data-old_color="#ff6b6b" fill="#ff6b6b" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4>Enjoy your day</h4>
          <p>Go and have a good time or even make a booking directly from the listing page. </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block gray">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block">
          <h2>News & Articles</h2>
          <p>Browse the latest news and articles from our blog.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 article-first">
        <div className="news-block">
          <img src="assets/home/images/article-img1.jpg" alt="#" className="img-fluid"/>
          <div className="news-title">
            <p>Oct 20, 2017 • Restaurants</p>
            <h5>How to choose top-notch restaurants</h5>
            <p>By Sarah Cooper</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 article-first">
        <div className="news-block">
          <img src="assets/home/images/article-img2.jpg" alt="#" className="img-fluid"/>
          <div className="news-title">
            <p>Oct 20, 2017 • Travelling</p>
            <h5>Traveling alone? Remember this 5 useful tips</h5>
            <p>By Mary Loue</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 article-first">
        <div className="news-block">
          <img src="assets/home/images/article-img3.jpg" alt="#" className="img-fluid"/>
          <div className="news-title">
            <p>Oct 20, 2017 • Culture</p>
            <h5>What culture says about your country?</h5>
            <p>By Samuel Phils</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 article-first">
        <div className="news-block">
          <img src="assets/home/images/article-img4.jpg" alt="#" className="img-fluid"/>
          <div className="news-title">
            <p>Oct 20, 2017 • Events</p>
            <h5>World’s biggest hard-rock band visting Boston</h5>
            <p>By Sarah Cooper</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="btn-wrap">
          <a href="blog.html" className="btn btn-simple">Visit our Blog →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="main-block">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="titile-block">
          <h2>Reach Millions of People</h2>
          <p>Add your business infront of millions and earn 3x profits from our tool</p>
        </div>
        <div className="btn-wrap btn-wrap2">
          <a href="add-listing.html" className="btn btn-simple">Add your Listing →</a>
        </div>
      </div>
    </div>
  </div>
</section>





</div>

);
};

export default HomeIndex;