import React from "react";

function Project(){
    return(
       <div className="container-fluid px-3 mt-5 px-md-5">
            <div className="row row-cols-1 d-none d-md-flex row-cols-md-4 g-4">
  <div className="col ">
    <div className="card  h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
      <h3 className="card-title text1 text-center">Sponsor a child</h3>
        <p className="card-text text2 text-center">With as little as $20, $30 and $50 you can grant a child access to educational facilities that will guarantee them a brighter future</p>

        {/* <h5 className="text2 fw-bold mt-5">Read more </h5> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
      <h3 className="card-title text1  text-center">Donate your old books</h3>
        <p className="card-text text2  text-center">Don't shed or throw out your old books, it can help a child's journey</p>

        {/* <h5 className="text2 fw-bold text-start mt-5">Read more </h5> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
      <h3 className="card-title text1  text-center">Buy books for a child</h3>
        <p className="card-text text2  text-center">With as little as $20, $30 and $50 you can grant a child access to educational facilities that will guarantee them a brighter future</p>
        {/* <h5 className="text2 fw-bold mt-5 text-start">Read more </h5> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
      <h3 className="card-title text1  text-center">Buy books for a child</h3>
        <p className="card-text text2  text-center">With as little as $20, $30 and $50 you can grant a child access to educational facilities that will guarantee them a brighter future</p>
        {/* <h5 className="text2 fw-bold mt-5 text-start">Read more </h5> */}
      </div>
    </div>
  </div>
            </div>
{/* Mobile View Below */}
            <div id="carouselExampleIndicators" className="carousel slide d-md-none"  >
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="col ">
    <div className="card mx-2 ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h2 className="card-title text1 text-center">Sponsor a child</h2>
        <p className="card-text text2 text-center">With as little as $20, $30 and $50 you can grant a child access to educational facilities that will guarantee them a brighter future</p>

        {/* <h5 className="text2 fw-bold mt-5">Read more </h5> */}
        
      </div>
    </div>
  </div>
    </div>
    <div className="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <div className="col ">
    <div className="card mx-2 ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body text-center">
        <h2 className="card-title text1">Donate your old books</h2>
        <p className="card-text text2">Don't shed or throw out your old books, it can help a child's journey</p>

        {/* <h5 className="text2 fw-bold text-start mt-5">Read more </h5> */}
      </div>
    </div>
  </div>
    </div>
    <div className="carousel-item">
    
      <div className="col ">
    <div className="card mx-2 ">
    <div className="card-body text-center">
        <h2 className="card-title text1">Buy books for a child</h2>
        <p className="card-text text2">With as little as $20, $30 and $50 you can grant a child access to educational facilities that will guarantee them a brighter future</p>
        {/* <h5 className="text2 fw-bold mt-5 text-start">Read more </h5> */}
      </div>
    </div>
  </div>
    </div>
    <div className="carousel-item">
    
      <div className="col ">
    <div className="card mx-2 ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body text-center">
        <h2 className="card-title text1">Full scholarship for a child</h2>
        <p className="card-text text2">Lack of equal educational opportunities hinders the potential of unprivilegedchildren. Give a child access to education for life</p>
        {/* <h5 className="text2 fw-bold mt-5 text-start">Read more </h5> */}
      </div>
    </div>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>


</div>

       </div>
    );
}
export default Project;
