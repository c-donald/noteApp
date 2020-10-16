class NoteListView {
    constructor(noteList) {
        this.note = noteList
    }

    returnListView() {
        return this.note.returnList();
    }


    outputToHtml() {
        var listView = this.returnListView();
        var html = []

        for (var i = 0; i < listView.length; i++) {
            html.push("<li><div>" + listView[i].slice(0, 20) + "</div></li>")
        }

        return ("<ul>" + html.join("") + "</ul>")
    }
}