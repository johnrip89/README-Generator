// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(!data) {
    return '';
  }
  return `![${data}](https://img.shields.io/badge/License-${data}-brightgreen)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(!data) {
    return '';
  }
  return `https://choosealicense.com/licenses/${data}/`;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data) {
    return '';
  }
  return `## License
  ${data}`;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Contributors](#contributors)

  -[How to test](#test)

  -[License](#license)

  -[Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## How to test
  ${data.test} 
  
  ${renderLicenseSection(data.license)}  
  ${renderLicenseLink(data.license)}

  ## Questions
  https://github.com/${data.github}

  ${data.email}
  `;  
};

module.exports = generateMarkdown;

