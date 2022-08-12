<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
   
<h3 align="center">bap-nielsmoens</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
In function of my bachelor thesis:
Making the experience of using MakerLabs(3d printing, lasercutting, ...) more accessible to anyone with interest but no/little knowledge.
### Goal
More specifically, this platform tries to be user-friendly for the user in the form of providing information of the various machines and devices present, the possibility to create reports and give feedback if there are problems or defects. In addition, it will also give the possibility of general feedback that can optimize the operation. When it comes to usability for employees and administrators it focuses on the efficient and easy processing of notifications and feedback, but also in maintaining the platform. The goal is to be able to maintain the platform in the most accessible way possible and make adjustments if desired and needed.

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Craft CMS](https://craftcms.com/)
* [Bootstrap](https://getbootstrap.com)
* [materialdesignicons](https://materialdesignicons.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

 
<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

List of things you need to use and how to install them.
* [php 7.4+](https://www.php.net/manual/en/install.windows.php) & [MySQL 5.7+](https://www.php.net/manual/en/install.windows.php)
    * I used [XAMPP](https://www.php.net/manual/en/install.windows.php) to install both (windows only)
* A MySql database manager 
  * [MySQL Workbench](https://www.mysql.com/products/workbench/)
  * [DataGrip](https://www.jetbrains.com/datagrip/)
  * ...
* Install the latest [composer](https://getcomposer.org/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Turn on your MySql server in [XAMPP](https://www.php.net/manual/en/install.windows.php) 
   or use the windows terminal
   ```sh
   mysql -u root -p
   ```
3. Create a new schema called "bap-nielsmoens"
4. Import the MySql database that you cloned from this repo
5. Run de php localhost server
   or use the windows terminal
   ```sh
   php -S localhost:3000
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Init project
- [x] Easily scalable for a MakersLab staff (using craft CMS)
- [x] Add a README
- [x] Add Styling (tailwind or bootstrap)
- [x] Add Dynamic navigation
- [x] Homepage/dashboard
- [x] Location overview page
  - [x] Add location detail page
    - [x] Opening hours
    - [x] Location & contact with Google Maps integration
    - [x] Machines available on location
- [x] Machine list overview page
  - [x] Create detail pages for
    - [x] Report a problem feature
    - [x] Safety rules
    - [x] Instructions section
    - [x] Generate QR code (admins only)
    - [x] Maintenance update (admins only)
- [x] Translations
- [x] User Testing
- [x] Hosting via digital ocean (LEMP STACK)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
Niels Moens - [@nielsmoens](https://www.linkedin.com/in/niels-moens-6b065b134) - nielsmoens.dev@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-url]: https://github.com/nielsmoens
[linkedin-url]: https://www.linkedin.com/in/niels-moens-6b065b134
[product-screenshot]: images/screenshot.png
