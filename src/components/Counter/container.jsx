import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

/**
 * connect（）とは？
 * 第一引数に、渡したいstateやdispatchを渡す
 * 最後の（）にはスコープしたいコンポーネントを指定する
 */
export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
