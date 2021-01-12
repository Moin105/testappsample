import './content.css';
const Content = (props) =>{
    console.log(props)

    const featureList=[
        {name:'start charge'},
        {name:'stop charge'},
        {name:'charge max range speed'},
        {name:'charge standard range'},
        {name:'start hvac'},
        {name:'stop hvac'},
        {name:'wake up'},
        {name:'refresh data'}
    ]
return (
    <div className="btn">
        {featureList.map(list =>(
            <button>{list.name}</button>
        ) )}
</div>
)
}
export default Content;