import { Map, markerStyle } from '../../components/map/mapView.style'
import { useGetAllEventsQuery } from '../../api/events.service'
import { Marker } from 'react-native-maps'
import React, { Fragment } from 'react'
import { Image } from 'react-native'

const MapScreen = () => {
  const MapMarkers = () => {
    const { data } = useGetAllEventsQuery('')
    return (
            <>
                {data && data.map((marker) => (
                    <Fragment key={marker.id}>
                        {
                            marker.location.latitude && marker.location.longitude
                              ? <Marker coordinate={{
                                latitude: marker.location.latitude,
                                longitude: marker.location.longitude
                              }}
                                        title={marker.name}
                                        description={'Lieu : ' + marker.location.name}
                                >
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={'contain'}
                                        source={require('../../../assets/images/markers/Fant_violet.png')}
                                    />
                                </Marker>
                              : null
                        }
                    </Fragment>
                ))
                }
            </>
    )
  }
  return (
        <>
            <Map
                initialRegion={{
                  latitude: 43.604466,
                  longitude: 1.442929,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05
                }}
            >
                <MapMarkers/>
            </Map>
        </>
  )
}

export default MapScreen
