import React, { Component } from 'react'
import { Image, Center, VStack } from '@chakra-ui/react'
import Logo from './Logo'
import pic from '../static/images/pic.png'
import animated from '../static/gifs/animated.gif'

function SplashMessage() {
    return (
        <Center h="100vh" bg="#1E3A8A">
            <Image src={animated} alt="splash-logo" />
        </Center>
    );
}

export default function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 5000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}