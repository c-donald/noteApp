function noteListViewHtml() {
    var noteList = new NoteList
    noteList.create("Favourite food: pesto")
    noteList.create("Favourite drink: seltzer")

    var noteListView = new NoteListView(noteList)
    assert(noteListView.outputToHtml() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>",
        "Can Test output to HTML")

}

noteListViewHtml();