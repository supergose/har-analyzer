var fs = require("fs")

var file = fs.readFileSync("./input/input.json")
var jsonContent = JSON.parse(file)

let entries = jsonContent.log.entries

let jsonOutput = [] 
jsonOutput = entries.map(element => {
    item = {}
    item.url = element.request.url
    item.time = element.time
    return item
})

fs.writeFile("./output/data.json", JSON.stringify(jsonOutput), 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})
