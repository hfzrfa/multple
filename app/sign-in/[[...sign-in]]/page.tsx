import { SignIn } from "@clerk/nextjs";

import React from "react";

const page = (): React.ReactElement => {
    return (
        <div className="flex justify-center items-center py-64">
            <SignIn />
        </div>
    );
};

export default page;
