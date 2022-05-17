import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <div>
        <h3 className="text-danger">
          Q1:{" "}
          <span className="text-dark">
            Difference between javascript and nodejs
          </span>
        </h3>
        <h4 className="text-success">
          Answer:{" "}
          <span className="text-dark">
            There's a much difference between JavaScript and NodeJs. JavaScript
            is programming language. It running in any web browser with proper
            browser engine. Mainly using for any client site activity for a web
            application like possible attribute validaton or refreshing the
            page. Javascript run any engine like Spider Monkey, V8 etc. <br />{" "}
            On the other hand NodeJs is a interpreter and environment for
            JavaScript with some specific useful libraries which JS programming
            can use sperately. It mainly using for accessing or performing any
            non-blocking operation of any operating system.
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-danger">
          Q2:{" "}
          <span className="text-dark">
            Differences between sql and nosql databases.
          </span>
        </h3>
        <h4 className="text-success">
          Answer:{" "}
          <span className="text-dark">
            SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </span>
        </h4>
      </div>
      <div className="mt-5">
        <h3 className="text-danger">
          Q3:{" "}
          <span className="text-dark">
            What is the purpose of jwt and how does it work?
          </span>
        </h3>
        <h4 className="text-success">
          Answer:{" "}
          <span className="text-dark">
            JWT or JSON Web Token, is an open standard used to share security
            information between two parties, a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand.
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Blogs;
