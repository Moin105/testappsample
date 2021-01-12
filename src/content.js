import './content.css';
const Content = (props) =>{
    console.log(props)
return (
    <div className="btn">
<button>{props.name}</button>
</div>
)
}
export default Content;