function noteControllerInstantiated() {
    var notecontroller = new NoteController;
    assert(notecontroller.constructor.name,
        "Does it equal NoteController Class")

}
noteControllerInstantiated();

function returnNoteListModel() {
    var noteListModel = new NoteList;
    var notecontroller = new NoteController(noteListModel)
    notecontroller.notelist.create("Favourite drink: seltzer");

    assert(notecontroller.notelist.returnList()[0] == "Favourite drink: seltzer",
        "This Test if the note is returned back");

} returnNoteListModel();