class MyHTMLBlock {
    constructor(block_name, button_name) {
        this._block = document.getElementById(block_name);
        this._button = document.getElementById(button_name);
        this._hidden = this._block.getAttribute("class") === 'hidden';
    }

    get btn() {
        return this._button;
    }

    onClick() {
        if (this._hidden) {
            this._block.setAttribute('class', 'main');
            this._hidden = false;
            this._button.classList.add("switched");
            for (let i = 0; i < 3; i++) {
                if (blocks[i] !== this) {
                    blocks[i].hide()
                }
            }
        }
    }

    hide() {
        this._block.setAttribute('class', 'hidden');
        this._hidden = true;
        this._button.classList.remove("switched");
    }

    changeButton() {
        if (!this._hidden) {
            this._button.classList.add("switched");
        }
    }
}

let blocks = ["geo", "bio", "obj"];

// Только после полной прогрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 3; i++) {
        blocks[i] = new MyHTMLBlock(blocks[i], blocks[i] + "Btn");
        let cur_block = blocks[i];

        cur_block.changeButton();
        cur_block.btn.addEventListener('click', () => {
            cur_block.onClick()
        })
    }
})
