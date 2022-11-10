import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='place-content-center'>
                <h2 className='text-center text-orange'>Welcome to My Blog</h2>

                <div className="card w-full m-12 bg-primary text-primary-content">
  <div className="card-body ">
    <h2 className="card-title text-center">Question: Difference between SQL and NoSQ</h2>
    <p>Answer: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
    NoSQL is a class of DBMs that are non-relational and generally do not use SQL
    SQL databases are relational, NoSQL databases are non-relational.
    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
    </p>
    
  </div>
</div>
                <div className="card w-full m-12 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Question:What is JWT, and how does it work?</h2>
    <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.</p>
    <p>
        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
    </p>
    
  </div>
</div>
                <div className="card w-full m-12 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-center">Question: What is the difference between javascript and NodeJS?</h2>
    <p>Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
    
  </div>
</div> 
                <div className="card w-full m-12 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Question: How does NodeJS handle multiple requests at the same time?</h2>
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.A</p>
    
  </div>
</div>
        </div>
    );
};

export default Blog;