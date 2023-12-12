import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-karla: Karla;
--font-poppins: Poppins;
--font-big-shoulders-display: 'Big Shoulders Display';

/* font sizes */
--font-size-41xl: 60px;
--font-size-xl: 20px;
--font-size-5xl: 24px;
--font-size-smi-2: 12.2px;
--font-size-24xl-4: 43.4px;

/* Colors */
--color-gray-100: #252525;
--color-gray-200: #0d182e;
--color-white: #fff;
--color-darkslategray-100: #333;
--color-darkslategray-200: #252f42;
--color-silver: #bcbcbc;
--color-steelblue: #035a9d;
--color-whitesmoke: #eff0f4;
--color-limegreen: #32cd32;

/* Border radiuses */
--br-7xs: 6px;
--br-5xs: 8px;
--br-mini: 15px;

}
`;
