![alt text](/assets/img/banner/readme.jpg "Robin")

# About
Robin is light weight award winning web browser. It is designed for low-end machines and for teachers and parents to block websites and terms.We are pleased to have won Two All-Ireland Eircom Spider awards. So far it has been downloaded 40,000 times. The goal is to build a free light weight browser with a built in filtering system.
## Browser

The child can open the app and browse the internet which includes going back and forward in their internet history, refreshing, stopping the page from loading, going home to your homepage and having multiple tabs for easy tasks.

​The child can change the browser theme to their favorite color. Their information is saved. The web browser will sync every 1 min or on load for new settings for blocked websites from the firebase database. The system will sync the information of the current URL into the firebase.

When a child tries to access a blocked website or URL they will be redirected to the homepage and the color/ theme of the website will be changed to black and cannot be changed back until the admin(parent) resets it from the google chrome extension.
​
It will block other browsers from opening if the setting is checked in the chrome extension.

# Installation
```
git clone https://github.com/Projectbird/Robin.git
```
# Set up
**Prerequisites**: [Node.js](https://nodejs.org/), [Node-webkit](https://github.com/nwjs/nw.js) and  [Node-webkit Builder](https://github.com/mllrsohn/node-webkit-builder)
1. First you need to clone this project.
2. Navigate into the Folder
3. Install all gulp dependances ``` npm install ```
- Then build the assets using gulp.

  ```
  gulp
  ```

- Run the following

  ```
  gulp build
  ```

5. This will currently build an 32 and 64 bit osx along with a Windows 64 bit Version build of Robin under the folder build.



# Example

![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/6802210_orig.png "Robin")


# Built in
![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/7878121_orig.png "HTML5") ![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/9471244.png "Css3") ![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/7948503_orig.png "Bootstrap") ![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/4019039.png "Javascript")  ![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/2288309_orig.png "Node.js") ![alt text](http://www.projectbird.com/uploads/6/0/3/3/603320/2258525.png "Node.js")
