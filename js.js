
const interval_application_search = setInterval(() => {
    if (window.location.href.includes('orders-list.php')) {
        if (document.querySelector('#botttomMenu')) {
            clearInterval(interval_application_search)
            const button = document.createElement('input')
            button.id = 'searchBTN_BRANDSMANAGO'
            button.className = 'formbutton btn btn-sm btn-primary'
            button.value = "Zostaw NIEdropshippingowe"
            button.type = "button"
            document.querySelector('#botttomMenu').appendChild(button)
            const tregrgerhytj4fwefsdvcdsegreger = `fewjfniu45h738gf76f5382hcf5r382chgvr27c8r51203t21gcydusvfdtsf6832036t4g23gffefewfwgreger`
            button.addEventListener('click', function () {
                this.disabled = true
                fetch('https://dropfiltr.brandsmanago.pl/sort_data', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            token: tregrgerhytj4fwefsdvcdsegreger
                        })
                    })
                    .then(res => res.json())
                    .then((response) => {
                        if ('message' in response)
                            window.alert(response.message)
                        if ('data' in response) {
                            const orders = [...document.querySelectorAll('.ace')]
                            for (const y in orders) {
                                if (!isNaN(parseInt(orders[y].value))) {
                                    const find = response.data.find(e => e == orders[y].value)

                                    if (find && orders[y].checked == false) {
                                        orders[y].click()
                                    }
                                }
                            }
                        }
                        this.disabled = false
                    })
                    .catch((er) => {
                        if ('message' in er)
                            window.alert(er.message)
                        this.disabled = false
                    })
            })

        }

    } else {
        clearInterval(interval_application_search)
    }
}, 1000);


