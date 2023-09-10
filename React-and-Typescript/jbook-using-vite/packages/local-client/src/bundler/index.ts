import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

let service = false;
export default async function bundler(rawCode: string) {
  if (!service) {
    await esbuild.initialize({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.19.2/esbuild.wasm",
    });
    service = true;
  }

  try {
    const result = await esbuild.build({
      entryPoints: ["index.ts"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      jsxFactory: "_React.createElement",
      jsxFragment: "_React.Fragment",
    });

    return {
      code: result.outputFiles[0].text,
      err: "",
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        code: "",
        err: err.message,
      };
    } else {
      throw err;
    }
  }
}
