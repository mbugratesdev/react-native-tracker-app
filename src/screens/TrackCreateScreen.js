import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const {
        addLocation,
        state: { recording },
    } = useContext(LocationContext)

    const callback = useCallback(
        (location) => {
            addLocation(location, recording)
        },
        [recording]
    )

    const [err] = useLocation(isFocused || recording, callback)

    return (
        <View style={{ marginTop: 30 }}>
            <Text h2>Create a Track</Text>
            <Map />

            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
