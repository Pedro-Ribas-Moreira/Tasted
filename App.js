import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./routes/RootNavigator";

// ADD ROUTES
// ADD FIREBASE AUTH
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
}
