import FetchWrapper from "./fetchwrapper.js";

document
  .querySelector("#get-user-button")
  .addEventListener("click", function () {
    const getUserResult = document.querySelector("#get-user-result");

    const url = new FetchWrapper(
      "https://serene-garden-99449.herokuapp.com/api/v1/users/"
    );

    url
      .get("getOneUser")
      .then((data) => {
        getUserResult.innerHTML = `
        <pre><code>
{
    "name": "${data.record.firstName} ${data.record.lastName}",
    
    "age": "${data.record.age}",
    
    "email": "${data.record.email}",
    
    "phone": "${data.phone}",
    
    "occupation": "${data.jobTitle} at ${data.company}",
}
        </code></pre>
    
    <span id="view-docs-link"><a href="./resources/docs/getting-started.html">View Documentation</a></span>
        `;
      })
      .catch((error) => {
        getUserResult.innerHTML = `
            <pre><code>
            ${error}
            </code></pre>
            `;
      })
      .finally(() => {
        getUserResult.style.height = "440px";
      });

    /* Hardcoded user result
    getUserResult.innerHTML = `
        <pre><code>
{
    "name": "John Doe",
    
    "age": "42",
    
    "email": "johnny37@gmail.com",
    
    "phone": "555-555-5555",
    
    "occupation": "Web Developer"
}
        </code></pre>
    
    <span id="view-docs-link"><a href="./resources/docs/getting-started.html">View Documentation</a></span>
        `;
    */
  });
