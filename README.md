# Welcome!

This repository contains the the file contents of the website hosted on https://soar-lab.github.io. Our website runs on the React.JS framework and in order to deploy it to GitHub a third-party extension was used that complies the original files to suit the GitHub Pages standard. Therefore, the original files of the website live in this repository and the complied files can be accessed from the **/soar-lab.github.io** repository.

# Making Edits to the Website
To make changes and successfully deploy the website to GitHub Pages, there a few simple steps that must be followed.

## 1. Cloning the repository
First, start by cloning [this repository](https://github.com/SOAR-Lab/soar-website-files.git) to your local machine. You could either use the download-zip option or use the [HTTPS link](https://github.com/SOAR-Lab/soar-website-files.git) to clone the repository using Command Promt (Windows) or Terminal (Mac/Linux).

If using the HTTPS link, then open your command-line interface and navigate to the desired file directory where you would like to clone this repository. There us the following command:
>`git clone https://github.com/SOAR-Lab/soar-website-files.git`

## 2. Downloading Dependencies
There are few more sub-steps before you can make any changes to the website.

 - **Download Node.js:** https://nodejs.org/en/
 - **Download Dependencies:** Open your command promt or Terminal and navigate to the `soar-website-files` directory that you cloned to your local machine. Run the following command to install all the required dependencies for the project: `npm install`
 - **Test the project:** Run the command `npm start` to run the React App on your local server. This an optional, but reccommended, step.
 
## 3. Making changes
Once your have successfully cloned the repository and downloaded the required dependencies, open the folder in your IDE. The website project follows a standard file structure, where the JavaScript files are in the **src** folder and all the assets are in the **public** folder. To make changes to the data you will be updating the files in the **src** folder. The data objects are of type **JavaScript Object** and placed in separate files.
 - **Research Cards:** To update or add new entries to the research page, open **ReseachDB.js** located in `src/Components/ResearchCard`. Each entry follows the same structure.
 >**Note:** All the information should be placed in strings i.e. inside **single-quotes.** The **title of the link** entered will be displayed on the website.
 ```
 {
	 title: 'Title of the Research Card goes here.', 
	 info: 'Any information related to the research goes here.',
	 links : {
			linkTitle: 'https://soar-lab.github.io/',
			linkTitle2: 'https://soar-lab.github.io/'
	}
}
```
 - **Collaborator Cards:** The Collaborator cards are displayed on the Research tab aswell. To update or add new entries to the Collaborators section, open **CollaboratorsDB.js** located in `src/Components/ResearchCard`.
>**Note:** The image to be displayed must be place in the **public** folder that is located in root of the project. The relative path should be structured like this `'/nameOfTheFile.jpg'` and should be placed in single-quotes like any other information.
```
{
	name:  'Name of the Collaborator',
	position:  'Position and associated university',
	website:  'Website link to Collaborator's website',
	picture:  'Relative path to the image to be displayed'
}
```
 - **Publication Cards:** To update or add new entries to the Publications tab, open **PublicationItems.js** located in `src/Components`.
>**Note:** When adding link, if an item does not have a URL associated to it either mark it as **null** or  exclude it from the data object. Remember, the order in which the items are added matters and are displayed accordingly.
```
{
	title: 'Title of the paper goes here',
	author: 'Name of the author goes here',
	year: '2022',
	synopsis: 'Synopsis of the paper goes here',
	abstract: 'Abstract of the paper goes here',
	links: {
		Preprint: 'Some URL',
		DOI: null,
		Slides: null,
		Manuscript: null,
		Dataset: null
	}
}
```
 - **Team Members Card:** To update or add new entries to the Team tab, open **TeamMembers.js** located in `src/Components/Members`.
 >**Note:** The **div** property decides where the Team Member Card will be placed. The valid values for the **div** property are **LabDirector, PHD, Undergraduate, and Alumni**.
 ```
 {
	div: 'Div value to decide where the card appears',
	name: 'Name of the Member',
	picture: 'Relative path of the image in the public folder',
	position: 'Position of the Member',
	info: 'Info about the Member',
	email: null,
	github: null,
	linkedin: 'https://www.linkedin.com/'
}
```

## 4. Testing the changes

This step is optional, but recommended. To run the React App on your local   server run the following command: `npm start`. This will host the app on your local host and open the website on your default browser. This step can be performed earlier, too, and will help you look at the changes that you make without ever having to refresh your browser or rebuild the project.
If everything looks at this point, then let's commit the changes and then deploy the React App!

## 5. Commit and Push
Before deploying the website, the ideal procedure would be to commit and push the changes to this repository. This can be done in four simple steps. Run the following commands from the root of this directory.

 1. **Staging the changes:** `git add -A`
 2. **Commiting the changes:** `git commit -m"Your Message"`
 3. **Checking the status:** `git status`
 4. **Pushing the latest commit:** `git push`

## 6. Deploying the app
This the easiest step of this process. All you need to do is make sure that you are in the root of this project in your Command Prompt or Terminal and run the command `npm run deploy`. Voila! The website has been updated.
>**Note:** It might take up to a few minutes for GitHub to deploy the latest version of your website.