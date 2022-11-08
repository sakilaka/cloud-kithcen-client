import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-purple-300 my-10'>My Blog Here!</h1>
            <div className='bg-rose-400 p-14 my-10 mx-auto lg:w-9/12 w-full text-white'>
                <p className='text-2xl mb-3 font-bold text-center'>Difference between SQL and NoSQL?</p>
                <p className='text-xl my-2 text-center'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL databases are relational, NoSQL databases are non-relational.
                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='bg-purple-400 p-14 my-10 mx-auto lg:w-9/12 w-full text-white'>
                <p className='text-2xl mb-3 font-bold text-center'>What is JWT, and how does it work?</p>
                <p className='text-xl my-2 text-center'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.</p>
            </div>
            <div className='bg-lime-500 p-14 my-10 mx-auto lg:w-9/12 w-full text-white'>
                <p className='text-2xl mb-3 font-bold text-center'>What is the difference between javascript and NodeJS?</p>
                <p className='text-xl my-2 text-center'>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                    JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                    JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                    JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                    JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>
            </div>
            <div className='bg-orange-400 p-14 my-10 mx-auto lg:w-9/12 w-full text-white'>
                <p className='text-2xl mb-3 font-bold text-center'>How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-xl my-2 text-center'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;