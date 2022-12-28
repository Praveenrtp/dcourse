import react from 'react';
import { View } from '@aws-amplify/ui-react';
import { NavBar } from '../../ui-components';

export default function Layout() {
    return (
        <View width="1200px" marginLeft="auto" marginRight="auto">
            <NavBar 
            marginTop="20px" />
        </View>
    );
}