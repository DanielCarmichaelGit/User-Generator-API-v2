import FetchWrapper from "./fetchwrapper.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$("#get-user-button")
  .addEventListener("click", (event) => {
    event.target.disabled = true;
    event.target.innerHTML = `
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `;

    const getUserResult = $("#get-user-result");

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
    
    <span id="view-docs-link"><a href="./frontend/docs/getting-started.html">View Documentation</a></span>
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
        event.target.disabled = false;
        event.target.innerHTML = "GET USER";
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