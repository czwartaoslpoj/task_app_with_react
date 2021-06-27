const tasks = [
    {
        id: 1,
        text: 'Eat a cookie',
        day: 'Jun 27th 2:40pm',
        reminder: true,
    }, 
    {
        id:2, 
        text: 'Feed a cat',
        day: 'Jun 27th 6pm',
        reminder: true,
    }
]

const Tasks = () => {
    return (
        <>
        {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>))}
            
        </>
    )
}

export default Tasks
