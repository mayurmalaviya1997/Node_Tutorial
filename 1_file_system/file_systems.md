# Introduction to the fs Module

##### How to check file exist ?**
example
```
const filePath = `./dir/data.txt`
fs.existSync(filePath)
```
#####  Reading and Writing Files
Let's create and write data into a file using fs.writeFileSync (synchronous) and fs.writeFile (asynchronous).

##### Appending and Deleting Files
Instead of overwriting, we can add content to an existing file using fs.appendFileSync and fs.appendFile.