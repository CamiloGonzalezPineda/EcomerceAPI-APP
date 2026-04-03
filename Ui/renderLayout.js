
export function renderLayout() {
    const app = document.getElementById('app')


    app.innerHTML = `
        <div id="categories"></div>
        <div id="products"></div>
    `
}