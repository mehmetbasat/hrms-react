import React from 'react'
import { MenuItem, Input, Label, Menu } from 'semantic-ui-react'

export default function Jobs() {
    return (
        <div>
            <Menu className='job' vertical>
                <MenuItem
                    name='inbox'
                >
                    <Label color='teal'>1</Label>
                    Inbox
                </MenuItem>

                <MenuItem
                    name='spam'
                >
                    <Label>51</Label>
                    Spam
                </MenuItem>

                <MenuItem
                    name='updates'
                >
                    <Label>1</Label>
                    Updates
                </MenuItem>
                <MenuItem>
                    <Input icon='search' placeholder='Search mail...' />
                </MenuItem>
            </Menu>
        </div>
    )
}
