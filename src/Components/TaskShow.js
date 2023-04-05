import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    return (
        <div className="task-show">

            {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} />) : (<div>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button onClick={handleDeleteClick} >Sil</button>
                    <button onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>
            )}


        </div>
    );
}

export default TaskShow;