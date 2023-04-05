function TaskShow({task}) {
    console.log(task);
    return (
        <div className="task-show">
            <h3>Göreviniz</h3>
            <p>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button>Sil</button>
                <button>Güncelle</button>
            </div>
        </div>
    );
}

export default TaskShow;