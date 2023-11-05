import { useContext, useEffect, useState } from "react";
import { listDocs } from "@junobuild/core";
import { AuthContext } from "./Auth";
import ColorCards from "./colorCards";

export const Colors = () => {
  const { user } = useContext(AuthContext);
  const [colorState, setColorState] = useState({theme: 'light', items: []});

  useEffect(() => {
    window.addEventListener("reload", list);

    return () => {
      window.removeEventListener("reload", list);
    };
  }, []);

  const list = async () => {
    const { items } = await listDocs({
      collection: "urls",
    });

    setColorState(colorState => ({...colorState, items: items}));
  };

  useEffect(() => {
    if ([undefined, null].includes(user)) {
      setColorState({theme: 'light', items: []});
      return;
    }

    (async () => await list())();
  }, [user]);

  function updateTheme(newTheme){
    setColorState(colorState => ({...colorState, theme: newTheme}))
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-8">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Choose a theme you would like for your website</h2>
      </header>

      <div className="flex">
        <div className="p-3 bg-slate-100">    
          <h3 className="font-bold">Category</h3>
          <ul className="color-themes">
            <li className="cursor-pointer" onClick={()=>updateTheme('light')}>Light</li>
            <li className="cursor-pointer" onClick={()=>updateTheme('dark')}>Dark</li>
            <li className="cursor-pointer" onClick={()=>updateTheme('warm')}>Warm</li>
            <li className="cursor-pointer" onClick={()=>updateTheme('cold')}>Cold</li>
          </ul>
        </div>

        <div className="p-3">
          <ColorCards theme={colorState.theme}/>
        </div>
      </div>

    </div>
  );
};
