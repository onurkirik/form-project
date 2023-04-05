import { useState } from "react";

function TaskCreate({ onCreate }) {

    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

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
    );
}

export default TaskCreate;