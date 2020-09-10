import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteFromCart, updateItemUnits } from '../action/cartActions';
import CartItem from "./cartItem";

class Cart extends React.Component {

    renderCart() {
        return (
            <div>
                {this.cartList()}
            </div>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({ id })
    }
    handleDelUnit(id) {
        let units = -1;
        this.props.updateItemUnits({ id, units })
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({ id, units })
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
                return (
                    <CartItem key={cartItem.id}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                        onDelUnit={this.handleDelUnit.bind(this, cartItem.id)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
                );
            })
        );
    }

    cartTotal() {
        return (
            <span>Total price: $ { this.totalAmount(this.props.cart)}</span>
        );
    }

    totalAmount(cartArray) {
        return cartArray.reduce((total, item) => {
            total += item.productPrice * item.units;
            return total;
        }, 0);
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
                <div>
                    {this.renderCart()}
                    {this.cartTotal()}
                </div>
            );
        }

        return (
            <div>
                Empty Cart
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);