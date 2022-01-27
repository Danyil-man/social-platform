import React from "react";
import loading from "../../img/loading.svg";
import load from "../../../App.css";

const PreLoader = (props) => {
    return(
        <div className={load.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}
export default PreLoader;