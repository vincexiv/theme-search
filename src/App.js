import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect } from "react";
import { Colors } from "./Colors";

function App() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "w5dav-siaaa-aaaal-adcia-cai",
      }))();
  }, []);

  return (
    <>
      <div className="isolate bg-white">
        <main>
          <div className="p-5">
            {/* <h1 className="font-bold tracking-tight text-gray-900 sm:text-2xl">
              Colors
            </h1> */}

          </div>
          <div className="relative px-2 lg:px-8">
            <div className="mx-auto pt-16">
              <div className="text-center">
                <Auth>
                  <Colors />
                </Auth>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
