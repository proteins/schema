# Protein JSON schema
## A schema to validate that a given protein description file is valid according to the latest JP spec.

### Why?
Super-important for testing.

### How do I use it?
Install it (for use in code):
`npm install proteins-schema`
Install it (for jpvalidate):
`npm install -g proteins-schema`

Run tests:
`npm test`

To test your own file:
`psvalidate < <your_file_here>`