$(function(){
    //get element with class 'empty_result'
    let empty_result = document.querySelector('.empty_result');

    let dom_result = document.querySelector('.result')
    
    //product state 'if product can be make or not'
    let state;

    //send query on input change
    document.querySelector("#Product-form").addEventListener('input', get_product);
    
    //remove element with class empty_result on search input lost focus
    document.querySelector("#Product-form").addEventListener('focusout', (event) => {
        empty_result.classList.add("d-none");
    });


    /**
     * 
     * @param {*} event 
     *get product and product childs
     */
    function get_product(event){
        empty_result.classList.add("d-none");
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            url: 'http://localhost:8000/product/' + (event.target.value ? event.target.value : 'na'),
            type: "get",
            contentType: false,
            success: function(response) {
                state = true;
                render_result(response)
            },
            error: function(error) {
                console.error(error); 
            }
            
        });
    }

    /**
     * 
     * @param {*} response 
     *set response data on dom
     */
    function render_result(response){
        if (response.status) {
            empty_result.classList.add("d-none");
            dom_result.textContent = "";

            //parent product element
            let product_dependence = document.createElement('ul');
            let li_product = document.createElement('li');
            let product_name = document.createElement('span');
            let product_status = document.createElement('span');
            product_status.classList.add('product_status');
            
            let _child_2_position = 0;

            // set state false if product don't have child
            if(response.data['childs'].length <= 0 && state == true){
                state = false;
            }
            response.data['childs'].forEach(element => {
                // set state false if one child quantity equals 0 
                if(element.quantity == 0 && state == true){
                    state = false;
                }

                li_child = child_element(element);

                let child_product_dependence = document.createElement('ul');
                response.data['childs_2'][_child_2_position].forEach(element => {
                    li_child_2 = child_element(element);
                    child_product_dependence.appendChild(li_child_2);
                });
                _child_2_position+=1;

                li_child.appendChild(child_product_dependence);
                product_dependence.appendChild(li_child);
            });

            product_name.textContent = 'nom: ' + response.data['product'].name + ' quantité: ' + response.data['product'].quantity;
            product_status.textContent = state ? 'fabrication possible': "fabrication impossible";
            product_status.classList.add(state ? 'ok': "none");
            li_product.appendChild(product_name);
            li_product.appendChild(product_status);

            dom_result.appendChild(li_product);
            dom_result.appendChild(product_dependence);

        } else {
            empty_result.classList.remove("d-none");
            dom_result.textContent = "";
        }
    }

/**
 * 
 * @param {*} element 
 * @returns li :child product render
 */
    function child_element(element){
        li = document.createElement('li');
        li.textContent = 'nom: ' + element.name + ' quantité: ' + element.quantity;

        return li
    }
});