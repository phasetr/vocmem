import 'katex/dist/katex.min.css';
import {FromMd} from "@vocmem/ui";

export function Md() {
  const txt = `# test
Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.
## expression
$$L = \\frac{1}{2} \\rho v^2 S C_L$$`;
  return FromMd(txt);
}

export default Md;
