//var y = document.getElementById("app");
//y.innerHTML = "howdy"

class NoteController {
    //     constructor(noteList) {
    //         this.noteList = noteList
    //     }

    constructor(noteList) {
        this.notelist = noteList;
        this.notelistView = new NoteListView(noteList)
    }

    insertHtml() {
        var element = document.getElementById("app")
        console.log(y)
        element.innerHTML = this.notelistView.outputToHtml()
    }
}
// var y = new NoteController(new noteList);