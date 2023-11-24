/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import View from "layouts/sections/components/View";
import BaseLayout from "layouts/sections/components/BaseLayout";
// PageHeaders page components
// import HeaderOne from "../page-headers/components/HeaderOne";
import HeaderOneRCP3 from "./components";
// // PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeadersRCP3() {
  return (
    
    <BaseLayout
      title=""
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "" },
      ]}
    >
      <View title="" code={headerOneCode} height="40rem">
        <HeaderOneRCP3 />
      </View>
    </BaseLayout>
  );
}

export default PageHeadersRCP3;
