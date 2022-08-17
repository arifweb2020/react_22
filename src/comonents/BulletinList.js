//import moment from "moment";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
//import * as FaIcons from "react-icons/fa";

const BulletinList = ({ bulletin }) => {
  const [dropdown, setShowDropdown] = useState(false);

  const showDropDown = () => setShowDropdown(!dropdown);

  return (
    <>
      <Col>
        <Card
          id={bulletin.bbID}
          className="text-center"
          style={{ padding: "10px" }}
        >
          <Row>
            <Col md={6} style={{ textAlign: "left" }}>
              <div
                className={`${
                  bulletin.liveStatus === "live"
                    ? "btn btn-success"
                    : bulletin.liveStatus === "end"
                    ? "btn btn-danger"
                    : "btn btn-warning"
                }`}
                style={{ cursor: "default", textTransform: "capitalize" }}
              >
                {bulletin.liveStatus}
              </div>
            </Col>
            <Col md={6} style={{ textAlign: "right" }}>
              <div className="ellipsis-menu">
                
                {dropdown && (
                  <div className="dropdown-content">
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Card.Body>
            <Card.Title style={{ fontSize: "1rem" }}>
              <strong>{bulletin.title}</strong>
            </Card.Title>
           
            <Card.Text>
              {bulletin.viewCount > 1 ? (
                <>{bulletin.viewCount} Views</>
              ) : (
                <>{bulletin.viewCount} View</>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default BulletinList;
