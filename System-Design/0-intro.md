### notes
* problem-solving skills
* solves the problem step by step
* explains the idea, discusses with others, and evaluates and optimizes the system
* traffic source comes from two sources: web application and mobile application.

### patterns
* start with simple system
* identify source

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


* IP address : An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main purposes: identifying the host or network interface and providing the location for transferring data. There are two standards for IP addresses: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6).

                 Internet
                    ||
                    \/
          +-----------------------+
          | Internet Service      |
          | Provider (ISP)        |
          | - Assigns IP addresses|
          +-----------------------+
                    ||
           /------------------\
          /                    \
   +------------+          +------------+
   | Home Router|          | Business   |
   | - Public IP|          | Router     |
   | - NAT for  |          | - Public IP|
   |   Private IPs|        | - NAT for  |
   +------------+          |   Private IPs|
       ||   ||             +------------+
       ||   ||                   ||
  +-------+ +-----+            /      \
  |Device1| |Device2|       +-------+ +-------+
  | - Private IP| | - Private IP| |DeviceA| |DeviceB|
  +-------+ +-----+       | - Private IP| | - Private IP|
                          +-------+ +-------+


