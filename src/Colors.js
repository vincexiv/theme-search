import { useContext, useEffect, useState } from "react";
import { listDocs } from "@junobuild/core";
import { AuthContext } from "./Auth";
import ColorCards from "./colorCards";
import { Logout } from "./Logout";
import getWebsiteSimilarityRanks from "./utils/compareColors";

export const Colors = () => {
  const { user } = useContext(AuthContext);
  const [colorState, setColorState] = useState({theme: 'light', activeThemeColors: null, items: [], selectedImage: null});

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
      setColorState({theme: 'light', activeThemeColors: null, items: [], selectedImage: null});
      return;
    }

    (async () => await list())();
  }, [user]);

  function updateTheme(newTheme){
    setColorState(colorState => ({...colorState, activeThemeColors: null, theme: newTheme}))
  }

  function getStyle(theme){
    if(theme === colorState.theme){
      return {
        outline: "solid 0.1rem black",
        borderRadius: "2px"
      }
    }
  }

  function updateActiveTheme(activeThemeColors){
    setColorState(colorState => ({...colorState, activeThemeColors: activeThemeColors}))
  }

  function updateSelectedImage(webUrl){
    setColorState(colorState => ({...colorState, selectedImage: webUrl}))
  }

  return (
    <div className="h-screen">
      {
        !colorState.selectedImage ?
          <div className="w-full mx-auto bg-slate-50 shadow-lg rounded-sm border border-gray-200 mt-8 fixed top-0">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Choose a theme you would like for your website</h2>
            </header>

            <div className="flex">
              <div className="p-3 bg-slate-100">    
                <h3 className="font-bold">Category</h3>
                <ul className="color-themes">
                  <li className="cursor-pointer" style={getStyle('light')} onClick={()=>updateTheme('light')}>Light</li>
                  <li className="cursor-pointer" style={getStyle('dark')} onClick={()=>updateTheme('dark')}>Dark</li>
                  <li className="cursor-pointer" style={getStyle('warm')} onClick={()=>updateTheme('warm')}>Warm</li>
                  <li className="cursor-pointer" style={getStyle('cold')} onClick={()=>updateTheme('cold')}>Cold</li>
                  <li className="cursor-pointer" style={getStyle('custom')} onClick={()=>updateTheme('custom')}>Custom</li>
                  <li className="cursor-pointer" style={getStyle('new')} onClick={()=>updateTheme('new')}>New</li>
                </ul>
                <Logout />
              </div>

              <div className="p-3">
                <ColorCards theme={colorState.theme} activeThemeColors={colorState.activeThemeColors} updateActiveTheme={updateActiveTheme}/>
              </div>
            </div>
          </div>

          : ''
      }
        {
          !colorState.selectedImage ?
            <div className="w-full mt-80 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-8 flex flex-wrap gap-10">
              {
                getWebsiteSimilarityRanks(colorState.activeThemeColors)?.map(webUrl => {
                  return <img onClick={()=>updateSelectedImage(webUrl)} className="cursor-pointer" src={webUrl.url} key={webUrl.url.replace(/\W/g, '')} alt={webUrl.url}/>
                })
              }
            </div>

            :

            <img 
              onClick={()=>updateSelectedImage(null)}
              className="cursor-pointer w-full"
              src={colorState.selectedImage.url} alt={colorState.selectedImage.url}/>
        }
    </div>
  );
};
