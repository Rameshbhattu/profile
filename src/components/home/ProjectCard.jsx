import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    languages_url,
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url}/>
          ) : (
            <Skeleton count={3} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};


const Language = ({ languages_url}) => {
  return (
    <div className="pb-3">
      Languages:{" "}
      {languages_url.length
        ? languages_url.map((language) => (
            <span className="badge bg-light text-dark">
              {language}
            </span>
        ))
        : "code yet to be deployed."}
    </div>
  );
};


export default ProjectCard;
