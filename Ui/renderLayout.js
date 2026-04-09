
export function renderLayout() {
    const app = document.getElementById('app')


    app.innerHTML = `
        <div id="container-cart"> 

                    <input class='searchInput' type="text" placeholder="Search Product">
                    

                      <div class='countainer-cartCounter'>                  
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M11.5 17h-5.5v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /><path d="M15 19l2 2l4 -4" /></svg>
                                    <div class="countain-counter">
                    <p id='cart-count' class='counter' > 0 </p>
                    </div>
</div>

    <div id="cart"></div>

        </div>   

        <div id="categories"></div>

        <div id="products"></div>
    `
}

