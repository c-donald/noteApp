function returnList() {
    let noteList = new NoteList;
    assert(noteList.returnList().length === 0,
        "Test that list is empty")
}

function createNoteList() {
    let noteList = new NoteList
    let string = "This is a test"
    noteList.create(string)
    assert(noteList.returnList()[0] === "This is a test", "test that string can be created into NoteList")
}



returnList();
createNoteList();
// created fake classes to test our function
/*class NoteMocking {
    constructor(string) {
        this.text = string
    }
}*/
class NoteListMocking {
    constructor() {
        this.list = []
    }


    returnList() {
        return this.list
    }

    create(string) {
        var note = new Note(string)
        this.list.push(note.returnText())
    }

}

(function () {
    notelist = new NoteListMocking
    notelist.create('Can this Mock pass with 20 characters')
    noteListView = new NoteListView(notelist)
    //console.log(noteListView.outputToHtml())
    assert(noteListView.outputToHtml() == '<ul><li><div>Can this Mock pass w</div></li></ul>', 'This Test check the outpuToHtml returns the first 20 characters in html')

})();