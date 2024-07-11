const MoreTaskCard = () => {
    const taskData  = [
        {
            title : 'resume screening',
            dis : 'eveluation',
            time : 'may 2, 2024',
        },
        {
            title : 'review',
            dis : 'relationship',
            time : 'may 5, 2024',
        },
     
    ]
    return (
        <div className="tasksection">
            <div className="taskbard">
            <div className="title yc">
                <h1>task</h1>
                <i className="icon-plus-fill"></i>
            </div>
            <div className="tasks">
                {
                    taskData.map((item, index) => (
                        <div key={index} className="taskitem">
                            <h3>{item.title}</h3>
                            <div className="datesec">
                            <p>{item.dis}</p>
                            <p>{item.time}</p>
                            </div>
                  
                        </div>
                    ))
                }
            </div>
            </div>
            <div>2</div>
        </div>
    );
};

export default MoreTaskCard;
