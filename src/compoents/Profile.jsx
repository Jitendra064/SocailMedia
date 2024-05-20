import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./Profile.css";
import {
  loggedInUser,
  storagePost,
} from "../storageOperations/storageOperations";

export default function Profile(props) {
  let selfProfilePost = storagePost().filter(
    (e) => e.username === loggedInUser().name
  );

  function ShowAllMyPost() {
    console.log("j");
    props.ShowAllMyPost(true);
    props.ShowAllMyProfile(false);
  }

  return (
    <div
      className="gradient-custom-2 vw-100"
      style={{ backgroundColor: "#9de2ff" }}
    >
      <MDBContainer className="py-3 h-100 w-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://jitendra064.github.io/personalyportfolio/img/img-1.jpg"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{loggedInUser()?.name}</MDBTypography>
                  <MDBCardText>Rajasthan</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Photos
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Followers
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Following
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      MERN Stack Developer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in jaipur
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Photographer
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent photos
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted" onClick={ShowAllMyPost}>
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow className="d-flex">
                  {selfProfilePost.map((e, i) => (
                    <MDBCol className="mb-2" key={i}>
                      <MDBCardImage
                        src={e.image}
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                  ))}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
