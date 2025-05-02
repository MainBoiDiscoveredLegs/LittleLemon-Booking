import React from 'react';
import recipes from "../recipes";
import Swal from "sweetalert2"


function Menu(){

    const handleOrder = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
          });
          swalWithBootstrapButtons.fire({
            title: "You Are Placing an Order!",
            text: "Are you Sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Place Order",
            cancelButtonText: "No, Cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Ordered!",
                text: "Your Order Has Been Confirmed",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your Order Request Has Been Canceled",
                icon: "error"
              });
            }
          });

    }

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>Specials</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.title} />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={() => handleOrder(recipe.id)} >Place Order</button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Menu;