// https://api.zotero.org/itemFields?pprint=1
zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var n=0;
var strdate
var desdate
for (item of items) {

    // item.setField('abstractNote','');
    // await item.save();

    item.setField('DOI','');
    item.setField('ISSN','');
    item.setField('accessDate','');
    item.setField('libraryCatalog','');
    item.setField('language','');
    item.setField('extra','');

    strdate = item.getField('date').split("-");
    for(var i = 0; i < strdate.length; i++) {
        if(strdate[i].length == 4){
            desdate = strdate[i];
            break
        }   
    }

    strdate = item.getField('date').split("/");
    for(var i = 0; i < strdate.length; i++) {
        if(strdate[i].length == 4){
            desdate = strdate[i];
            break
        }   
    }
    item.setField('date',desdate)
    await item.save();
    n++;
    
}
return n