# Introduction to the fs Module

##### How to check file exist ?
example
```
const filePath = `./dir/data.txt`
fs.existSync(filePath)
```
#####  Reading and Writing Files
Let's create and write data into a file using fs.writeFileSync (synchronous) and fs.writeFile (asynchronous).

##### Appending and Deleting Files
Instead of overwriting, we can add content to an existing file using fs.appendFileSync and fs.appendFile.

### Working with Directories

Create directories
Read directory contents
Check if a directory exists
Delete directory
Delete directory and it's all sub directory
Make an Array of Directory and its all sub direcoty
Make copy of file in given direcoty
move Direcoty 
Rename Directoy 
Rename Directoy Recussively
Merge Two Directoy and merge its all files