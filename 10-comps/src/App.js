import Accordion from "./components/Accordion";

function App(){
    const items = [
        {
            id: "1",
            label: "Can I use React on a project ?",
            content: "You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project."
        },
        {
            id: "2",
            label: "Can I use JavaScript on a project ?",
            content: "You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project."
        },
        {
            id: "3",
            label: "Can I use CSS on a project ?",
            content: "You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project.You can use it on a project."
        }
    ]

    return <Accordion items={items}/>
}

export default App;