import { connect } from 'react-redux';

function Counter(props){
    return(
        <>
        <header className="header">{props.count}</header>
        <div className="values">
          <div className="steps-value">
          <p className="p">Steps</p>
          <div className="step-btns">
            {
              [5,10,15].map(value => <button key={value} onClick={() => props.dispatch({type:"updatestep", payload: value})} >{value}</button>)
            }
          </div>
        </div>
        <div className="max-value">
          <p className="p">Max Value</p>
          <div className="step-btns">
            {
              [15,100,200].map(value =><button key={value} onClick={() => props.dispatch({type:"updatemaxvalue", payload: value})} >{value}</button> )
            }
          </div>
        </div>
      </div>
        <div className="inc-dec-btns">
          <button onClick={() => props.dispatch({type:"increment"})} >Increment</button>
          <button onClick={() => props.dispatch({type:"decrement"})}  >Decrement</button>
          <button onClick={() => props.dispatch({type:"reset"})}  >Reset</button>
        </div>
    </>
    )
}

function stateMapToProps(state){
    return {
        count: state.count,
        maxValue: state.maxValue,
        step:state.step,
    }
}

export default connect(stateMapToProps)(Counter);