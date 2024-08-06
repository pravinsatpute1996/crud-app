import React from "react";
import { Link } from "react-router-dom";

import Chart from "react-apexcharts"
function Graph(){
return(
    <>
    <div>
    <h3 className="p-2 text-center"> Detail View In Bar Chart</h3>
    <Link to="/" className="btn btn-success text-white ms-4 mb-2">Go Back</Link>
    </div>
    <Chart 
    width={1280}
    type="bar"height={700}
    series={[{name:"patient strienth",
        data:[1245,1642,4444,4342,2322,5000]
    }]}
    options={{
        
    }}
    >

    </Chart>
    </>
)
}
export default Graph