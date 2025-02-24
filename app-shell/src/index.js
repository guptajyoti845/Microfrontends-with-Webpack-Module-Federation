import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("microfrontend_header/Header"));

const App = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading Header...</div>}>
                <Header />
            </Suspense>
            <h2>Welcome to App Shell</h2>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
