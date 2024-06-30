import { extendTheme } from '@chakra-ui/react'
import '@fontsource/paytone-one';
import '@fontsource/satisfy';
// Supports weights 100-900
import '@fontsource-variable/work-sans';
// Supports weights 400-700
import '@fontsource-variable/dancing-script';

const theme = extendTheme({
    fonts: {
        paytone: `'Paytone One', sans-serif`,
        satisfy: `'Satisfy', cursive`,
        workSans: `'Work Sans Variable', sans-serif`,
        dancingScript: `'Dancing Script Variable', cursive`,
    },
})

export default theme