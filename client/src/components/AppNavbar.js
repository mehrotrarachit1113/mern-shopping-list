import React , { Component } from 'react';
import {
    Collapse,
    NavbarToggler,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    NavItem,
    Container
} from 'reactstrap'
import { deflateSync } from 'zlib';

class AppNavbar extends Component {
    constructor(props) {
        super(props)
        this.set = {
            isOpen = false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar color = 'dark' dark expand = 'sm' className = 'mb-5'>
                    <Container>
                        <NavbarBrand href = '/'>ShoppingList</NavbarBrand>
                        <NavbarToggler onClick = {this.toggle} />
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar