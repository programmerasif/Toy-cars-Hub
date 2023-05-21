

const Blog = () => {
    return (
        <div className="flex justify-center items-center h-full mt-10 w-[80%] mx-auto">
            <div>
            <h5 className="text-3xl "> 1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
            <p className="mb-5">Ans : An access token is a credential that grants access to specific resources and is obtained after successful authentication. It is used to authenticate API requests made by a client to access protected resources. Access tokens have an expiration time to ensure security and prevent unauthorized access. It's important to store access tokens and refresh tokens securely on the client-side to prevent unauthorized access, typically using mechanisms like browser storage or secure cookies.</p>


            <h5 className="text-3xl"> Compare SQL and NoSQL databases?</h5>
            <p className="mb-5">Ans : SQL databases, based on Structured Query Language, adhere to a structured data model with predefined schemas. They employ tables to store data, each having a fixed schema. On the other hand, NoSQL databases, short for "Not Only SQL," are designed to handle unstructured or semi-structured data. They utilize a variety of data models, such as key-value, document, columnar, or graph-based.</p>

            <h5 className="text-3xl">What is express js? What is Nest JS ?</h5>
            <p className="mb-5">Ans : Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web servers and APIs by providing a minimalist middleware layer and routing system . On the other hand, NestJS is a progressive and opinionated framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular's architecture and design principles. </p>
            <h5 className="text-3xl"> What is MongoDB aggregate and how does it work</h5>
            <p>Ans : MongoDB's aggregate is a powerful framework that allows for advanced data processing and analysis within the MongoDB database. It enables developers to perform complex aggregation operations on collections of documents using a pipeline approach. The aggregate pipeline consists of multiple stages, each performing a specific operation on the data. These stages can include filtering, sorting, grouping, transforming, and combining data from multiple documents or collections.  </p>
            
            </div>
        </div>
    );
};

export default Blog;