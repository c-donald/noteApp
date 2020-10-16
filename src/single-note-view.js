class SingleNoteView {
    constructor(noteModel) {
        this.note = noteModel;
    }

    displayView() {
        return `<div>${this.note}</div>`
    }
}

