// function to generate markdown for README
  
function generateMarkdown(data) {
  console.log(data + "in generate read-me");
  let reformatted = JSON.parse(data);
  console.log(reformatted.Title + "PARSED in generate read-me")
  return `
  ![GitHub Issues state](https://img.shields.io/github/issues/tonycrosby-tech/readme_generator)
  ![GitHub License:](https://img.shields.io/github/license/tonycrosby-tech/readme_generator)
  ![GitHub Stars:](https://img.shields.io/github/stars/tonycrosby-tech/readme_generator)
# ${reformatted.Title}
# ${`Description`}
${reformatted.Description}
# ${`Table of Contents`}
* ${`[Installations]`}(#Installations)
* ${`[Usage]`}(#Usage)
* ${`[License]`}(#License)
* ${`[Credits]`}(#Credits)
* ${`[Test]`}(#Test)
* ${`[Contributing]`}(#Contributing)
# ${`Installations`}
> ${reformatted.Installations}
# ${`Usage`}
${reformatted.Usage}
# ${`License`}
${reformatted.License}
# ${`Credits`}
${reformatted.Credits}
# ${`Test`}
${reformatted.Test}
# ${`Contributing`}
${reformatted.Contributing}
`;
}

module.exports = generateMarkdown;
