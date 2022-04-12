import classes from './Searchbox.module.css';

function Searchbox (props){
    return(
        <div className={classes.searchbox}>
            <input 
                type="text"
                placeholder="Type in the name of the city"
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                value={props.inputValue}
            />
        </div>
    );
}

export default Searchbox;