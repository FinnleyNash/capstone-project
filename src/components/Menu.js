import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is checked");
        Swal.fire({
            title: "Are you sure?",
            text: "If you change your mind, you can edit your basket at checkout",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add this to my order"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Added to your basket",
                text: "Great choice!",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials</h2>
                <button>Order Menu</button>
            </div>


        <div className="cards">
            {
                recipes.map(recipe => <div key={recipe.id} className="menu-items">
                    <img src={recipe.image} alt=""/>
                    <div className="menu-content">
                    <div className="heading">
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Here</button>
                    </div>
                </div>)
            }

        </div>

        </div>

    );
};

export default Menu;