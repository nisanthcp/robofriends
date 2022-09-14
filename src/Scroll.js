const Scroll = (props) => {
    return(
        <div style={{ overflow: 'auto', border: '1px solid black', height:'500px'}}>
            {props.children}
        </div>
    );
};
export default Scroll;