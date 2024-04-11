'use client';

import React
from "react";

const GreenhouseJobs = async () => {
    return <>
        <div id="grnhse_app"></div>
        <script async src="https://boards.greenhouse.io/embed/job_board/js?for=lightblocks" />
    </>
}

export default GreenhouseJobs;