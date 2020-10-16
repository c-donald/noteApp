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
class NoteMocking {
    constructor(string) {
        this.text = string
    }
}

class NoteListMock {
    constructor(note) {
        this.note = [note]
    }
}

(function () {
    note = new Note('Can this Mock pass with 20 characters')
    noteList = new NoteList(note)
    noteListView = new NoteListView(noteList)
    //console.log(noteListView.outputToHtml())
    assert(noteListView.outputToHtml() == '<ul><li><div>Can this Mock pass w</div></li></ul>', 'This Test check the outpuToHtml returns the first 20 characters in html')

})();