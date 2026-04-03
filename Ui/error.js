


export function showError(menssage){
    const app = document.getElementById('app')


    app.innerHTML = `
        <div>
        <p>${menssage}</p>
    </div>`
} 