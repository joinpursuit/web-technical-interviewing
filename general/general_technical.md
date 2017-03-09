# General Technical Interview Questions

### Medium
* What is a closure in JavaScript? Talk through an example
  - A closure is an function wrapped in another function that has access to the variables in the outer function’s scope. The closure has access to variables in its own scope, variables in the enclosing function’s scope, and global variables.

### Difficult
* How does the internet work? What happens when you type https://www.google.com/ into a browser?
  - The browser first will check the URL and try to extract the domain name from it.
  - The browser quires DNS for the IP address of the URL. Usually, the browser will have cached domains previously visited, and the operating system will have cached queries from any number of applications. If neither the browser nor the OS have cached copy of the IP address to that URL, then a request is sent off to the DNS server to ask that URL. DNS server’s IP should be provided(set) by the Internet carrier(AT&T for example).
  - The request should have the packet includes the destination’s IP in its header. Normally, this request is smaller than the maximum packet size, and is thus sent off as a single packet.
  - This packet(has the request content) reaches each piece of network equipment(a node in the Internet) between the client and server, that equipment figures out the next equipment the packet should go. The algorithm for each node to calculate next possible shortest node could be very complicated.
  - The request will finally be lost or get it to its destination, the DNS server. If request lost, your PC will resend a new request.
  - If the server has the address for that domain, it will return it. Otherwise, it will forward the query along to DNS server it is configured to defer to. This happens recursively until the request is fulfilled or it reaches an authoritative name server and cannot go further. If the authoritative name server cannot recognize and resolve the domain name in the request, the respnse indicates failure and the browser gives an error like ‘404’.
  - Assuming the DNS request is successful, that means your browser got the IP address of that URL. This IP address identifies a machine on the Internet. The browser then sends an HTTP request, which consists of a header and optional content.
  - This HTTP request is sent off to the web server host as some number of packets(one packet is not enough in most cases), each of which is routed in the same was the earlier DNS query. Once the request arrives at the web server, it generates a response, and sends the response to the client. The response may be a static page or dynamic response page.
  - Assuming you browser receive the response, it then parses the HTML to render the page. In the process of parsing, browser may find that the web page includes images or other embedded content other than HTML document. More requests will be sent to(maybe these data are distributed in different servers) fetch the embedded content. After receiving all data, the full web page is rendered in your browser.

* What is asynchronous programming, and why is it important in JavaScript?
  - Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.
  Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.
  User interfaces are asynchronous by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger event handlers.
  Node is asynchronous by default, meaning that the server works in much the same way, waiting in a loop for a network request, and accepting more incoming requests while the first one is being handled.
  This is important in JavaScript, because it is a very natural fit for user interface code, and very beneficial to performance on the server.
  - Good to hear:
    An understanding of what blocking means, and the performance implications.
    An understanding of event handling, and why its important for UI code.
  - Red flags:
    Unfamiliar with the terms asynchronous or synchronous.
    Unable to articulate performance implications or the relationship between asynchronous code and UI code.

* Can you name two programming paradigms important for JavaScript app   developers?
  - JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.
  - Good to hear:
    Prototypal inheritance (also: prototypes, OLOO).
    Functional programming (also: closures, first class functions, lambdas).
  - Red flags:
    No clue what a paradigm is, no mention of prototypal oo or functional programming.

* What is the difference between classical inheritance and prototypal inheritance?
  - Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.
  - Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.
  In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance.
  - Good to hear:
    Classes: create tight coupling or hierarchies/taxonomies.
    Prototypes: mentions of concatenative inheritance, prototype delegation, functional inheritance, object composition.
  - Red Flags:
    No preference for prototypal inheritance & composition over class inheritance.

## Attribution
1) [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.x5ngjgluw) by Eric Elliot - Follow him on [Medium](https://medium.com/@_ericelliott)!
2) [What happens when you type “www.example.com” in the browser address and enter press button?](https://jiangchengl.wordpress.com/2015/08/20/what-happens-when-you-type-www-example-com-in-the-browser-address-and-enter-press-button/) by Jiang Cheng - check out his blog [here](https://jiangchengl.wordpress.com/)!
