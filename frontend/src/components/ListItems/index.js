import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@material-ui/core/'

import {
    Dashboard as DashboardIcon,
    ShoppingCart as ShoppingCartIcon,
    People as PeopleIcon,
    BarChart as BarChartIcon,
    Layers as LayersIcon,
    Home as HomeIcon,
    HighlightOff as LogoutIcon,
    CardTravel as VendorIcon
} from '@material-ui/icons/'

export const PrimaryListItems = (    
        <div>
            <ListItem button href="/home">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>            
        </div>
    
)

export const SecondaryListItems = props => ( 
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>                
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
        <ListItem button onClick={props.onClick}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout"/>
        </ListItem>
    </div>
  );
