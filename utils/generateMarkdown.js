function renderLicenseSection(license) {
  let licenseIMG;
  let licenseLink;
  
  switch (license) {
    case 'MIT':
      licenseIMG = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'APACHE 2.0':
      licenseIMG = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      licenseIMG = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3':
      licenseIMG = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      licenseIMG = '';
      licenseLink = '';
  }

  return {licenseIMG,licenseLink}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(github, email, title, description, license, dependencies, test, information, contribution, licenseIMG, licenseLink) {
  return `# ${title}
  
  [![License: ${license}](${licenseIMG})](${licenseLink})

  ## Description
  ${description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  >${dependencies}

  ## Usage
  ${information}

  ## License
  This project is licensed under the ${license} license.

  ## Contributing
  ${contribution}

  ## Tests
  To run tests, run the following command:
  >${test}

  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${github}](https://github.com/${github})
`;
}

module.exports = {generateMarkdown, renderLicenseSection};
