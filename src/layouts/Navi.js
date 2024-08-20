import React from "react"
import {
    MenuMenu,
    MenuItem,
    Button,
    Menu,
    Container
} from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <MenuItem
                        name='HRMS'
                    />
                    <MenuItem
                        name='Companies'
                    />
                    <MenuItem
                        name='Candidates'
                    />
                    <MenuItem
                        name='Job Advertisements'
                    />

                    <MenuMenu position='right'>
                        <MenuItem>
                            <Button primary>Log In</Button>
                        </MenuItem>

                        <MenuItem>
                            <Button primary>Sign Up</Button>
                        </MenuItem>
                    </MenuMenu>
                </Container>

            </Menu>
        </div>
    )
}