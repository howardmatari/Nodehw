// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.projectTitle}
  by ${data.username}


# TABLE OF CONTENTS

1. [ Description ](#Description)
1. [ Installation ](#Installation)
1. [ Usage](#Usage)
1. [ License](#License)
1. [ Contributing](#Contributing)
1. [ Tests](#Tests)
1. [ Questions](#Questions)




    
  ## Description 
  ${data.description}

  ## Installation
  ${data.installationProcess}

  ## Usage
  ${data.instruction}

  ## License
  ![license](https://img.shields.io/badge/license-${data.licenseName}-blue.svg)

  ## Contributing
  ${data.contributorsGitUserName}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions contact me at ${"data.email"}



  `;
}

module.exports = generateMarkdown;
