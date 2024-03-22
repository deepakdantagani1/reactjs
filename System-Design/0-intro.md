### notes
* problem-solving skills
* solves the problem step by step
* explains the idea, discusses with others, and evaluates and optimizes the system

### patterns
* start with simple system

### definitions

* DNS : The Domain Name System (DNS) is an essential component of the Internet's infrastructure, acting as the phonebook of the Internet. It translates human-friendly domain names (like www.example.com) into numerical IP addresses (like 192.0.2.1). 


                  Internet
                    ||
                    \/
          +------------------------+
          |  DNS Resolver (Client) |
          +------------------------+
                    ||
       (1) Query for 'example.com'
                    \/
          +------------------------+
          |    Root DNS Server     |
          +------------------------+
                    ||
       (2) Refers to .com DNS Server
                    \/
          +------------------------+
          |     .com DNS Server    |
          +------------------------+
                    ||
       (3) Refers to 'example.com' DNS Server
                    \/
          +------------------------+
          | 'example.com' DNS Server |
          +------------------------+
                    ||
       (4) Returns IP Address of 'example.com'
                    \/
          +------------------------+
          |  DNS Resolver (Client) |
          +------------------------+
                    ||
       (5) Connects to 'example.com' using IP
                    \/
                 Website


