(function () {
    singleNoteView = new SingleNoteView();
    assert(singleNoteView instanceof SingleNoteView, 'This test checks if singleNoteView var instantiate with its Class'
    );

})();
class NoteMock {
    constructor(text) {
        this.text = text
    }
}

(function () {
    note = new NoteMock('Hello');
    singleNoteView = new SingleNoteView(note);
    assert(singleNoteView.note.text == 'Hello', 'This test checks that can a note in the constructor and access it')
})();

(function () {
    note = new NoteMock('Pepsi');
    singleNoteView = new SingleNoteView(note)
    assert(singleNoteView.displayView() == '<div>Pepsi</div>', 'This test checks if HTML is return in a single note')

})();
