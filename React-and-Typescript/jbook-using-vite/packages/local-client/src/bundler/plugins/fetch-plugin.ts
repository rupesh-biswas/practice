import axios from "axios";
import * as esbuild from "esbuild-wasm";
import localforage from "localforage";

const fileCache = localforage.createInstance({
  name: "filecache",
});

export function fetchPlugin(inputCode: string) {
  return {
    name: "fetch-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /^index\.(js|ts)$/ }, () => {
        return {
          loader: "tsx",
          contents: inputCode,
        };
      });

      // build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
      //   const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
      //     args.path
      //   );

      //   if (cachedResult) {
      //     console.log(cachedResult);
      //     return cachedResult;
      //   }
      // });

      build.onLoad({ filter: /.css$/ }, async (args: esbuild.OnLoadArgs) => {
        const { data, request } = await axios.get(args.path);

        const escaped = data.replace(/\\/g, "\\\\");

        const contents = `
          const style = document.createElement('style');
          style.innerText = \`${escaped}\`; 
          document.head.appendChild(style);
          `;

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });

      build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
        const { data, request } = await axios.get(args.path);

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
}
