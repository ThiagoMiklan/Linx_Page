export async function getProducts(number_page) {
    let products = await window.fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products",{query:{page:number_page}})
                                        .then(res => res.json());
    return products;
}