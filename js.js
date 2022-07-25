
const interval_application_search = setInterval(() => {
    if (window.location.href.includes('orders-list.php')) {
        if (document.querySelector('#botttomMenu') && document.querySelector('#orders_summary')) {

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
                    .then(async (response) => {
                        if ('message' in response)
                            window.alert(response.message)
                        if ('data' in response) {
                            const orders = [...document.querySelectorAll('.ace')]
                            for (const y in orders) {
                                if (!isNaN(parseInt(orders[y].value))) {
                                    const find = response.data.find(e => e == orders[y].value)

                                    if (find && orders[y].checked == false) {
                                        try {
                                           await fetch(`/panel/orderd.php?idt=${find}`).then(res => res.text())
                                                .then(text => new DOMParser().parseFromString(text, 'text/html'))
                                                .then(document => {
                                                    const children_ = [... document.querySelectorAll('#msg_text_msg')];
                                            let tmp_text = ``
                                            for (const yy in children_)
                                                tmp_text += children_[yy].innerText.trim()
                                            if (tmp_text.includes(`Zamówienie znajduje się jeszcze w kolejce zamówień do dostawcy`)) {
                                                try {
                                                    const toChange_background = orders[y].parentElement.parentElement.parentElement.parentElement.children
                                                    for (const loa in toChange_background) {
                                                        toChange_background[loa].style.backgroundColor = '#82757d'
                                                    }
                                                } catch (error) {}
                                            } else if (tmp_text.includes(`Zamówienie jest w trakcie realizacji przez dostawcę`)) {
                                                console.log('juz przekazane')
                                            } else {
                                                try {
                                                    const toChange_background = orders[y].parentElement.parentElement.parentElement.parentElement.children
                                                    for (const loa in toChange_background) {
                                                        toChange_background[loa].style.backgroundColor = '#c9363a'
                                                    }
                                                } catch (error) {}
                                                orders[y].click()
                                            }
                                                })
                                                .catch((er)=>{
                                                    try {
                                                        const toChange_background = orders[y].parentElement.parentElement.parentElement.parentElement.children
                                                        for (const loa in toChange_background) {
                                                            toChange_background[loa].style.backgroundColor = '#c9363a'
                                                        }
                                                    } catch (error) {}
                                                    orders[y].click()
                                                })


                                          
                                        } catch (error) {
                                            try {
                                                const toChange_background = orders[y].parentElement.parentElement.parentElement.parentElement.children
                                                for (const loa in toChange_background) {
                                                    toChange_background[loa].style.backgroundColor = '#c9363a'
                                                }
                                            } catch (error) {}
                                            orders[y].click()
                                        }





                                    }
                                }
                            }


                        }
                        window.alert('System zakończył prace!')
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