# Social Network API 

## Description 

## Table of Contents 
- [Description](#description)
- [Model Overview](#model-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Code Highlight](#code-highlight)
- [Credits](#credits)
- [License](#license)

## Model Overview 

## Installation 
* `git clone` this repository 
* Then open up your CLI
* `cd` into the repository 
* Enter `npm install `
* Then enter `node server.js`

## Usage
After entering `node server.js` in your CLI, you should get a notification like this:  

<img width="973" alt="now-listening" src="https://user-images.githubusercontent.com/112783308/209273088-921ba36e-a611-4ff2-a3e9-5bc1ca2276cd.png">

Now that you know the server is listening, you'll want to open Insomnia and enter the following:

<img width="715" alt="insomnia" src="https://user-images.githubusercontent.com/112783308/209273258-40b41500-3f16-40c2-b89a-b4040ab16122.png">

You can now run all CRUD operations (create, read, update, delete) using your Insomnia tool. For example, here is a gif going through some of the GET routes. 

![get-routes](https://user-images.githubusercontent.com/112783308/209273916-6da87047-6697-4d8b-911d-ea74245be2ba.gif)

Note that this backend is not seeded! So, if you begin with a get request of all users, you won't see anything right away. Start by making a post request: Create a username, enter your email, and then hit send! For example: 

<img width="618" alt="post-request" src="https://user-images.githubusercontent.com/112783308/209276080-52319c52-215c-47a5-8cc4-80f647cd25a2.png">

Now you have begun creating the backend for your social network! 

For further assistance on how to use Insomnia with this application, please view [this demo video](https://www.youtube.com/watch?v=fLcVQs4J714).

## Code Highlight 

Both models make use of similar virtuals. In the User model, there is a virtual to determine 'friendCount;' in the Thought model, there is a virtual to determine 'reactionCount.' Here is a code snippet of the latter virtual: 

<img width="723" alt="reaction-virtual" src="https://user-images.githubusercontent.com/112783308/209274424-0a398bdf-9f74-4854-bc7d-029ce94d5ddb.png">

Virtuals are interesting because they are not included in the model's schema's properties (i.e. the properties in the Thought schema are *thoughtText*, *createdAt*, *username*, *reactions*). In Mongoose, a virtual is a property that is **not** stored in MongoDB. 

Virtuals are used to compute properties on documents. In this instance, we are using virtuals to output the length of the friend or reaction array. 

<img width="478" alt="reaction count on insomnia" src="https://user-images.githubusercontent.com/112783308/209275030-4f61d2b9-48f6-44ba-886e-ee1084ceebe8.png">

## Credits 
Laura Duffy. [GitHub](https://github.com/duffylaura) [Email](lauraduffy700@gmail.com)

## License
MIT. 
