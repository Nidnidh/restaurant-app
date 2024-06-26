
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemFrom = props =>{
    return<form className = {classes.form}>
        <Input label= "Amount" input ={{
            id: 'Amount',
            type: 'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ Add</button>
    </form>
};

export default MealItemFrom;