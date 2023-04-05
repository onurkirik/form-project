import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate }) {

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        // Formun submit olması durumunda sayfanın yenilenmesi olayını engelledik.
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }

    return (
        <div>
            {taskFormUpdate ? (
                <div className="task-update">
                    <h3>Lütfen Görev Düzenleyiniz</h3>
                    <form className="task-form">
                        <label>Başlığı düzenleyiniz</label>
                        <input value={title} onChange={handleChange} type="text" />
                        <label>Görev düzenleyiniz</label>
                        <textarea rows={5} onChange={handleTaskChange} ></textarea>
                        <button onClick={handleSubmit}>Düzenle</button>
                    </form>
                </div>
            ) : (
                <div className="task-create">
                    <h3>Lütfen Görev Ekleyiniz</h3>
                    <form className="task-form">
                        <label>Başlık</label>
                        <input value={title} onChange={handleChange} type="text" />
                        <label>Görev Giriniz!</label>
                        <textarea rows={5} onChange={handleTaskChange} ></textarea>
                        <button onClick={handleSubmit}>Oluştur</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default TaskCreate;