import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'RFID Scanner',
    webDir: 'www',
    server: {
        androidScheme: 'http',
        cleartext: true,
    },
    android: {
        allowMixedContent: true
    }
};

export default config;
