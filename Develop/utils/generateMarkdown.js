// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  return `https://img.shields.io/badge/License-${data.license}-brightgreen`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  return `https://choosealicense.com/licenses/${license}/`;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return `## License
  ${data.license}`;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## How to test
  ${data.test}`;  
}

module.exports = generateMarkdown;