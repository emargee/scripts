
// Trigger : "Linkgrabber Contextmenu Button Pressed"

if (name == "Filter URLs") {
    var filterFileFolder = JD_HOME + "/emargee/";
    if (!getPath(filterFileFolder).exists()) getPath(filterFileFolder).mkdirs();
    
    var filterFilePath = filterFileFolder + "filter.json";
    var filterFile = JSON.parse(readFile(filterFilePath))
    var filterData = filterFile.filter
    var filterExtension = filterFile.extension
    
    var links = lgSelection.getLinks();
    
    for (i = 0; i < links.length; i++) {
        var link = links[i];
        var linkName = link.getName().replace(filterExtension,"");
        if(filterData.indexOf(linkName) >= 0) {
            link.setEnabled(true);
        }
        else{
            link.setEnabled(false);
        }
    }
}