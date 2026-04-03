export function ShowLoader() {
    const app = document.getElementById('app')
    
    app.innerHTML = `
        <div>
        <p>Loading....</p>
    </div>
    `
}