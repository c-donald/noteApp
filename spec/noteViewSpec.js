function noteListViewHtml() {
    var noteList = new NoteList
    noteList.create("food: pesto")
    noteList.create("drink: seltzer")

    var noteListView = new NoteListView(noteList)
    assert(noteListView.outputToHtml() === "<ul><li><div>food: pesto</div></li><li><div>drink: seltzer</div></li></ul>",
        "Can Test output to HTML")

}

noteListViewHtml();