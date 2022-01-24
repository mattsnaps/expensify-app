import React, {useCallback} from "react";
import { useParams} from "react-router-dom";

const EditExpensePage = () => {
    console.log();
    return (
        <div>
            Editing the expense with id of {useParams().id}
        </div>
    );
};

export default EditExpensePage;